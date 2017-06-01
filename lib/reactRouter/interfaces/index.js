'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ReactRouterFacade = require('./ReactRouterFacade');

Object.keys(_ReactRouterFacade).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ReactRouterFacade[key];
    }
  });
});
//# sourceMappingURL=index.js.map
