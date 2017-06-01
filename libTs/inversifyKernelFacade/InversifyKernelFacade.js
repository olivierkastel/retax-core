var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Kernel, injectable } from 'inversify';
let InversifyKernelFacade = class InversifyKernelFacade {
    constructor() {
        this._kernel = new Kernel();
        this._loadedUserModules = new Map();
    }
    getService(serviceId) {
        return this._kernel.get(serviceId);
    }
    getAllServices(serviceId) {
        return this._kernel.getAll(serviceId);
    }
    loadKernelModules(modules = []) {
        this._kernel.load(...modules);
    }
    loadModules(modules = []) {
        modules.forEach(m => {
            if (!this._loadedUserModules.get(m.serviceId)) {
                this._kernel.load(m.kernelModule);
                this._loadedUserModules.set(m.serviceId, true);
            }
        });
    }
    unloadModules(modules = []) {
        modules.forEach(m => {
            if (this._loadedUserModules.get(m.serviceId)) {
                this._kernel.unload(m.kernelModule);
                this._loadedUserModules.set(m.serviceId, false);
            }
        });
    }
};
InversifyKernelFacade = __decorate([
    injectable(), 
    __metadata('design:paramtypes', [])
], InversifyKernelFacade);
export default InversifyKernelFacade;
//# sourceMappingURL=InversifyKernelFacade.js.map