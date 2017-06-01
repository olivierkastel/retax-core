'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Service = require('./Service');

Object.keys(_Service).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Service[key];
    }
  });
});
//# sourceMappingURL=index.js.map
