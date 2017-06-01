'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RetaxProvider = require('./RetaxProvider');

Object.defineProperty(exports, 'RetaxProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RetaxProvider).default;
  }
});

var _RetaxConsumer = require('./RetaxConsumer');

Object.defineProperty(exports, 'RetaxConsumer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RetaxConsumer).default;
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
