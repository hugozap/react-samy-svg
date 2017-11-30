import React from 'react';
import PropTypes from 'prop-types';
import SVGLoader from './SVGLoader';
import isEqual from 'lodash/fp/isEqual';

class Samy extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    onSVGReady: PropTypes.func,
    svgAttributes: PropTypes.object
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
    //set svgAttributes
    if (svgNode && this.props.svgAttributes) {
      Object.keys(this.props.svgAttributes).reduce((svgNode, key) => {
        svgNode.setAttribute(key, this.props.svgAttributes[key]);
        return svgNode;
      }, svgNode);
    }

    this.setState({ svg: svgNode });
    this.props.onSVGReady(svgNode);
  }

  componentWillReceiveProps(nextProps) {
    //Apply properties to svg element
    if (!isEqual(this.props.svgAttributes, nextProps.svgAttributes)) {
      if (this.state.svg) {
        Object.keys(nextProps.svgAttributes).reduce((svgNode, key) => {
          svgNode.setAttribute(key, nextProps.svgAttributes[key]);
          return svgNode;
        }, this.state.svg);
      }
    }
  }

  render() {
    return (
      <div>
        <SVGLoader
          className={this.props.className}
          style={this.props.style}
          path={this.props.path}
          onSVGReady={this.onSVGReady}
        />
        {this.props.children}
      </div>
    );
  }
}

Samy.defaultProps = {
  onSVGReady: () => {}
};

export default Samy;
