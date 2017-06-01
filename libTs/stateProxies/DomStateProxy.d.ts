import { IStateProxy } from './interfaces';
import AStateConverter from './StateConverter';
import { IRetaxConfigStore } from '../configStores';
export default class DomStateProxy extends AStateConverter implements IStateProxy {
    private _retaxConfigStore;
    constructor(_retaxConfigStore: IRetaxConfigStore);
    read<S>(): S;
}
