jest.unmock('inversify');
jest.unmock('retax-utils');
jest.unmock('../RetaxConfigStore');
import RetaxConfigStore from '../RetaxConfigStore';
describe('RetaxConfigStore', () => {
    class Consumer extends RetaxConfigStore {
        evaluateConfig(store) {
            return store;
        }
    }
    it('defines the initial config', () => {
        const store = new Consumer({
            router: {
                dynamic: undefined,
            },
        });
        expect(store.config).toEqual({
            api: {
                authHeaderName: 'auth_token',
                baseUrl: '',
            },
            client: {
                keepInitialState: false,
            },
            lifecycle: undefined,
            react: {},
            router: {
                dynamic: undefined,
                static: {},
            },
            store: {
                initialState: {},
                middlewares: [],
                nonImmutableKeys: ['routing'],
                reducers: undefined,
                storeEnhancers: [],
            },
        });
    });
});
//# sourceMappingURL=RetaxConfigStore-test.js.map