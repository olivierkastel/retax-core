jest.unmock('inversify');
jest.unmock('redux');
jest.unmock('retax-utils');
jest.unmock('redux-mock-store');
jest.unmock('../DomRetaxConfigStore');
import configureStore from 'redux-mock-store';
import DomRetaxConfigStore from '../DomRetaxConfigStore';
describe('DomRetaxConfigStore', () => {
    const staticContext = {
        request: {
            req: {
                header: jest.fn(),
            },
        },
        retaxConfig: {
            router: {
                static: { myRoute: true },
            },
        },
    };
    const dynamicContext = {
        request: {
            req: {
                header: jest.fn(),
            },
        },
        retaxConfig: {
            router: {
                dynamic: jest.fn(),
            },
        },
    };
    it('evaluates the config with a static router', () => {
        const reduxStore = configureStore()();
        const configStore = new DomRetaxConfigStore(staticContext);
        configStore.config = staticContext.retaxConfig; // simulate the behavior of RetaxConfigStore
        const evaluatedConfig = configStore.evaluateConfig(reduxStore);
        expect(evaluatedConfig).toEqual({
            router: {
                dynamic: undefined,
                static: { myRoute: true },
            },
        });
    });
    it('evaluates the config with a dynamic router', () => {
        const curentUserAgent = navigator.userAgent;
        const reduxStore = configureStore()();
        const configStore = new DomRetaxConfigStore(dynamicContext);
        configStore.config = dynamicContext.retaxConfig; // simulate the behavior of RetaxConfigStore
        const evaluatedConfig = configStore.evaluateConfig(reduxStore);
        expect(dynamicContext.retaxConfig.router.dynamic).toBeCalledWith(reduxStore, curentUserAgent);
        expect(evaluatedConfig).toEqual({
            router: {
                dynamic: dynamicContext.retaxConfig.router.dynamic,
                static: undefined,
            },
        });
    });
});
//# sourceMappingURL=DomRetaxConfigStore-test.js.map