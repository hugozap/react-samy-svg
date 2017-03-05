(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './Proxy', './animate/', './SVGLoader'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./Proxy'), require('./animate/'), require('./SVGLoader'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Proxy, global.animate, global.SVGLoader);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _Proxy, _animate, _SVGLoader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.motionUtils = exports.Samy = exports.Proxy = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _Proxy2 = _interopRequireDefault(_Proxy);

  var _animate2 = _interopRequireDefault(_animate);

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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

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
        this.setState({ svg: svgNode });
        this.props.ref(svgNode);
      }
    }, {
      key: 'render',
      value: function render() {
        var childrenCallbackResult = this.props.children(this.state.svg);
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_SVGLoader2.default, { className: this.props.className || '', style: this.props.style, path: this.props.path, onSVGReady: this.onSVGReady.bind(this) }),
          childrenCallbackResult
        );
      }
    }]);

    return Samy;
  }(_react2.default.Component);

  Samy.propTypes = {
    path: _react2.default.PropTypes.string.isRequired,
    ref: _react2.default.PropTypes.func
  };


  Samy.defaultProps = {
    ref: function ref() {
      console.log('samy ref default function');
    }
  };

  exports.Proxy = _Proxy2.default;
  exports.Samy = Samy;
  exports.motionUtils = _animate2.default;
});