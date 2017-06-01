'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _retaxConfig = require('./retaxConfig');

Object.keys(_retaxConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _retaxConfig[key];
    }
  });
});
//# sourceMappingURL=index.js.map
