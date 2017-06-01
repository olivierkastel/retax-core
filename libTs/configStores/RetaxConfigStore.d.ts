import { Store } from 'redux';
import { ConfigStore } from 'retax-utils';
import { IRetaxConfig, IRetaxConfigStore } from './interfaces';
export declare const initialConfig: IRetaxConfig;
declare abstract class RetaxConfigStore extends ConfigStore<IRetaxConfig> implements IRetaxConfigStore {
    constructor(userConfig: IRetaxConfig);
    abstract evaluateConfig(store: Store<any>): IRetaxConfig;
}
export default RetaxConfigStore;
