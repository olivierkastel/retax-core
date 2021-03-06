var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { injectable } from 'inversify';
import * as Cookie from 'js-cookie';
import CookieProxy from './CookieProxy';
import { COOKIE_AUTH_TOKEN_KEY } from '../constants';
let DomCookieProxy = class DomCookieProxy extends CookieProxy {
    deleteAuthToken() {
        console.log('deleteAuthToken : we delete the cookie');
        Cookie.remove(COOKIE_AUTH_TOKEN_KEY);
    }
    _setAuthToken(token) {
        if (!token)
            return;
        if (this._readAuthToken() === undefined) {
            console.log('_readAuthToken is undefined : we set the cookie');
            Cookie.set(COOKIE_AUTH_TOKEN_KEY, token);
        }
    }
    _readAuthToken() {
        console.log('_readAuthToken : we read the cookie');
        return Cookie.get(COOKIE_AUTH_TOKEN_KEY);
    }
};
DomCookieProxy = __decorate([
    injectable(), 
    __metadata('design:paramtypes', [])
], DomCookieProxy);
export default DomCookieProxy;
//# sourceMappingURL=DomCookieProxy.js.map