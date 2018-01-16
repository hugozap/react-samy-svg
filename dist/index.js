module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Samy = exports.SvgProxy = undefined;

var _Samy = __webpack_require__(3);

var _Samy2 = _interopRequireDefault(_Samy);

var _SvgProxy = __webpack_require__(8);

var _SvgProxy2 = _interopRequireDefault(_SvgProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SvgProxy = _SvgProxy2.default;
exports.Samy = _Samy2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SVGLoader = __webpack_require__(4);

var _SVGLoader2 = _interopRequireDefault(_SVGLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Samy = function (_React$Component) {
  _inherits(Samy, _React$Component);

  _createClass(Samy, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        svg: this.state.svg
      };
    }
  }]);

  function Samy(props) {
    _classCallCheck(this, Samy);

    var _this = _possibleConstructorReturn(this, (Samy.__proto__ || Object.getPrototypeOf(Samy)).call(this, props));

    _this.mounted = false;
    _this.state = {
      svg: null
    };

    _this.onSVGReady = _this.onSVGReady.bind(_this);
    return _this;
  }

  _createClass(Samy, [{
    key: 'onSVGReady',
    value: function onSVGReady(svgNode) {
      if (this.mounted) {
        this.setState({ svg: svgNode });
        this.props.onSVGReady(svgNode);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          path = _props.path,
          onSVGReady = _props.onSVGReady,
          children = _props.children,
          svgXML = _props.svgXML,
          props = _objectWithoutProperties(_props, ['path', 'onSVGReady', 'children', 'svgXML']);

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_SVGLoader2.default, _extends({
          path: this.props.path,
          onSVGReady: this.onSVGReady,
          svgXML: svgXML
        }, props)),
        this.props.children
      );
    }
  }]);

  return Samy;
}(_react2.default.Component);

Samy.propTypes = {
  path: _propTypes2.default.string,
  //if we have the svg text we can use that instead of loading it with ajax
  svgXML: _propTypes2.default.string,
  onSVGReady: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]),
  style: _propTypes2.default.object
};
Samy.childContextTypes = {
  svg: _propTypes2.default.object
};


Samy.defaultProps = {
  onSVGReady: function onSVGReady() {}
};

exports.default = Samy;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSvg = __webpack_require__(5);

var _reactSvg2 = _interopRequireDefault(_reactSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          svgXML = _props.svgXML,
          props = _objectWithoutProperties(_props, ['path', 'onSVGReady', 'svgXML']);

      return _react2.default.createElement(_reactSvg2.default, _extends({
        path: this.props.path,
        callback: this.props.onSVGReady,
        svgXML: svgXML
      }, props));
    }
  }]);

  return SVGLoader;
}(_react2.default.Component);

SVGLoader.propTypes = {
  path: _propTypes2.default.string,
  onSVGReady: _propTypes2.default.func,
  svgXML: _propTypes2.default.string
};

SVGLoader.defaultProps = {
  onSVGReady: function onSVGReady() {}
};

exports.default = SVGLoader;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

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
var SVGInjector = isBrowser ? __webpack_require__(6) : undefined;

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
          path = props.path,
          svgXML = props.svgXML,
          htmlProps = _objectWithoutProperties(props, ['callback', 'path', 'svgXML']);

      //Update SVG element


      SVGInjector(svgNode, {
        each: function each(err) {
          if (err) {
            console.log('Error:', err);
          }
          //each is called when the svg was injected and is ready
          callback(_this2.container);
        },
        svgXML: svgXML
      }, function () {
        //SVGInjector will override the SVG attributes set by react props
        //Re apply them (except the special `style` prop)
        //by props. So we need to re apply them.
        if (svgNode && htmlProps) {
          Object.keys(htmlProps).reduce(function (svgNode, key) {
            if (key != 'style') {
              svgNode.setAttribute(key, htmlProps[key]);
            }
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
          path = _props.path,
          svgXML = _props.svgXML,
          props = _objectWithoutProperties(_props, ['callback', 'path', 'svgXML']);

      return _react2.default.createElement('svg', _extends({ ref: this.refCallback, 'data-src': this.props.path }, props));
    }
  }]);

  return ReactSVG;
}(_react2.default.Component);

ReactSVG.defaultProps = {
  callback: function callback() {}
};
ReactSVG.propTypes = {
  callback: _propTypes2.default.func,
  path: _propTypes2.default.string,
  svgXML: _propTypes2.default.string
};
exports.default = ReactSVG;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Changes: 
 * - Don't replace the node.  Justs its innerHTML
 * Adapted from:
 * Original Copyright notice ---------------------------
 * SVGInjector v1.1.3 - Fast, caching, dynamic inline SVG DOM injection library
 * https://github.com/iconic/SVGInjector
 *
 * Copyright (c) 2014-2015 Waybury <hello@waybury.com>
 * @license MIT
 * 
 */

(function (window, document) {

  'use strict';

  // Environment

  var isLocal = window.location.protocol === 'file:';
  var hasSvgSupport = document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');

  function uniqueClasses(list) {
    list = list.split(' ');

    var hash = {};
    var i = list.length;
    var out = [];

    while (i--) {
      if (!hash.hasOwnProperty(list[i])) {
        hash[list[i]] = 1;
        out.unshift(list[i]);
      }
    }

    return out.join(' ');
  }

  /**
   * cache (or polyfill for <= IE8) Array.forEach()
   * source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   */
  var forEach = Array.prototype.forEach || function (fn, scope) {
    if (this === void 0 || this === null || typeof fn !== 'function') {
      throw new TypeError();
    }

    /* jshint bitwise: false */
    var i,
        len = this.length >>> 0;
    /* jshint bitwise: true */

    for (i = 0; i < len; ++i) {
      if (i in this) {
        fn.call(scope, this[i], i, this);
      }
    }
  };

  // SVG Cache
  var svgCache = {};

  var injectCount = 0;
  var injectedElements = [];

  // Request Queue
  var requestQueue = [];

  // Script running status
  var ranScripts = {};

  var cloneSvg = function cloneSvg(sourceSvg) {
    return sourceSvg.cloneNode(true);
  };

  var queueRequest = function queueRequest(url, callback) {
    requestQueue[url] = requestQueue[url] || [];
    requestQueue[url].push(callback);
  };

  var processRequestQueue = function processRequestQueue(url) {
    for (var i = 0, len = requestQueue[url].length; i < len; i++) {
      // Make these calls async so we avoid blocking the page/renderer
      /* jshint loopfunc: true */
      (function (index) {
        setTimeout(function () {
          requestQueue[url][index](cloneSvg(svgCache[url]));
        }, 0);
      })(i);
      /* jshint loopfunc: false */
    }
  };

  var loadSvg = function loadSvg(url, callback) {
    if (svgCache[url] !== undefined) {
      if (svgCache[url] instanceof SVGSVGElement) {
        // We already have it in cache, so use it
        callback(cloneSvg(svgCache[url]));
      } else {
        // We don't have it in cache yet, but we are loading it, so queue this request
        queueRequest(url, callback);
      }
    } else {

      if (!window.XMLHttpRequest) {
        callback('Browser does not support XMLHttpRequest');
        return false;
      }

      // Seed the cache to indicate we are loading this URL already
      svgCache[url] = {};
      queueRequest(url, callback);

      var httpRequest = new XMLHttpRequest();

      httpRequest.onreadystatechange = function () {
        // readyState 4 = complete
        if (httpRequest.readyState === 4) {

          // Handle status
          if (httpRequest.status === 404 || httpRequest.responseXML === null) {
            callback('Unable to load SVG file: ' + url);

            if (isLocal) callback('Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver.');

            callback();
            return false;
          }

          // 200 success from server, or 0 when using file:// protocol locally
          if (httpRequest.status === 200 || isLocal && httpRequest.status === 0) {

            /* globals Document */
            if (httpRequest.responseXML instanceof Document) {
              // Cache it
              svgCache[url] = httpRequest.responseXML.documentElement;
            }
            /* globals -Document */

            // IE9 doesn't create a responseXML Document object from loaded SVG,
            // and throws a "DOM Exception: HIERARCHY_REQUEST_ERR (3)" error when injected.
            //
            // So, we'll just create our own manually via the DOMParser using
            // the the raw XML responseText.
            //
            // :NOTE: IE8 and older doesn't have DOMParser, but they can't do SVG either, so...
            else if (DOMParser && DOMParser instanceof Function) {
                var xmlDoc;
                try {
                  var parser = new DOMParser();
                  xmlDoc = parser.parseFromString(httpRequest.responseText, 'text/xml');
                } catch (e) {
                  xmlDoc = undefined;
                }

                if (!xmlDoc || xmlDoc.getElementsByTagName('parsererror').length) {
                  callback('Unable to parse SVG file: ' + url);
                  return false;
                } else {
                  // Cache it
                  svgCache[url] = xmlDoc.documentElement;
                }
              }

            // We've loaded a new asset, so process any requests waiting for it
            processRequestQueue(url);
          } else {
            callback('There was a problem injecting the SVG: ' + httpRequest.status + ' ' + httpRequest.statusText);
            return false;
          }
        }
      };

      httpRequest.open('GET', url);

      // Treat and parse the response as XML, even if the
      // server sends us a different mimetype
      if (httpRequest.overrideMimeType) httpRequest.overrideMimeType('text/xml');

      httpRequest.send();
    }
  };

  /**
   * Process the loaded svg node and copies its contents
   * to the `el` element (also an SVG node)
   * @param {Node} el Existing (empty) SVG element
   * @param {Node} svg Loaded SVG element
   */
  var processSvg = function processSvg(el, svg) {

    if (typeof svg === 'undefined' || typeof svg === 'string') {
      return false;
    }

    var imgId = el.getAttribute('id');
    if (imgId) {
      svg.setAttribute('id', imgId);
    }

    var imgTitle = el.getAttribute('title');
    if (imgTitle) {
      svg.setAttribute('title', imgTitle);
    }

    // Concat the SVG classes + 'injected-svg' + the img classes
    var classMerge = [].concat(svg.getAttribute('class') || [], 'injected-svg', el.getAttribute('class') || []).join(' ');
    svg.setAttribute('class', uniqueClasses(classMerge));

    var imgStyle = el.getAttribute('style');
    if (imgStyle) {
      svg.setAttribute('style', imgStyle);
    }

    // Copy all the data elements to the svg
    var imgData = [].filter.call(el.attributes, function (at) {
      return (/^data-\w[\w\-]*$/.test(at.name)
      );
    });
    forEach.call(imgData, function (dataAttr) {
      if (dataAttr.name && dataAttr.value) {
        svg.setAttribute(dataAttr.name, dataAttr.value);
      }
    });

    // Make sure any internally referenced clipPath ids and their
    // clip-path references are unique.
    //
    // This addresses the issue of having multiple instances of the
    // same SVG on a page and only the first clipPath id is referenced.
    //
    // Browsers often shortcut the SVG Spec and don't use clipPaths
    // contained in parent elements that are hidden, so if you hide the first
    // SVG instance on the page, then all other instances lose their clipping.
    // Reference: https://bugzilla.mozilla.org/show_bug.cgi?id=376027

    // Handle all defs elements that have iri capable attributes as defined by w3c: http://www.w3.org/TR/SVG/linking.html#processingIRI
    // Mapping IRI addressable elements to the properties that can reference them:
    var iriElementsAndProperties = {
      'clipPath': ['clip-path'],
      'color-profile': ['color-profile'],
      'cursor': ['cursor'],
      'filter': ['filter'],
      'linearGradient': ['fill', 'stroke'],
      'marker': ['marker', 'marker-start', 'marker-mid', 'marker-end'],
      'mask': ['mask'],
      'pattern': ['fill', 'stroke'],
      'radialGradient': ['fill', 'stroke']
    };

    var element, elementDefs, properties, currentId, newId;
    Object.keys(iriElementsAndProperties).forEach(function (key) {
      element = key;
      properties = iriElementsAndProperties[key];

      elementDefs = svg.querySelectorAll('defs ' + element + '[id]');
      for (var i = 0, elementsLen = elementDefs.length; i < elementsLen; i++) {
        currentId = elementDefs[i].id;
        newId = currentId + '-' + injectCount;

        // All of the properties that can reference this element type
        var referencingElements;
        forEach.call(properties, function (property) {
          // :NOTE: using a substring match attr selector here to deal with IE "adding extra quotes in url() attrs"
          referencingElements = svg.querySelectorAll('[' + property + '*="' + currentId + '"]');
          for (var j = 0, referencingElementLen = referencingElements.length; j < referencingElementLen; j++) {
            referencingElements[j].setAttribute(property, 'url(#' + newId + ')');
          }
        });

        elementDefs[i].id = newId;
      }
    });

    // Remove any unwanted/invalid namespaces that might have been added by SVG editing tools
    svg.removeAttribute('xmlns:a');

    // :WORKAROUND:
    // IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
    // This trick will trigger IE to read and use any existing SVG <style> tags.
    //
    // Reference: https://github.com/iconic/SVGInjector/issues/23
    var styleTags = svg.querySelectorAll('style');
    forEach.call(styleTags, function (styleTag) {
      styleTag.textContent += '';
    });

    //--- Update for react-samy-svg ----//
    // Before:el.parentNode.replaceChild(svg, el);
    // To keep the element reference and avoid problems with react
    // We replace innerHTML only
    el.innerHTML = svg.innerHTML;
    //copy original svg attributes to node
    if (svg.hasAttributes()) {
      var attrs = svg.attributes;
      var output = "";
      for (var i = attrs.length - 1; i >= 0; i--) {
        output += attrs[i].name + "->" + attrs[i].value;
        el.setAttribute(attrs[i].name, attrs[i].value);
      }
    }

    // Now that we no longer need it, drop references
    // to the original element so it can be GC'd
    delete injectedElements[injectedElements.indexOf(el)];
    el = null;

    // Increment the injected count
    injectCount++;
  };

  // Inject a single element
  //@svgXML: if not null then we don't fetch the file because we alredy
  //have its contents
  var injectElement = function injectElement(el, pngFallback, svgXML, callback) {

    if (svgXML) {
      //If the svgXML is passed then we don't need to fetch the svg
      var xmlDoc;
      try {
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(svgXML, 'text/xml');
      } catch (e) {
        xmlDoc = undefined;
      }

      if (!xmlDoc || xmlDoc.getElementsByTagName('parsererror').length) {
        callback('Unable to parse SVG file: ' + xmlDoc.getElementsByTagName('parsererror')[0].innerHTML);
        return false;
      } else {
        // Cache it
        //svgCache[url] = xmlDoc.documentElement;
        processSvg(el, xmlDoc.documentElement);
        callback();
      }
    } else {
      // Grab the src or data-src attribute
      var imgUrl = el.getAttribute('data-src') || el.getAttribute('src');

      // We can only inject SVG
      if (!/\.svg/i.test(imgUrl)) {
        callback('Attempted to inject a file with a non-svg extension: ' + imgUrl);
        return;
      }

      //avoid loading the asset
      el.setAttribute('src', '');
      // Make sure we aren't already in the process of injecting this element to
      // avoid a race condition if multiple injections for the same element are run.
      // :NOTE: Using indexOf() only _after_ we check for SVG support and bail,
      // so no need for IE8 indexOf() polyfill
      if (injectedElements.indexOf(el) !== -1) {
        return;
      }

      // Remember the request to inject this element, in case other injection
      // calls are also trying to replace this element before we finish
      injectedElements.push(el);

      // Load it up
      loadSvg(imgUrl, function (svg) {
        processSvg(el, svg);
        callback();
      });
    }
  };

  /**
   * SVGInjector
   *
   * Replace the given elements with their full inline SVG DOM elements.
   *
   * :NOTE: We are using get/setAttribute with SVG because the SVG DOM spec differs from HTML DOM and
   * can return other unexpected object types when trying to directly access svg properties.
   * ex: "className" returns a SVGAnimatedString with the class value found in the "baseVal" property,
   * instead of simple string like with HTML Elements.
   *
   * @param {mixes} Array of or single DOM element
   * @param {object} options
   * @param {function} callback
   * @return {object} Instance of SVGInjector
   */
  var SVGInjector = function SVGInjector(elements, options, done) {

    // Options & defaults
    options = options || {};

    // Location of fallback pngs, if desired
    var pngFallback = options.pngFallback || false;

    // Callback to run during each SVG injection, returning the SVG injected
    var eachCallback = options.each;

    var svgXML = options.svgXML;

    // Do the injection...
    if (elements.length !== undefined) {
      var elementsLoaded = 0;
      forEach.call(elements, function (element) {
        injectElement(element, pngFallback, svgXML, function () {
          if (eachCallback && typeof eachCallback === 'function') eachCallback();
          if (done && elements.length === ++elementsLoaded) done(elementsLoaded);
        });
      });
    } else {
      if (elements) {
        injectElement(elements, pngFallback, svgXML, function () {
          if (eachCallback && typeof eachCallback === 'function') eachCallback();
          if (done) done(1);
          elements = null;
        });
      } else {
        if (done) done(0);
      }
    }
  };

  /* global module, exports: true, define */
  // Node.js or CommonJS
  if (( false ? 'undefined' : _typeof(module)) === 'object' && _typeof(module.exports) === 'object') {
    module.exports = exports = SVGInjector;
  }
  // AMD support
  else if (true) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return SVGInjector;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // Otherwise, attach to window as global
    else if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
        window.SVGInjector = SVGInjector;
      }
  /* global -module, -exports, -define */
})(window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * SvgProxy works as a virtual svg node.
 * @selector: The css selector of the element
 * @onElementSelected: callback in case the svg node is needed
 * @children : string supported (for text elements
 */
var SvgProxy = function (_React$Component) {
  _inherits(SvgProxy, _React$Component);

  function SvgProxy(props, context) {
    _classCallCheck(this, SvgProxy);

    var _this = _possibleConstructorReturn(this, (SvgProxy.__proto__ || Object.getPrototypeOf(SvgProxy)).call(this, props));

    _this.state = {
      elemRefs: []
    };
    return _this;
  }

  _createClass(SvgProxy, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextContext) {
      var _this2 = this;

      var elemRefs = this.state.elemRefs;


      if (nextContext.svg && elemRefs.length === 0) {
        //We don't have the svg element reference.

        var nodes = Array.from(nextContext.svg.querySelectorAll(this.props.selector));
        if (nodes.length === 0 && ['svg', 'root'].includes(this.props.selector)) {
          //If the selector equls 'svg' or 'root' use the svg node
          nodes.push(nextContext.svg);
        }
        // Call the onElementSelected callback with the element (or array)
        if (this.props.onElementSelected && nodes.length) {
          this.props.onElementSelected(nodes.length === 1 ? nodes[0] : nodes);
        }

        elemRefs = nodes;
        this.setState({ elemRefs: nodes });
      }

      if (elemRefs) {
        var _loop = function _loop(propName) {
          //Ignore component props
          if (['selector', 'onElementSelected'].includes(propName)) {
            return 'continue';
          }
          //Apply attributes to node
          elemRefs.forEach(function (elem) {
            // TODO: replace this with a faster alternative
            if (typeof nextProps[propName] === 'function') {
              elem[propName.toLowerCase()] = nextProps[propName];
            } else {
              //https://developer.mozilla.org/en/docs/Web/SVG/Namespaces_Crash_Course
              elem.setAttributeNS(null, propName, nextProps[propName]);
              //Set inner text
              if (typeof _this2.props.children === 'string' && _this2.props.children.trim().length) {
                debugger;
                elem.node.textContent = _this2.props.children;
              }
            }
          });
        };

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Object.keys(nextProps)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var propName = _step.value;

            var _ret = _loop(propName);

            if (_ret === 'continue') continue;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return SvgProxy;
}(_react2.default.Component);

SvgProxy.propTypes = {
  selector: _propTypes2.default.string.isRequired,
  onElementSelected: _propTypes2.default.func
};
SvgProxy.contextTypes = {
  svg: _propTypes2.default.object
};
exports.default = SvgProxy;


SvgProxy.defaultProps = {
  onElementSelected: function onElementSelected() {}
};

/***/ })
/******/ ]);