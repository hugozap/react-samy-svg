(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-svg'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-svg'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactSvg);
    global.SVGLoader = mod.exports;
  }
})(this, function (exports, _react, _reactSvg) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactSvg2 = _interopRequireDefault(_reactSvg);

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

  var SVGLoader = function (_React$Component) {
    _inherits(SVGLoader, _React$Component);

    function SVGLoader(props) {
      _classCallCheck(this, SVGLoader);

      return _possibleConstructorReturn(this, (SVGLoader.__proto__ || Object.getPrototypeOf(SVGLoader)).call(this, props));
    }

    _createClass(SVGLoader, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        if (nextProps.path !== this.props.path) {
          return true;
        }

        return false;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_reactSvg2.default, { className: this.props.className || '', style: this.props.style || {}, path: this.props.path, callback: this.props.onSVGReady });
      }
    }]);

    return SVGLoader;
  }(_react2.default.Component);

  SVGLoader.propTypes = {
    path: _react2.default.PropTypes.string.isRequired,
    onSVGReady: _react2.default.PropTypes.func
  };

  SVGLoader.defaultProps = {
    onSVGReady: function onSVGReady() {
      console.log('hey');
    }
  };

  exports.default = SVGLoader;
});