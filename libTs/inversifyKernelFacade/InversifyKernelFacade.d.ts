import { interfaces } from 'inversify';
import { IInversifyKernelFacade, IUserModule } from './interfaces';
export default class InversifyKernelFacade implements IInversifyKernelFacade {
    private _kernel;
    private _loadedUserModules;
    constructor();
    getService<T>(serviceId: Symbol): T;
    getAllServices<T>(serviceId: Symbol): T[];
    loadKernelModules(modules?: interfaces.KernelModule[]): void;
    loadModules(modules?: IUserModule[]): void;
    unloadModules(modules?: IUserModule[]): void;
}
