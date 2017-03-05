(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './rotate'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./rotate'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.rotate);
    global.index = mod.exports;
  }
})(this, function (exports, _rotate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _rotate2 = _interopRequireDefault(_rotate);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = { rotate: _rotate2.default };
});