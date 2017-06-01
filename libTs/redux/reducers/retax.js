import { Map } from 'immutable';
import { SET_AUTH_TOKEN, REMOVE_AUTH_TOKEN } from '../constants';
import { reducerFactory } from 'retax-utils';
function getInitialState() {
    return Map({
        authToken: undefined,
    });
}
const retaxReducer = reducerFactory(getInitialState(), {
    [SET_AUTH_TOKEN](state, action) {
        return state.set('authToken', action.payload);
    },
    [REMOVE_AUTH_TOKEN](state, action) {
        return state.remove('authToken');
    },
});
export default retaxReducer;
//# sourceMappingURL=retax.js.map