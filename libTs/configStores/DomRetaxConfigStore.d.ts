import { Store } from 'redux';
import RetaxConfigStore from './RetaxConfigStore';
import { IRetaxConfig } from './interfaces';
import { IContext } from '../context';
export default class DomRetaxConfigStore extends RetaxConfigStore {
    constructor(_context: IContext);
    evaluateConfig(store: Store<any>): IRetaxConfig;
}
