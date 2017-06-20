(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.Proxy = mod.exports;
  }
})(this, function (exports, _react) {
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

  var Proxy = function (_React$Component) {
    _inherits(Proxy, _React$Component);

    function Proxy(props, context) {
      _classCallCheck(this, Proxy);

      var _this = _possibleConstructorReturn(this, (Proxy.__proto__ || Object.getPrototypeOf(Proxy)).call(this, props));

      _this.state = {
        elemRefs: null
      };
      return _this;
    }

    _createClass(Proxy, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps, nextContext) {
        var _this2 = this;

        var elems = this.state.elemRefs || [];
        if (nextContext.svg && elems.length === 0) {
          //We don't have the svg element reference.

          var nodes = [].slice.call(nextContext.svg.querySelectorAll(this.props.select));
          if (nodes.length === 0 && ['svg', 'root'].indexOf(this.props.select) >= 0) {
            //If the selector equls 'svg' or 'root' use the svg node
            nodes.push(nextContext.svg);
          }
          // Call the onElementSelected callback with the element (or array)
          if (this.props.onElementSelected && nodes.length > 0) {
            this.props.onElementSelected(nodes.length === 1 ? nodes[0] : nodes);
          }

          elems = nodes;
          this.setState({ elemRefs: nodes });
        }

        if (elems) {
          var pnames = Object.keys(nextProps);

          var _loop = function _loop() {
            /* The proxy received properties, apply them to the svg element */
            var propName = pnames[i];
            elems.forEach(function (elem) {
              // TODO: replace this with a faster alternative
              if (typeof nextProps[propName] === 'function') {
                elem[propName] = nextProps[propName];
              } else {
                elem.setAttribute(propName, nextProps[propName]);
                if (typeof _this2.props.children === 'string' && _this2.props.children.trim().length > 0) {
                  elem.innerHTML = _this2.props.children;
                }
              }
            });
          };

          for (var i = 0; i < pnames.length; i++) {
            _loop();
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return null;
      }
    }]);

    return Proxy;
  }(_react2.default.Component);

  Proxy.propTypes = {
    select: _react2.default.PropTypes.string.isRequired,
    onElementSelected: _react2.default.PropTypes.func,
    children: _react2.default.PropTypes.string
  };
  Proxy.contextTypes = {
    svg: _react2.default.PropTypes.object
  };
  exports.default = Proxy;


  Proxy.defaultProps = {
    onElementSelected: function onElementSelected() {}
  };
});