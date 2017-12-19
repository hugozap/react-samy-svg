/* Modified from the react-svg code to remove external divs */
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

// See: https://github.com/webpack/react-starter/issues/37
const isBrowser = typeof window !== 'undefined';
const SVGInjector = isBrowser ? require('svg-injector') : undefined;

export default class ReactSVG extends React.Component {
  static defaultProps = {
    callback: () => {},
    className: null,
    evalScripts: 'once',
    style: {},
    wrapperClassName: null,
  };

  static propTypes = {
    callback: PropTypes.func,
    className: PropTypes.string,
    evalScripts: PropTypes.oneOf(['always', 'once', 'never']),
    path: PropTypes.string.isRequired,
    style: PropTypes.object,
    wrapperClassName: PropTypes.string,
  };

  refCallback = container => {
    if (!container) {
      return;
    }

    this.container = container;
    this.renderSVG();
  };

  renderSVG(props = this.props) {
    const {callback: each, evalScripts} = props;

    SVGInjector(this.container, {
      evalScripts,
      each,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.renderSVG(nextProps);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {style, className} = this.props
    return (
        <svg style={style} className={className} ref={this.refCallback} data-src={this.props.path} />
    );
  }
}