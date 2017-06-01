import { Store } from 'redux';
import { ConfigStore } from 'retax-utils';

import { IRetaxConfig, IRetaxConfigStore } from './interfaces';

export const initialConfig: IRetaxConfig = {
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

abstract class RetaxConfigStore extends ConfigStore<IRetaxConfig> implements IRetaxConfigStore {
  constructor(userConfig: IRetaxConfig) {
    super();
    this.config = initialConfig;
    this.mergeConfig(userConfig);
  }

  public abstract evaluateConfig(store: Store<any>): IRetaxConfig;
}

export default RetaxConfigStore;
