import { IReactRouterFacade } from './interfaces';
import { IRetaxConfigStore } from '../configStores';
import { IReduxFacade } from '../redux';
import { IContext } from '../context';
import { IRouterContextProps } from '../reactRouter';
export default class ReactRouterFacade implements IReactRouterFacade {
    private _context;
    private _reduxFacade;
    private _configStore;
    private _renderProps;
    constructor(_context: IContext, _reduxFacade: IReduxFacade, _configStore: IRetaxConfigStore);
    renderProps: IRouterContextProps;
    initialize(): Promise<IRouterContextProps>;
    resolveRoute(): Promise<IRouterContextProps>;
    private _match(config);
}
