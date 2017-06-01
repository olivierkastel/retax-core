'use strict';

var _constants = require('../../constants');

var _RequestCookieProxy = require('../RequestCookieProxy');

var _RequestCookieProxy2 = _interopRequireDefault(_RequestCookieProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

jest.unmock('inversify');
jest.unmock('../../constants');
jest.unmock('../../constants/internalConfig');
jest.unmock('../RequestCookieProxy');
jest.unmock('../CookieProxy');

describe('RequestCookieProxy', function () {
    var context = {
        request: {
            req: {
                cookies: _defineProperty({}, _constants.COOKIE_AUTH_TOKEN_KEY, '1234')
            },
            res: {
                cookie: jest.fn()
            }
        }
    };
    it('reads the current auth token', function () {
        var cookieProxy = new _RequestCookieProxy2.default(context);
        /* tslint:disable */
        var authToken = cookieProxy.authToken;
        /* tslint:enable */

        expect(context.request.req.cookies[_constants.COOKIE_AUTH_TOKEN_KEY]).toEqual('1234');
    });
    it('set the auth token', function () {
        var cookieProxy = new _RequestCookieProxy2.default(context);
        cookieProxy.authToken = '1234';
        expect(context.request.res.cookie).toBeCalledWith(_constants.COOKIE_AUTH_TOKEN_KEY, '1234');
    });
    it('removes the auth token', function () {
        var cookieProxy = new _RequestCookieProxy2.default(context);
        cookieProxy.deleteAuthToken();
        expect(context.request.res.cookie).toBeCalledWith(_constants.COOKIE_AUTH_TOKEN_KEY, undefined);
    });
});
//# sourceMappingURL=RequestCookieProxy.js.map
