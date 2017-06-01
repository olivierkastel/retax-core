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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
import { injectable, inject } from 'inversify';
import { match } from 'react-router';
import { CONTEXT, REDUX_FACADE, RETAX_CONFIG_STORE } from '../inversify';
let ReactRouterFacade = class ReactRouterFacade {
    constructor(_context, _reduxFacade, _configStore) {
        this._context = _context;
        this._reduxFacade = _reduxFacade;
        this._configStore = _configStore;
    }
    get renderProps() {
        if (!this._renderProps) {
            throw new Error('renderProps has not been initialized');
        }
        return this._renderProps;
    }
    initialize() {
        return __awaiter(this, void 0, Promise, function* () {
            this._renderProps = yield this.resolveRoute();
            return this._renderProps;
        });
    }
    resolveRoute() {
        return __awaiter(this, void 0, Promise, function* () {
            const { store } = this._reduxFacade;
            let resolutionTry = 0;
            let finalRenderProps;
            do {
                const config = this._configStore.evaluateConfig(store);
                const routes = config.router.static;
                const { renderProps, redirectLocation } = yield this._match({
                    history: this._context.history,
                    routes,
                });
                if (redirectLocation) {
                    this._context.history.replace(redirectLocation);
                }
                finalRenderProps = renderProps;
                resolutionTry++;
            } while (!finalRenderProps && resolutionTry < 3);
            if (!finalRenderProps && resolutionTry === 3) {
                throw new Error('Error in react-router, too much try');
            }
            return finalRenderProps;
        });
    }
    _match(config) {
        return new Promise((resolve, reject) => {
            match(config, (err, redirectLocation, renderProps) => {
                if (err)
                    reject(err);
                resolve({
                    redirectLocation,
                    renderProps,
                });
            });
        });
    }
};
ReactRouterFacade = __decorate([
    injectable(),
    __param(0, inject(CONTEXT)),
    __param(1, inject(REDUX_FACADE)),
    __param(2, inject(RETAX_CONFIG_STORE)), 
    __metadata('design:paramtypes', [Object, Object, Object])
], ReactRouterFacade);
export default ReactRouterFacade;
//# sourceMappingURL=ReactRouterFacade.js.map