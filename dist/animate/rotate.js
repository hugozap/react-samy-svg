(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../Proxy', 'react-motion'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../Proxy'), require('react-motion'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Proxy, global.reactMotion);
    global.rotate = mod.exports;
  }
})(this, function (exports, _react, _Proxy, _reactMotion) {
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

  exports.default = function (svg, selector, targetAngle, originX, originY) {
    return;
    _react2.default.createElement(
      _reactMotion.Motion,
      { defaultStyle: { a: 0 }, style: { a: (0, _reactMotion.spring)(targetAngle) } },
      function (val) {
        var transform = 'rotate(' + val.a + ', ' + originX + ', ' + originY + ')';
        return _react2.default.createElement(_Proxy.Proxy, { svg: svg, select: selector, transform: transform });
      }
    );
  };
});