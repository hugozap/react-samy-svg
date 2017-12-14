import React from 'react';
import PropTypes from 'prop-types';
import SVGLoader from './SVGLoader';
import isEqual from 'lodash.isequal';

class Samy extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    onSVGReady: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element
    ]),
    style: PropTypes.object
  };

  static childContextTypes = {
    svg: PropTypes.object
  };

  getChildContext() {
    return {
      svg: this.state.svg
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      svg: null
    };

    this.onSVGReady = this.onSVGReady.bind(this);
  }
  onSVGReady(svgNode) {
    const { path, onSVGReady, style, children, ...props } = this.props;
    if (svgNode && props) {
      Object.keys(props).reduce((svgNode, key) => {
        svgNode.setAttribute(key, props[key]);
        return svgNode;
      }, svgNode);
    }

    this.setState({ svg: svgNode });
    this.props.onSVGReady(svgNode);
  }

  componentWillReceiveProps({
    path: nextPath,
    onSVGReady: nextOnSVGReady,
    children: nextChildren,
    style: nextStyle,
    ...nextProps
  }) {
    const { path, onSVGReady, style, children, ...props } = this.props;
    //Apply properties to svg element
    if (!isEqual(props, nextProps)) {
      if (this.state.svg) {
        Object.entries(nextProps).reduce((svgNode, [key, value]) => {
          svgNode.setAttribute(key, value);
          return svgNode;
        }, this.state.svg);
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <SVGLoader
          className={this.props.className}
          style={this.props.style}
          path={this.props.path}
          onSVGReady={this.onSVGReady}
        />
        {this.props.children}
      </React.Fragment>
    );
  }
}

Samy.defaultProps = {
  onSVGReady: () => {}
};

export default Samy;
