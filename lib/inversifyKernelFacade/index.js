'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InversifyKernelFacade = require('./InversifyKernelFacade');

Object.defineProperty(exports, 'InversifyKernelFacade', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_InversifyKernelFacade).default;
  }
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map
