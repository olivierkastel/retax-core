'use strict';

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _DomRetaxConfigStore = require('../DomRetaxConfigStore');

var _DomRetaxConfigStore2 = _interopRequireDefault(_DomRetaxConfigStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock('inversify');
jest.unmock('redux');
jest.unmock('retax-utils');
jest.unmock('redux-mock-store');
jest.unmock('../DomRetaxConfigStore');

describe('DomRetaxConfigStore', function () {
    var staticContext = {
        request: {
            req: {
                header: jest.fn()
            }
        },
        retaxConfig: {
            router: {
                static: { myRoute: true }
            }
        }
    };
    var dynamicContext = {
        request: {
            req: {
                header: jest.fn()
            }
        },
        retaxConfig: {
            router: {
                dynamic: jest.fn()
            }
        }
    };
    it('evaluates the config with a static router', function () {
        var reduxStore = (0, _reduxMockStore2.default)()();
        var configStore = new _DomRetaxConfigStore2.default(staticContext);
        configStore.config = staticContext.retaxConfig; // simulate the behavior of RetaxConfigStore
        var evaluatedConfig = configStore.evaluateConfig(reduxStore);
        expect(evaluatedConfig).toEqual({
            router: {
                dynamic: undefined,
                static: { myRoute: true }
            }
        });
    });
    it('evaluates the config with a dynamic router', function () {
        var curentUserAgent = navigator.userAgent;
        var reduxStore = (0, _reduxMockStore2.default)()();
        var configStore = new _DomRetaxConfigStore2.default(dynamicContext);
        configStore.config = dynamicContext.retaxConfig; // simulate the behavior of RetaxConfigStore
        var evaluatedConfig = configStore.evaluateConfig(reduxStore);
        expect(dynamicContext.retaxConfig.router.dynamic).toBeCalledWith(reduxStore, curentUserAgent);
        expect(evaluatedConfig).toEqual({
            router: {
                dynamic: dynamicContext.retaxConfig.router.dynamic,
                static: undefined
            }
        });
    });
});
//# sourceMappingURL=DomRetaxConfigStore-test.js.map
