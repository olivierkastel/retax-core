import { isSetAuthTokenAction, isRemoveAuthTokenAction } from '../actionsCreators';
export default function credentialsMiddleware(cookieProxy) {
    return function () {
        return function (next) {
            return function (action) {
                if (isSetAuthTokenAction(action)) {
                    var payload = action.payload;

                    cookieProxy.authToken = payload;
                } else if (isRemoveAuthTokenAction(action)) {
                    cookieProxy.deleteAuthToken();
                }
                return next(action);
            };
        };
    };
}
//# sourceMappingURL=credentialsMiddleware.js.map
