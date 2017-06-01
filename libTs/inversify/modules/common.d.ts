import { interfaces } from 'inversify';
import { ILifecycleServiceConstructor } from '../../components';
import { IContext } from '../../context';
declare var _default: interfaces.KernelModule;
export default _default;
export declare function contextModuleFactory(context: IContext): interfaces.KernelModule;
export declare function lifecycleModuleFactory(LifecycleActionsCreator: ILifecycleServiceConstructor): interfaces.KernelModule;
