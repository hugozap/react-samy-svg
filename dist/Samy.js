(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './SVGLoader'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./SVGLoader'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.SVGLoader);
    global.Samy = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _SVGLoader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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

      _this.onSVGReady = _this.onSVGReady.bind(_this);
      return _this;
    }

    _createClass(Samy, [{
      key: 'onSVGReady',
      value: function onSVGReady(svgNode) {
        var _this2 = this;

        //set svgAttributes
        if (svgNode && this.props.svgAttributes) {
          Object.keys(this.props.svgAttributes).reduce(function (svgNode, key) {
            svgNode.setAttribute(key, _this2.props.svgAttributes[key]);
            return svgNode;
          }, svgNode);
        }

        this.setState({ svg: svgNode });
        this.props.onSVGReady(svgNode);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        //Apply properties to svg element
        if (this.props.svgAttributes != nextProps.svgAttributes) {
          if (this.state.svg) {
            Object.keys(nextProps.svgAttributes).reduce(function (svgNode, key) {
              svgNode.setAttribute(key, nextProps.svgAttributes[key]);
              return svgNode;
            }, this.state.svg);
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_SVGLoader2.default, {
            className: this.props.className,
            style: this.props.style,
            path: this.props.path,
            onSVGReady: this.onSVGReady
          }),
          this.props.children
        );
      }
    }]);

    return Samy;
  }(_react2.default.Component);

  Samy.propTypes = {
    path: _propTypes2.default.string.isRequired,
    onSVGReady: _propTypes2.default.func,
    svgAttributes: _propTypes2.default.object
  };
  Samy.childContextTypes = {
    svg: _propTypes2.default.object
  };


  Samy.defaultProps = {
    onSVGReady: function onSVGReady() {}
  };

  exports.default = Samy;
});