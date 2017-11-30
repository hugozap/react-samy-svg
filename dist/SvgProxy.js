'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

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
          elemRefs.forEach(function (elem) {
            // TODO: replace this with a faster alternative
            if (typeof nextProps[propName] === 'function') {
              elem[propName.toLowerCase()] = nextProps[propName];
            } else {
              //https://developer.mozilla.org/en/docs/Web/SVG/Namespaces_Crash_Course
              elem.setAttributeNS(null, propName, nextProps[propName]);
              if (typeof _this2.props.children === 'string' && _this2.props.children.trim().length) {
                elem.innerHTML = _this2.props.children;
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
  onElementSelected: _propTypes2.default.func,
  children: _propTypes2.default.string
};
SvgProxy.contextTypes = {
  svg: _propTypes2.default.object
};
exports.default = SvgProxy;


SvgProxy.defaultProps = {
  onElementSelected: function onElementSelected() {}
};