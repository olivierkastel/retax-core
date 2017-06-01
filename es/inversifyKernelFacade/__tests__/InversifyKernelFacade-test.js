jest.unmock('inversify');
jest.unmock('../InversifyKernelFacade');
import { KernelModule } from 'inversify';
import InversifyKernelFacade from '../InversifyKernelFacade';
describe('InversifyKernelFacade', function () {
    var module1Id = Symbol('module1');
    var module2Id = Symbol('module2');
    var module1 = new KernelModule(function (bind) {
        return bind(module1Id).toConstantValue(1);
    });
    var module2 = new KernelModule(function (bind) {
        return bind(module2Id).toConstantValue(2);
    });
    var baseModules = [{
        kernelModule: module1,
        serviceId: module1Id
    }, {
        kernelModule: module2,
        serviceId: module2Id
    }];
    it('loads modules into the kernel', function () {
        var kernelFacade = new InversifyKernelFacade();
        kernelFacade.loadModules(baseModules);
        expect(kernelFacade._loadedUserModules.get(module1Id)).toEqual(true);
        expect(kernelFacade._loadedUserModules.get(module2Id)).toEqual(true);
        expect(kernelFacade.getService(module1Id)).toEqual(1);
        expect(kernelFacade.getService(module2Id)).toEqual(2);
        var module3Id = Symbol('module3');
        var module3 = new KernelModule(function (bind) {
            return bind(module3Id).toConstantValue(3);
        });
        var userModules2 = [{
            kernelModule: module3,
            serviceId: module3Id
        }];
        kernelFacade.loadModules(userModules2);
        expect(kernelFacade._loadedUserModules.get(module3Id)).toEqual(true);
        expect(kernelFacade.getService(module3Id)).toEqual(3);
    });
    it('unloads modules from the kernel', function () {
        var kernelFacade = new InversifyKernelFacade();
        kernelFacade.loadModules(baseModules);
        kernelFacade.unloadModules(baseModules);
        expect(kernelFacade._loadedUserModules.get(module1Id)).toEqual(false);
        expect(kernelFacade._loadedUserModules.get(module2Id)).toEqual(false);
    });
    it('get all services with a same id', function () {
        var kernelFacade = new InversifyKernelFacade();
        var moduleId = Symbol('module');
        var myModule = new KernelModule(function (bind) {
            bind(moduleId).toConstantValue(1);
            bind(moduleId).toConstantValue(2);
        });
        var modules = [{
            kernelModule: myModule,
            serviceId: moduleId
        }];
        kernelFacade.loadModules(modules);
        expect(kernelFacade._loadedUserModules.get(moduleId)).toEqual(true);
        expect(kernelFacade.getAllServices(moduleId)).toEqual([1, 2]);
    });
    it('loads raw kernel module into the kernel', function () {
        var kernelFacade = new InversifyKernelFacade();
        var moduleId = Symbol('module');
        var modules = [new KernelModule(function (bind) {
            return bind(moduleId).toConstantValue(1);
        })];
        kernelFacade.loadKernelModules(modules);
        expect(kernelFacade.getService(moduleId)).toEqual(1);
    });
});
//# sourceMappingURL=InversifyKernelFacade-test.js.map
