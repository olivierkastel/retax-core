'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = credentialsMiddleware;

var _actionsCreators = require('../actionsCreators');

function credentialsMiddleware(cookieProxy) {
    return function () {
        return function (next) {
            return function (action) {
                if ((0, _actionsCreators.isSetAuthTokenAction)(action)) {
                    var payload = action.payload;

                    cookieProxy.authToken = payload;
                } else if ((0, _actionsCreators.isRemoveAuthTokenAction)(action)) {
                    cookieProxy.deleteAuthToken();
                }
                return next(action);
            };
        };
    };
}
module.exports = exports['default'];
//# sourceMappingURL=credentialsMiddleware.js.map
