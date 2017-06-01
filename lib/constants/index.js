'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _internalConfig = require('./internalConfig');

Object.keys(_internalConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _internalConfig[key];
    }
  });
});
//# sourceMappingURL=index.js.map
