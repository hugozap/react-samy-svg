import React from "react";
import PropTypes from "prop-types";
import ReactSVG from "./react-svg2";

class SVGLoader extends React.Component {
  static propTypes = {
    path: PropTypes.string,
    onSVGReady: PropTypes.func,
    svgXML: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { path, onSVGReady, svgXML, ...props } = this.props;
    return (
      <ReactSVG
        path={this.props.path}
        callback={this.props.onSVGReady}
        svgXML={svgXML}
        {...props}
      />
    );
  }
}
SVGLoader.defaultProps = {
  onSVGReady: () => {}
};

export default SVGLoader;
