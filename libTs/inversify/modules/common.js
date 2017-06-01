import { KernelModule } from 'inversify';
import { RetaxProvider } from '../../components';
import { ReactRouterFacade } from '../../reactRouter';
import { ReduxFacade } from '../../redux';
import { RetaxMediator } from '../../mediator';
import { MEDIATOR, COMPONENTS, REACT_ROUTER_FACADE, REDUX_FACADE, CONTEXT, LIFECYCLE_ACTIONS_CREATOR } from '../identifiers';
export default new KernelModule((bind) => {
    bind(MEDIATOR).to(RetaxMediator).inSingletonScope();
    bind(REACT_ROUTER_FACADE).to(ReactRouterFacade).inSingletonScope();
    bind(REDUX_FACADE).to(ReduxFacade).inSingletonScope();
    bind(COMPONENTS.RETAX_PROVIDER_COMPONENT).toConstructor(RetaxProvider);
});
export function contextModuleFactory(context) {
    return new KernelModule((bind) => {
        bind(CONTEXT).toConstantValue(context);
    });
}
export function lifecycleModuleFactory(LifecycleActionsCreator) {
    return new KernelModule((bind) => {
        if (LifecycleActionsCreator) {
            bind(LIFECYCLE_ACTIONS_CREATOR).to(LifecycleActionsCreator);
        }
        else {
            bind(LIFECYCLE_ACTIONS_CREATOR).toConstantValue(undefined);
        }
    });
}
//# sourceMappingURL=common.js.map