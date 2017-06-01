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
import AStateConverter from './StateConverter';
import { INITIAL_STATE_KEY } from '../constants';
import { RETAX_CONFIG_STORE } from '../inversify/identifiers';
let DomStateProxy = class DomStateProxy extends AStateConverter {
    constructor(_retaxConfigStore) {
        super();
        this._retaxConfigStore = _retaxConfigStore;
    }
    read() {
        const { nonImmutableKeys } = this._retaxConfigStore.config.store;
        const serverState = window[INITIAL_STATE_KEY];
        const immutableState = this.convertStateToImmutable(serverState, nonImmutableKeys);
        return immutableState;
    }
};
DomStateProxy = __decorate([
    injectable(),
    __param(0, inject(RETAX_CONFIG_STORE)), 
    __metadata('design:paramtypes', [Object])
], DomStateProxy);
export default DomStateProxy;
//# sourceMappingURL=DomStateProxy.js.map