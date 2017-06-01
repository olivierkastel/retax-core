'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LifecycleService = require('./LifecycleService');

Object.keys(_LifecycleService).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _LifecycleService[key];
    }
  });
});
//# sourceMappingURL=index.js.map
