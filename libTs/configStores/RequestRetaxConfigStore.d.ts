import { Store } from 'redux';
import RetaxConfigStore from './RetaxConfigStore';
import { IRetaxConfig } from './interfaces';
import { IContext } from '../context';
export default class RequestRetaxConfigStore extends RetaxConfigStore {
    private _context;
    constructor(_context: IContext);
    evaluateConfig(store: Store<any>): IRetaxConfig;
}
