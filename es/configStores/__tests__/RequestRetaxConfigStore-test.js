jest.unmock('inversify');
jest.unmock('redux');
jest.unmock('retax-utils');
jest.unmock('redux-mock-store');
jest.unmock('../RequestRetaxConfigStore');
import configureStore from 'redux-mock-store';
import RequestRetaxConfigStore from '../RequestRetaxConfigStore';
describe('RequestRetaxConfigStore', function () {
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
        var configStore = new RequestRetaxConfigStore(staticContext);
        configStore.config = staticContext.retaxConfig; // simulate the behavior of RetaxConfigStore
        var evaluatedConfig = configStore.evaluateConfig(reduxStore);
        expect(evaluatedConfig).toEqual({
            router: {
                static: { myRoute: true }
            }
        });
    });
    it('evaluates the config with a dynamic router', function () {
        var reduxStore = configureStore()();
        var configStore = new RequestRetaxConfigStore(dynamicContext);
        configStore.config = dynamicContext.retaxConfig; // simulate the behavior of RetaxConfigStore
        var evaluatedConfig = configStore.evaluateConfig(reduxStore);
        expect(dynamicContext.request.req.header).toBeCalled();
        expect(dynamicContext.retaxConfig.router.dynamic).toBeCalledWith(reduxStore, undefined);
        expect(evaluatedConfig).toEqual({
            router: {
                dynamic: dynamicContext.retaxConfig.router.dynamic,
                static: undefined
            }
        });
    });
});
//# sourceMappingURL=RequestRetaxConfigStore-test.js.map
