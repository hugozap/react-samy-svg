import React from 'react';
import PropTypes from 'prop-types';

/*
 * SvgProxy works as a virtual svg node.
 * @selector: The css selector of the element
 * @onElementSelected: callback in case the svg node is needed
 * @children : string supported (for text elements
 */
export default class SvgProxy extends React.Component {
  static propTypes = {
    selector: PropTypes.string.isRequired,
    onElementSelected: PropTypes.func,
    children: PropTypes.string
  };

  static contextTypes = {
    svg: PropTypes.object
  };

  constructor(props, context) {
    super(props);
    this.state = {
      elemRefs: []
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    let { elemRefs } = this.state;

    if (nextContext.svg && elemRefs.length === 0) {
      //We don't have the svg element reference.

      let nodes = Array.from(
        nextContext.svg.querySelectorAll(this.props.selector)
      );
      if (nodes.length === 0 && ['svg', 'root'].includes(this.props.selector)) {
        //If the selector equls 'svg' or 'root' use the svg node
        nodes.push(nextContext.svg);
      }
      // Call the onElementSelected callback with the element (or array)
      if (this.props.onElementSelected && nodes.length) {
        this.props.onElementSelected(nodes.length === 1 ? nodes[0] : nodes);
      }

      elemRefs = nodes;
      this.setState({ elemRefs: nodes });
    }

    if (elemRefs) {
      for (let propName of Object.keys(nextProps)) {
        //Ignore component props
        if (['selector', 'onElementSelected'].includes(propName)) {
          continue;
        }
        elemRefs.forEach(elem => {
          // TODO: replace this with a faster alternative
          if (typeof nextProps[propName] === 'function') {
            elem[propName.toLowerCase()] = nextProps[propName];
          } else {
            //https://developer.mozilla.org/en/docs/Web/SVG/Namespaces_Crash_Course
            elem.setAttributeNS(null, propName, nextProps[propName]);
            if (
              typeof this.props.children === 'string' &&
              this.props.children.trim().length
            ) {
              elem.innerHTML = this.props.children;
            }
          }
        });
      }
    }
  }

  render() {
    return null;
  }
}

SvgProxy.defaultProps = {
  onElementSelected: () => {}
};
