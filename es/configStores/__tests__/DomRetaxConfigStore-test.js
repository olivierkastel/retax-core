jest.unmock('inversify');
jest.unmock('redux');
jest.unmock('retax-utils');
jest.unmock('redux-mock-store');
jest.unmock('../DomRetaxConfigStore');
import configureStore from 'redux-mock-store';
import DomRetaxConfigStore from '../DomRetaxConfigStore';
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
        var reduxStore = configureStore()();
        var configStore = new DomRetaxConfigStore(staticContext);
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
        var reduxStore = configureStore()();
        var configStore = new DomRetaxConfigStore(dynamicContext);
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
