import { Store } from 'redux';
import { IReduxFacade } from './interfaces';
import { TSetAuthTokenPayload } from './actionsCreators';
import { IRetaxConfigStore } from '../configStores';
import { ICookieProxy } from '../cookieProxies';
import { IImmutableState } from '../stateProxies';
import { IContext } from '../context';
import { IAction } from 'retax-utils';
export default class ReduxFacade implements IReduxFacade {
    private _configStore;
    private _cookieProxy;
    private _context;
    private _store;
    constructor(_configStore: IRetaxConfigStore, _cookieProxy: ICookieProxy, _context: IContext);
    store: Store<any>;
    getAuthToken(): string;
    setAuthToken(token: string): IAction<TSetAuthTokenPayload, void>;
    dispatch(action: IAction<any, any>): IAction<any, any>;
    initialize(initialState: IImmutableState): Store<any>;
    private _initStore(initialState);
    private _combineReducers(reducers);
    private _createStore(config);
}
