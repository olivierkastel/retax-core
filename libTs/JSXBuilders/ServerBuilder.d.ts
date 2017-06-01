import { IJSXBuilder } from './interfaces';
import { IInversifyKernelFacade } from '../inversifyKernelFacade';
import { RetaxProvider } from '../components';
import { IRetaxConfigStore } from '../configStores';
import { IReduxFacade } from '../redux';
import { IReactRouterFacade } from '../reactRouter';
export default class ServerBuilder implements IJSXBuilder {
    private _retaxConfigStore;
    private RetaxProviderComponent;
    private _reduxFacade;
    private _routerFacade;
    constructor(_retaxConfigStore: IRetaxConfigStore, RetaxProviderComponent: typeof RetaxProvider, _reduxFacade: IReduxFacade, _routerFacade: IReactRouterFacade);
    build(kernel: IInversifyKernelFacade): JSX.Element;
}
