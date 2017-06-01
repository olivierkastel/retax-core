var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { injectable, inject } from 'inversify';
import RetaxConfigStore from './RetaxConfigStore';
import { CONTEXT } from '../inversify/identifiers';
let RequestRetaxConfigStore = class RequestRetaxConfigStore extends RetaxConfigStore {
    constructor(_context) {
        super(_context.retaxConfig);
        this._context = _context;
    }
    evaluateConfig(store) {
        const evaluatedConfig = this.config;
        const { router } = evaluatedConfig;
        if (router.dynamic && typeof router.dynamic === 'function') {
            router.static = router.dynamic(store, this._context.request.req.header('user-agent'));
        }
        return evaluatedConfig;
    }
};
RequestRetaxConfigStore = __decorate([
    injectable(),
    __param(0, inject(CONTEXT)), 
    __metadata('design:paramtypes', [Object])
], RequestRetaxConfigStore);
export default RequestRetaxConfigStore;
//# sourceMappingURL=RequestRetaxConfigStore.js.map