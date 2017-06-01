var _reducerFactory;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Map } from 'immutable';
import { SET_AUTH_TOKEN, REMOVE_AUTH_TOKEN } from '../constants';
import { reducerFactory } from 'retax-utils';
function getInitialState() {
    return Map({
        authToken: undefined
    });
}
var retaxReducer = reducerFactory(getInitialState(), (_reducerFactory = {}, _defineProperty(_reducerFactory, SET_AUTH_TOKEN, function (state, action) {
    return state.set('authToken', action.payload);
}), _defineProperty(_reducerFactory, REMOVE_AUTH_TOKEN, function (state, action) {
    return state.remove('authToken');
}), _reducerFactory));
export default retaxReducer;
//# sourceMappingURL=retax.js.map
