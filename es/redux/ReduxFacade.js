var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = this && this.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
import { injectable, inject } from 'inversify';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import * as internalReducers from './reducers';
import { credentialsMiddleware } from './middlewares';
import { setAuthToken as _setAuthToken } from './actionsCreators';
import { RETAX_CONFIG_STORE, COOKIE_PROXY, CONTEXT } from '../inversify';
var ReduxFacade = function () {
    function ReduxFacade(_configStore, _cookieProxy, _context) {
        _classCallCheck(this, ReduxFacade);

        this._configStore = _configStore;
        this._cookieProxy = _cookieProxy;
        this._context = _context;
    }

    _createClass(ReduxFacade, [{
        key: "getAuthToken",
        value: function getAuthToken() {
            var _store$getState = this.store.getState(),
                retax = _store$getState.retax;

            return retax.get('authToken');
        }
    }, {
        key: "setAuthToken",
        value: function setAuthToken(token) {
            return this.dispatch(_setAuthToken(token));
        }
    }, {
        key: "dispatch",
        value: function dispatch(action) {
            return this.store.dispatch(action);
        }
    }, {
        key: "initialize",
        value: function initialize(initialState) {
            // create the store
            this._store = this._initStore(initialState);
            // initialize the store with the current auth token
            this.dispatch(_setAuthToken(this._cookieProxy.authToken));
            return this._store;
        }
    }, {
        key: "_initStore",
        value: function _initStore(initialState) {
            var _configStore$config$s = this._configStore.config.store,
                middlewares = _configStore$config$s.middlewares,
                reducers = _configStore$config$s.reducers,
                storeEnhancers = _configStore$config$s.storeEnhancers;

            var rootReducer = this._combineReducers(reducers);
            var store = this._createStore({
                initialState: initialState,
                history: this._context.history,
                rootReducer: rootReducer,
                storeEnhancers: storeEnhancers,
                middlewares: middlewares
            });
            this._context.history = syncHistoryWithStore(this._context.history, store);
            return store;
        }
    }, {
        key: "_combineReducers",
        value: function _combineReducers(reducers) {
            return combineReducers(Object.assign({
                routing: routerReducer
            }, internalReducers, reducers));
        }
    }, {
        key: "_createStore",
        value: function _createStore(config) {
            var initialState = config.initialState,
                history = config.history,
                _config$middlewares = config.middlewares,
                middlewares = _config$middlewares === undefined ? [] : _config$middlewares,
                _config$storeEnhancer = config.storeEnhancers,
                storeEnhancers = _config$storeEnhancer === undefined ? [] : _config$storeEnhancer,
                rootReducer = config.rootReducer;

            var finalStoreEnhancers = [];
            var reduxRouterMiddleware = routerMiddleware(history);
            var middlewareEnhancer = applyMiddleware.apply(undefined, _toConsumableArray([].concat(_toConsumableArray(middlewares.filter(function (x) {
                return !!x;
            })), [credentialsMiddleware(this._cookieProxy), reduxRouterMiddleware]).filter(function (x) {
                return !!x;
            })));
            finalStoreEnhancers.push.apply(finalStoreEnhancers, _toConsumableArray(storeEnhancers.filter(function (x) {
                return !!x;
            })));
            return createStore(rootReducer, initialState, compose(middlewareEnhancer));
        }
    }, {
        key: "store",
        get: function get() {
            if (this._store === undefined) {
                throw new Error('The store has not been initialized yet');
            }
            return this._store;
        }
    }]);

    return ReduxFacade;
}();
ReduxFacade = __decorate([injectable(), __param(0, inject(RETAX_CONFIG_STORE)), __param(1, inject(COOKIE_PROXY)), __param(2, inject(CONTEXT)), __metadata('design:paramtypes', [Object, Object, Object])], ReduxFacade);
export default ReduxFacade;
//# sourceMappingURL=ReduxFacade.js.map
