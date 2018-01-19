import React from "react";
import PropTypes from "prop-types";
import SVGLoader from "./SVGLoader";

class Samy extends React.Component {
  static propTypes = {
    path: PropTypes.string,
    //if we have the svg text we can use that instead of loading it with ajax
    svgXML: PropTypes.string,
    onSVGReady: PropTypes.func,
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
      throw new Error(
        "This version of React doesn't support Fragments, please update it"
      );
    }
  }
  onSVGReady(svgNode) {

    //Run after component has mounted
    setTimeout(() => {
      if (this.mounted) {
         this.setState({ ...this.state, svg: svgNode });
        this.props.onSVGReady(svgNode);
      }
    }, 0);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
  }

  render() {
    const { path, onSVGReady, children, svgXML, ...props } = this.props;
    const renderProxies = this.state.svg != null;
    const proxies = renderProxies ? this.props.children : null;
    return (
      <React.Fragment>
        <SVGLoader
          path={this.props.path}
          onSVGReady={this.onSVGReady}
          svgXML={svgXML}
          {...props}
        />
        {proxies}
      </React.Fragment>
    );
  }
}

Samy.defaultProps = {
  onSVGReady: () => {}
};

export default Samy;
