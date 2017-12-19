'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Modified from the react-svg code to remove external divs */


// See: https://github.com/webpack/react-starter/issues/37
var isBrowser = typeof window !== 'undefined';
var SVGInjector = isBrowser ? require('svg-injector') : undefined;

var ReactSVG = function (_React$Component) {
  _inherits(ReactSVG, _React$Component);

  function ReactSVG() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactSVG);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactSVG.__proto__ || Object.getPrototypeOf(ReactSVG)).call.apply(_ref, [this].concat(args))), _this), _this.refCallback = function (container) {
      if (!container) {
        return;
      }

      _this.container = container;
      _this.renderSVG();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactSVG, [{
    key: 'renderSVG',
    value: function renderSVG() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var each = props.callback,
          evalScripts = props.evalScripts;


      SVGInjector(this.container, {
        evalScripts: evalScripts,
        each: each
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.renderSVG(nextProps);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          className = _props.className;

      return _react2.default.createElement('svg', { style: style, className: className, ref: this.refCallback, 'data-src': this.props.path });
    }
  }]);

  return ReactSVG;
}(_react2.default.Component);

ReactSVG.defaultProps = {
  callback: function callback() {},
  className: null,
  evalScripts: 'once',
  style: {},
  wrapperClassName: null
};
ReactSVG.propTypes = {
  callback: _propTypes2.default.func,
  className: _propTypes2.default.string,
  evalScripts: _propTypes2.default.oneOf(['always', 'once', 'never']),
  path: _propTypes2.default.string.isRequired,
  style: _propTypes2.default.object,
  wrapperClassName: _propTypes2.default.string
};
exports.default = ReactSVG;