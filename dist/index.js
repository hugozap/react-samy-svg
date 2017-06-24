(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Samy', './Proxy'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Samy'), require('./Proxy'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Samy, global.Proxy);
    global.index = mod.exports;
  }
})(this, function (exports, _Samy, _Proxy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Samy = exports.Proxy = undefined;

  var _Samy2 = _interopRequireDefault(_Samy);

  var _Proxy2 = _interopRequireDefault(_Proxy);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.Proxy = _Proxy2.default;
  exports.Samy = _Samy2.default;
});