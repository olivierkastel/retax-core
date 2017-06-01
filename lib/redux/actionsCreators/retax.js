'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeAuthToken = exports.setAuthToken = undefined;
exports.isSetAuthTokenAction = isSetAuthTokenAction;
exports.isRemoveAuthTokenAction = isRemoveAuthTokenAction;

var _constants = require('../constants');

var _retaxUtils = require('retax-utils');

function isSetAuthTokenAction(a) {
    return a.type === _constants.SET_AUTH_TOKEN;
}
function isRemoveAuthTokenAction(a) {
    return a.type === _constants.REMOVE_AUTH_TOKEN;
}
var setAuthToken = exports.setAuthToken = (0, _retaxUtils.actionsCreatorFactory)(_constants.SET_AUTH_TOKEN);
var removeAuthToken = exports.removeAuthToken = (0, _retaxUtils.actionsCreatorFactory)(_constants.REMOVE_AUTH_TOKEN);
//# sourceMappingURL=retax.js.map
