'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Adapted from the react-svg module source code;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 - removes <divs>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Original LiCENSE text:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 The MIT License (MIT)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Copyright (c) 2014 Atomic
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 The above copyright notice and this permission notice shall be included in all
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


// See: https://github.com/webpack/react-starter/issues/37
var isBrowser = typeof window !== 'undefined';
var SVGInjector = isBrowser ? require('./svg-injector') : undefined;

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
      var _this2 = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      var svgNode = this.container;

      var callback = props.callback,
          evalScripts = props.evalScripts,
          path = props.path,
          svgXML = props.svgXML,
          htmlProps = _objectWithoutProperties(props, ['callback', 'evalScripts', 'path', 'svgXML']);

      //Update SVG element


      SVGInjector(svgNode, {
        evalScripts: evalScripts,
        each: function each() {
          //each is called when the svg was injected and is ready
          callback(_this2.container);
        },
        svgXML: svgXML
      }, function () {
        //SVGInjector will override the initial attributes set
        //by props. So we need to re apply them.
        if (svgNode && htmlProps) {
          Object.keys(htmlProps).reduce(function (svgNode, key) {
            svgNode.setAttribute(key, htmlProps[key]);
            return svgNode;
          }, svgNode);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          callback = _props.callback,
          evalScripts = _props.evalScripts,
          path = _props.path,
          svgXML = _props.svgXML,
          props = _objectWithoutProperties(_props, ['callback', 'evalScripts', 'path', 'svgXML']);

      return _react2.default.createElement('svg', _extends({ ref: this.refCallback, 'data-src': this.props.path }, props));
    }
  }]);

  return ReactSVG;
}(_react2.default.Component);

ReactSVG.defaultProps = {
  callback: function callback() {},
  className: null,
  evalScripts: 'once'
};
ReactSVG.propTypes = {
  callback: _propTypes2.default.func,
  evalScripts: _propTypes2.default.oneOf(['always', 'once', 'never']),
  path: _propTypes2.default.string,
  svgXML: _propTypes2.default.string
};
exports.default = ReactSVG;