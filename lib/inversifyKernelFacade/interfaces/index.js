'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InversifyKernelFacade = require('./InversifyKernelFacade');

Object.keys(_InversifyKernelFacade).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InversifyKernelFacade[key];
    }
  });
});
//# sourceMappingURL=index.js.map
