import { SET_AUTH_TOKEN, REMOVE_AUTH_TOKEN } from '../constants';
import { actionsCreatorFactory } from 'retax-utils';
export function isSetAuthTokenAction(a) {
    return a.type === SET_AUTH_TOKEN;
}
export function isRemoveAuthTokenAction(a) {
    return a.type === REMOVE_AUTH_TOKEN;
}
export const setAuthToken = actionsCreatorFactory(SET_AUTH_TOKEN);
export const removeAuthToken = actionsCreatorFactory(REMOVE_AUTH_TOKEN);
//# sourceMappingURL=retax.js.map