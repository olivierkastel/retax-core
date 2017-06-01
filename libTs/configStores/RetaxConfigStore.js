import { ConfigStore } from 'retax-utils';
export const initialConfig = {
    api: {
        authHeaderName: 'auth-server-token',
        baseUrl: '',
    },
    client: {
        keepInitialState: false,
    },
    lifecycle: undefined,
    react: {},
    router: {
        static: {},
    },
    store: {
        initialState: {},
        middlewares: [],
        nonImmutableKeys: ['routing'],
        reducers: undefined,
        storeEnhancers: [],
    },
};
class RetaxConfigStore extends ConfigStore {
    constructor(userConfig) {
        super();
        this.config = initialConfig;
        this.mergeConfig(userConfig);
    }
}
export default RetaxConfigStore;
//# sourceMappingURL=RetaxConfigStore.js.map