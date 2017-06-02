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
import CookieProxy from './CookieProxy';
import { COOKIE_AUTH_TOKEN_KEY } from '../constants';
import { CONTEXT } from '../inversify/identifiers';
let RequestCookieProxy = class RequestCookieProxy extends CookieProxy {
    constructor(_context) {
        super();
        this._context = _context;
    }
    deleteAuthToken() {
        this._context.request.res.cookie(COOKIE_AUTH_TOKEN_KEY, undefined);
    }
    _setAuthToken(token) {
        if (!token)
            return;
        console.log('________cookie2_______');
        console.log(this._readAuthToken());
        console.log(token);
        if (this._readAuthToken() !== token) {
            console.log('Cookie set 2');
            this._context.request.res.cookie(COOKIE_AUTH_TOKEN_KEY, token);
        }
    }
    _readAuthToken() {
        return this._context.request.req.cookies[COOKIE_AUTH_TOKEN_KEY];
    }
};
RequestCookieProxy = __decorate([
    injectable(),
    __param(0, inject(CONTEXT)), 
    __metadata('design:paramtypes', [Object])
], RequestCookieProxy);
export default RequestCookieProxy;
//# sourceMappingURL=RequestCookieProxy.js.map