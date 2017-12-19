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
    this.setState({ svg: svgNode });
    this.props.onSVGReady(svgNode);
  }

  render() {
    const { path, onSVGReady, children, ...props } = this.props;

    return (
      <React.Fragment>
        <SVGLoader
          path={this.props.path}
          onSVGReady={this.onSVGReady}
          {...props}
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
