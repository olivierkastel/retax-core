import { IJSXBuilder } from './interfaces';
import { IInversifyKernelFacade } from '../inversifyKernelFacade';
import { IReduxFacade } from '../redux';
import { IReactRouterFacade } from '../reactRouter';
import { RetaxProvider } from '../components';
import { IRetaxConfigStore } from '../configStores';
export default class ClientBuilder implements IJSXBuilder {
    private _retaxConfigStore;
    private RetaxProviderComponent;
    private _reduxFacade;
    private _routerFacade;
    constructor(_retaxConfigStore: IRetaxConfigStore, RetaxProviderComponent: typeof RetaxProvider, _reduxFacade: IReduxFacade, _routerFacade: IReactRouterFacade);
    build(kernel: IInversifyKernelFacade): JSX.Element;
}
