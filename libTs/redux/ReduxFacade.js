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
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import * as internalReducers from './reducers';
import { credentialsMiddleware } from './middlewares';
import { setAuthToken } from './actionsCreators';
import { RETAX_CONFIG_STORE, COOKIE_PROXY, CONTEXT } from '../inversify';
let ReduxFacade = class ReduxFacade {
    constructor(_configStore, _cookieProxy, _context) {
        this._configStore = _configStore;
        this._cookieProxy = _cookieProxy;
        this._context = _context;
    }
    get store() {
        if (this._store === undefined) {
            throw new Error('The store has not been initialized yet');
        }
        return this._store;
    }
    getAuthToken() {
        const { retax } = this.store.getState();
        return retax.get('authToken');
    }
    setAuthToken(token) {
        return this.dispatch(setAuthToken(token));
    }
    dispatch(action) {
        return this.store.dispatch(action);
    }
    initialize(initialState) {
        // create the store
        this._store = this._initStore(initialState);
        // initialize the store with the current auth token
        this.dispatch(setAuthToken(this._cookieProxy.authToken));
        return this._store;
    }
    _initStore(initialState) {
        const { middlewares, reducers, storeEnhancers } = this._configStore.config.store;
        const rootReducer = this._combineReducers(reducers);
        const store = this._createStore({
            initialState,
            history: this._context.history,
            rootReducer,
            storeEnhancers,
            middlewares,
        });
        this._context.history = syncHistoryWithStore(this._context.history, store);
        return store;
    }
    _combineReducers(reducers) {
        return combineReducers(Object.assign({
            routing: routerReducer,
        }, internalReducers, reducers));
    }
    _createStore(config) {
        const { initialState, history, middlewares = [], storeEnhancers = [], rootReducer } = config;
        let finalStoreEnhancers = [];
        const reduxRouterMiddleware = routerMiddleware(history);
        const middlewareEnhancer = applyMiddleware(...[
            ...middlewares.filter(x => !!x),
            credentialsMiddleware(this._cookieProxy),
            reduxRouterMiddleware,
        ].filter(x => !!x));
        finalStoreEnhancers.push(...storeEnhancers.filter(x => !!x));
        return createStore(rootReducer, initialState, compose(middlewareEnhancer));
    }
};
ReduxFacade = __decorate([
    injectable(),
    __param(0, inject(RETAX_CONFIG_STORE)),
    __param(1, inject(COOKIE_PROXY)),
    __param(2, inject(CONTEXT)), 
    __metadata('design:paramtypes', [Object, Object, Object])
], ReduxFacade);
export default ReduxFacade;
//# sourceMappingURL=ReduxFacade.js.map