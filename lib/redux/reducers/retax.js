'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reducerFactory;

var _immutable = require('immutable');

var _constants = require('../constants');

var _retaxUtils = require('retax-utils');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getInitialState() {
    return (0, _immutable.Map)({
        authToken: undefined
    });
}
var retaxReducer = (0, _retaxUtils.reducerFactory)(getInitialState(), (_reducerFactory = {}, _defineProperty(_reducerFactory, _constants.SET_AUTH_TOKEN, function (state, action) {
    return state.set('authToken', action.payload);
}), _defineProperty(_reducerFactory, _constants.REMOVE_AUTH_TOKEN, function (state, action) {
    return state.remove('authToken');
}), _reducerFactory));
exports.default = retaxReducer;
module.exports = exports['default'];
//# sourceMappingURL=retax.js.map
