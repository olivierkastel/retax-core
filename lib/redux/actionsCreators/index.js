'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _retax = require('./retax');

Object.keys(_retax).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _retax[key];
    }
  });
});

var _interfaces = require('./interfaces');

Object.keys(_interfaces).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interfaces[key];
    }
  });
});
//# sourceMappingURL=index.js.map
