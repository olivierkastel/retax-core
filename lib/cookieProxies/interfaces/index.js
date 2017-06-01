'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CookieProxy = require('./CookieProxy');

Object.keys(_CookieProxy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CookieProxy[key];
    }
  });
});
//# sourceMappingURL=index.js.map
