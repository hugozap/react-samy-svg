'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SVGLoader = require('./SVGLoader');

var _SVGLoader2 = _interopRequireDefault(_SVGLoader);

var _isEqual = require('lodash/fp/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

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

    _this.state = {
      svg: null
    };

    _this.onSVGReady = _this.onSVGReady.bind(_this);
    return _this;
  }

  _createClass(Samy, [{
    key: 'onSVGReady',
    value: function onSVGReady(svgNode) {
      var _props = this.props,
          path = _props.path,
          onSVGReady = _props.onSVGReady,
          style = _props.style,
          props = _objectWithoutProperties(_props, ['path', 'onSVGReady', 'style']);

      if (svgNode && props) {
        Object.keys(props).reduce(function (svgNode, key) {
          svgNode.setAttribute(key, props[key]);
          return svgNode;
        }, svgNode);
      }

      this.setState({ svg: svgNode });
      this.props.onSVGReady(svgNode);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var nextPath = _ref.path,
          nextOnSVGReady = _ref.onSVGReady,
          nextChildren = _ref.children,
          nextStyle = _ref.style,
          nextProps = _objectWithoutProperties(_ref, ['path', 'onSVGReady', 'children', 'style']);

      var _props2 = this.props,
          path = _props2.path,
          onSVGReady = _props2.onSVGReady,
          style = _props2.style,
          children = _props2.children,
          props = _objectWithoutProperties(_props2, ['path', 'onSVGReady', 'style', 'children']);
      //Apply properties to svg element


      if (!(0, _isEqual2.default)(props, nextProps)) {
        if (this.state.svg) {
          Object.entries(nextProps).reduce(function (svgNode, _ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                key = _ref3[0],
                value = _ref3[1];

            svgNode.setAttribute(key, value);
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
  children: _propTypes2.default.element,
  style: _propTypes2.default.object
};
Samy.childContextTypes = {
  svg: _propTypes2.default.object
};


Samy.defaultProps = {
  onSVGReady: function onSVGReady() {}
};

exports.default = Samy;