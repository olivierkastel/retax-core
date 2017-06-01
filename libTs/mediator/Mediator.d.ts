import { IRetaxMediator } from './interfaces';
import { IInversifyKernelFacade } from '../inversifyKernelFacade';
import { ICookieProxy } from '../cookieProxies';
import { IStateProxy } from '../stateProxies';
import { IReduxFacade } from '../redux';
import { IReactRouterFacade } from '../reactRouter';
import { ILifecycleService } from '../components';
import { IJSXBuilder } from '../JSXBuilders';
import { IContext } from '../context';
export default class RetaxMediator implements IRetaxMediator {
    private _context;
    private _cookieProxy;
    private _stateProxy;
    private _reduxFacade;
    private _routerFacade;
    private _lifecycleActionsCreator;
    private _jsxBuilder;
    constructor(_context: IContext, _cookieProxy: ICookieProxy, _stateProxy: IStateProxy, _reduxFacade: IReduxFacade, _routerFacade: IReactRouterFacade, _lifecycleActionsCreator: ILifecycleService, _jsxBuilder: IJSXBuilder);
    run(kernel: IInversifyKernelFacade): Promise<JSX.Element>;
    private _runPreRouteHook();
    private _runPostRouteHook(renderProps);
    private _attachHistoryChangeHook();
    private _historyChangeHook(location);
    private _completeInitialization();
}
