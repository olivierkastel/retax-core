import { isSetAuthTokenAction, isRemoveAuthTokenAction } from '../actionsCreators';
export default function credentialsMiddleware(cookieProxy) {
    return () => next => (action) => {
        if (isSetAuthTokenAction(action)) {
            const { payload } = action;
            cookieProxy.authToken = payload;
        }
        else if (isRemoveAuthTokenAction(action)) {
            cookieProxy.deleteAuthToken();
        }
        return next(action);
    };
}
//# sourceMappingURL=credentialsMiddleware.js.map