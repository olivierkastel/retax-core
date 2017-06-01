function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

jest.unmock('inversify');
jest.unmock('../../constants');
jest.unmock('../../constants/internalConfig');
jest.unmock('../RequestCookieProxy');
jest.unmock('../CookieProxy');
import { COOKIE_AUTH_TOKEN_KEY } from '../../constants';
import RequestCookieProxy from '../RequestCookieProxy';
describe('RequestCookieProxy', function () {
    var context = {
        request: {
            req: {
                cookies: _defineProperty({}, COOKIE_AUTH_TOKEN_KEY, '1234')
            },
            res: {
                cookie: jest.fn()
            }
        }
    };
    it('reads the current auth token', function () {
        var cookieProxy = new RequestCookieProxy(context);
        /* tslint:disable */
        var authToken = cookieProxy.authToken;
        /* tslint:enable */

        expect(context.request.req.cookies[COOKIE_AUTH_TOKEN_KEY]).toEqual('1234');
    });
    it('set the auth token', function () {
        var cookieProxy = new RequestCookieProxy(context);
        cookieProxy.authToken = '1234';
        expect(context.request.res.cookie).toBeCalledWith(COOKIE_AUTH_TOKEN_KEY, '1234');
    });
    it('removes the auth token', function () {
        var cookieProxy = new RequestCookieProxy(context);
        cookieProxy.deleteAuthToken();
        expect(context.request.res.cookie).toBeCalledWith(COOKIE_AUTH_TOKEN_KEY, undefined);
    });
});
//# sourceMappingURL=RequestCookieProxy.js.map
