(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './SVGLoader'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./SVGLoader'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.SVGLoader);
    global.Samy = mod.exports;
  }
})(this, function (exports, _react, _SVGLoader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _SVGLoader2 = _interopRequireDefault(_SVGLoader);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

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

      _this.state = {
        svg: null
      };
      return _this;
    }

    _createClass(Samy, [{
      key: 'onSVGReady',
      value: function onSVGReady(svgNode) {
        var _this2 = this;

        //set svgAttributes
        if (svgNode && this.props.svgAttributes) {
          var keys = Object.keys(this.props.svgAttributes);
          keys.forEach(function (k) {
            svgNode.setAttribute(k, _this2.props.svgAttributes[k]);
          });
        }

        this.setState({ svg: svgNode });
        this.props.onSVGReady(svgNode);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this3 = this;

        //Apply properties to svg element
        if (this.props.svgAttributes != nextProps.svgAttributes) {
          if (this.state.svg) {
            var keys = Object.keys(nextProps.svgAttributes);
            keys.forEach(function (k) {
              _this3.state.svg.setAttribute(k, nextProps.svgAttributes[k]);
            });
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          ' ',
          _react2.default.createElement(_SVGLoader2.default, { className: this.props.className || '', style: this.props.style, path: this.props.path, onSVGReady: this.onSVGReady.bind(this) }),
          this.props.children,
          ' '
        );
      }
    }]);

    return Samy;
  }(_react2.default.Component);

  Samy.propTypes = {
    path: _react2.default.PropTypes.string.isRequired,
    onSVGReady: _react2.default.PropTypes.func,
    svgAttributes: _react2.default.PropTypes.object
  };
  Samy.childContextTypes = {
    svg: _react2.default.PropTypes.object
  };


  Samy.defaultProps = {
    onSVGReady: new Function()
  };

  exports.default = Samy;
});