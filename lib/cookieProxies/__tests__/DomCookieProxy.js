'use strict';

var _constants = require('../../constants');

var _DomCookieProxy = require('../DomCookieProxy');

var _DomCookieProxy2 = _interopRequireDefault(_DomCookieProxy);

var _jsCookie = require('js-cookie');

var Cookie = _interopRequireWildcard(_jsCookie);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock('inversify');
jest.unmock('../../constants');
jest.unmock('../../constants/internalConfig');
jest.unmock('../DomCookieProxy');
jest.unmock('../CookieProxy');

describe('DomCookieProxy', function () {
    it('reads the current auth token', function () {
        var cookieProxy = new _DomCookieProxy2.default();
        /* tslint:disable */
        var authToken = cookieProxy.authToken;
        /* tslint:enable */

        expect(Cookie.get).toBeCalledWith(_constants.COOKIE_AUTH_TOKEN_KEY);
    });
    it('set the auth token', function () {
        var cookieProxy = new _DomCookieProxy2.default();
        cookieProxy.authToken = '1234';
        expect(Cookie.set).toBeCalledWith(_constants.COOKIE_AUTH_TOKEN_KEY, '1234', { expires: 1 });
    });
    it('removes the auth token', function () {
        var cookieProxy = new _DomCookieProxy2.default();
        cookieProxy.deleteAuthToken();
        expect(Cookie.remove).toBeCalledWith(_constants.COOKIE_AUTH_TOKEN_KEY);
    });
});
//# sourceMappingURL=DomCookieProxy.js.map
