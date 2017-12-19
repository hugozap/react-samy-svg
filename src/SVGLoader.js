import React from 'react';
import PropTypes from 'prop-types';
import ReactSVG from './react-svg2';

/* Just a wrapper around ReactSVG to disable re rendering it */
class SVGLoader extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    onSVGReady: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.path !== this.props.path;
  }
  render() {
    return (
      <ReactSVG
        className={this.props.className}
        style={this.props.style}
        path={this.props.path}
        callback={this.props.onSVGReady}
      />
    );
  }
}
SVGLoader.defaultProps = {
  onSVGReady: () => {}
};

export default SVGLoader;
