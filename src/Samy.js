import React from 'react';
import PropTypes from 'prop-types';
import SVGLoader from './SVGLoader';

class Samy extends React.Component {
  static propTypes = {
    path: PropTypes.string,
    //if we have the svg text we can use that instead of loading it with ajax
    svgXML: PropTypes.string,
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
    this.mounted = false;
    this.state = {
      svg: null
    };

    this.onSVGReady = this.onSVGReady.bind(this);
    if (React.Fragment == null) {
      throw new Error("This version of React doesn't support Fragments, please update it");
    }
  }
  onSVGReady(svgNode) {
    if ( this.mounted ) {
      this.setState({ svg: svgNode });
      this.props.onSVGReady(svgNode);
    }

  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
  }

  render() {
    const { path, onSVGReady, children, svgXML, ...props } = this.props;
    
    return (
      <React.Fragment>
        <SVGLoader
          path={this.props.path}
          onSVGReady={this.onSVGReady}
          svgXML={svgXML}
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
