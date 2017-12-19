'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSvg = require('./react-svg2');

var _reactSvg2 = _interopRequireDefault(_reactSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Just a wrapper around ReactSVG to disable re rendering it */
var SVGLoader = function (_React$Component) {
  _inherits(SVGLoader, _React$Component);

  function SVGLoader(props) {
    _classCallCheck(this, SVGLoader);

    return _possibleConstructorReturn(this, (SVGLoader.__proto__ || Object.getPrototypeOf(SVGLoader)).call(this, props));
  }

  _createClass(SVGLoader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          path = _props.path,
          onSVGReady = _props.onSVGReady,
          props = _objectWithoutProperties(_props, ['path', 'onSVGReady']);

      return _react2.default.createElement(_reactSvg2.default, _extends({
        path: this.props.path,
        callback: this.props.onSVGReady
      }, props));
    }
  }]);

  return SVGLoader;
}(_react2.default.Component);

SVGLoader.propTypes = {
  path: _propTypes2.default.string.isRequired,
  onSVGReady: _propTypes2.default.func
};

SVGLoader.defaultProps = {
  onSVGReady: function onSVGReady() {}
};

exports.default = SVGLoader;