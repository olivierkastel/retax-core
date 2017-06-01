'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Api = require('./Api');

Object.keys(_Api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Api[key];
    }
  });
});
//# sourceMappingURL=index.js.map
