import React from "react";
import PropTypes from "prop-types";

/*
 * SvgProxy works as a virtual svg node.
 * @selector: The css selector of the element
 * @onElementSelected: callback in case the svg node is needed
 * @children : string supported (for text elements
 */
export default class SvgProxy extends React.Component {
  static propTypes = {
    selector: PropTypes.string.isRequired,
    onElementSelected: PropTypes.func
  };

  static contextTypes = {
    svg: PropTypes.object
  };

  constructor(props, context) {
    super(props);
    this.state = {
      elemRefs: []
    };

    this.originalValues = {};
  }

  componentDidMount() {
    /* 
     Note: The parent component <Samy>
     only renders children when the svg has been loaded
     so we know we have it in context
    */
    this.updateSvgElements(this.props, this.context);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    //If a prop has changed then update the element
    this.updateSvgElements(nextProps, nextContext);
  }

  updateSvgElements(nextProps, nextContext) {
    let { elemRefs } = this.state;

    if (nextContext.svg && elemRefs.length === 0) {
      //We don't have the svg element reference.

      let nodes = Array.from(
        nextContext.svg.querySelectorAll(this.props.selector)
      );
      if (nodes.length === 0 && ["svg", "root"].includes(this.props.selector)) {
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
        if (["selector", "onElementSelected"].includes(propName)) {
          continue;
        }
        //Apply attributes to node
        elemRefs.forEach(elem => {
          if (typeof nextProps[propName] === "function") {
            elem[propName.toLowerCase()] = nextProps[propName];
          } else {
            //Discard non string props 
            //TODO: Support style conversion
            if (typeof nextProps[propName] != 'string') {
              return;
            }
            //Save originalValue
            if (this.originalValues[propName] == null) {
              this.originalValues[propName] = elem.getAttributeNS(null, propName) || ''
            }
            //TODO: Optimization, avoid using replace everytime
            const attrValue = nextProps[propName].replace('$ORIGINAL', this.originalValues[propName])
            //https://developer.mozilla.org/en/docs/Web/SVG/Namespaces_Crash_Course
            elem.setAttributeNS(null, propName, attrValue);
            //Set inner text
            if (
              typeof this.props.children === "string" &&
              this.props.children.trim().length
            ) {
              elem.textContent = this.props.children;
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
