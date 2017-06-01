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
import { CONTEXT, COOKIE_PROXY, STATE_PROXY, REDUX_FACADE, REACT_ROUTER_FACADE, LIFECYCLE_ACTIONS_CREATOR, JSX_BUILDER } from '../inversify/identifiers';
let RetaxMediator = class RetaxMediator {
    constructor(_context, _cookieProxy, _stateProxy, _reduxFacade, _routerFacade, _lifecycleActionsCreator, _jsxBuilder) {
        this._context = _context;
        this._cookieProxy = _cookieProxy;
        this._stateProxy = _stateProxy;
        this._reduxFacade = _reduxFacade;
        this._routerFacade = _routerFacade;
        this._lifecycleActionsCreator = _lifecycleActionsCreator;
        this._jsxBuilder = _jsxBuilder;
    }
    run(kernel) {
        return __awaiter(this, void 0, Promise, function* () {
            // initial state
            const initialState = this._stateProxy.read();
            // this.redux Facade init
            this._reduxFacade.initialize(initialState);
            // preroute hook
            yield this._runPreRouteHook();
            // this.router resolve route
            const renderProps = yield this._routerFacade.initialize();
            // postroute hook
            yield this._runPostRouteHook(renderProps);
            // builder
            const app = this._jsxBuilder.build(kernel);
            // history hook
            this._attachHistoryChangeHook();
            // notify the user that everything is initialized
            this._completeInitialization();
            return app;
        });
    }
    _runPreRouteHook() {
        return __awaiter(this, void 0, Promise, function* () {
            const { authToken } = this._cookieProxy;
            if (this._lifecycleActionsCreator && this._lifecycleActionsCreator.willResolveRoute) {
                yield this._reduxFacade.dispatch(this._lifecycleActionsCreator.willResolveRoute(!!authToken));
            }
        });
    }
    _runPostRouteHook(renderProps) {
        return __awaiter(this, void 0, Promise, function* () {
            if (this._lifecycleActionsCreator && this._lifecycleActionsCreator.didResolveRoute) {
                yield this._reduxFacade.dispatch(this._lifecycleActionsCreator.didResolveRoute(renderProps));
            }
        });
    }
    _attachHistoryChangeHook() {
        if (this._lifecycleActionsCreator && this._lifecycleActionsCreator.historyDidChanged) {
            this._context.history.listen(this._historyChangeHook.bind(this));
        }
    }
    _historyChangeHook(location) {
        return __awaiter(this, void 0, Promise, function* () {
            const renderProps = yield this._routerFacade.resolveRoute();
            this._reduxFacade.dispatch(this._lifecycleActionsCreator.historyDidChanged(location, renderProps));
        });
    }
    _completeInitialization() {
        if (this._lifecycleActionsCreator && this._lifecycleActionsCreator.initializationComplete) {
            this._lifecycleActionsCreator.initializationComplete(this._reduxFacade.store);
        }
    }
};
RetaxMediator = __decorate([
    injectable(),
    __param(0, inject(CONTEXT)),
    __param(1, inject(COOKIE_PROXY)),
    __param(2, inject(STATE_PROXY)),
    __param(3, inject(REDUX_FACADE)),
    __param(4, inject(REACT_ROUTER_FACADE)),
    __param(5, inject(LIFECYCLE_ACTIONS_CREATOR)),
    __param(6, inject(JSX_BUILDER)), 
    __metadata('design:paramtypes', [Object, Object, Object, Object, Object, Object, Object])
], RetaxMediator);
export default RetaxMediator;
//# sourceMappingURL=Mediator.js.map