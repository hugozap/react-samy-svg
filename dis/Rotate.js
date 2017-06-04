(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-motion'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-motion'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactMotion);
    global.Rotate = mod.exports;
  }
})(this, function (exports, _react, _reactMotion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

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

  var Rotate = function (_React$Component) {
    _inherits(Rotate, _React$Component);

    function Rotate(props) {
      _classCallCheck(this, Rotate);

      var _this = _possibleConstructorReturn(this, (Rotate.__proto__ || Object.getPrototypeOf(Rotate)).call(this, props));

      console.log('Constructor');
      return _this;
    }

    _createClass(Rotate, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          _reactMotion.Motion,
          { defaultStyle: { angle: 0 }, style: { angle: (0, _reactMotion.spring)(this.props.endAngle) } },
          function (val) {
            var transform = 'rotate(' + val.angle + ', ' + _this2.props.originX + ', ' + _this2.props.originY + ')';
            return _react2.default.createElement(Proxy, { id: 'ddd', svg: _this2.props.svg, transform: transform });
          }
        );
      }
    }]);

    return Rotate;
  }(_react2.default.Component);

  Rotate.propTypes = {
    angle: _react2.default.PropTypes.number.isRequired,
    originX: _react2.default.PropTypes.number.isRequired,
    originY: _react2.default.PropTypes.number.isRequired,
    svg: _react2.default.PropTypes.object.isRequired
  };
  exports.default = Rotate;
});