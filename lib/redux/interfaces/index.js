'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ReduxFacade = require('./ReduxFacade');

Object.keys(_ReduxFacade).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ReduxFacade[key];
    }
  });
});
//# sourceMappingURL=index.js.map
