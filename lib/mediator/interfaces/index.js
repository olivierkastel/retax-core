'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Mediator = require('./Mediator');

Object.keys(_Mediator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Mediator[key];
    }
  });
});

var _Initializable = require('./Initializable');

Object.keys(_Initializable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Initializable[key];
    }
  });
});
//# sourceMappingURL=index.js.map
