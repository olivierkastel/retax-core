var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
import { injectable, inject } from 'inversify';
import { CONTEXT, COOKIE_PROXY, STATE_PROXY, REDUX_FACADE, REACT_ROUTER_FACADE, LIFECYCLE_ACTIONS_CREATOR, JSX_BUILDER } from '../inversify/identifiers';
var RetaxMediator = function () {
    function RetaxMediator(_context, _cookieProxy, _stateProxy, _reduxFacade, _routerFacade, _lifecycleActionsCreator, _jsxBuilder) {
        _classCallCheck(this, RetaxMediator);

        this._context = _context;
        this._cookieProxy = _cookieProxy;
        this._stateProxy = _stateProxy;
        this._reduxFacade = _reduxFacade;
        this._routerFacade = _routerFacade;
        this._lifecycleActionsCreator = _lifecycleActionsCreator;
        this._jsxBuilder = _jsxBuilder;
    }

    _createClass(RetaxMediator, [{
        key: "run",
        value: function run(kernel) {
            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee() {
                var initialState, renderProps, app;
                return regeneratorRuntime.wrap(function _callee$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                // initial state
                                initialState = this._stateProxy.read();
                                // this.redux Facade init

                                this._reduxFacade.initialize(initialState);
                                // preroute hook
                                _context2.next = 4;
                                return this._runPreRouteHook();

                            case 4:
                                _context2.next = 6;
                                return this._routerFacade.initialize();

                            case 6:
                                renderProps = _context2.sent;
                                _context2.next = 9;
                                return this._runPostRouteHook(renderProps);

                            case 9:
                                // builder
                                app = this._jsxBuilder.build(kernel);
                                // history hook

                                this._attachHistoryChangeHook();
                                // notify the user that everything is initialized
                                this._completeInitialization();
                                return _context2.abrupt("return", app);

                            case 13:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "_runPreRouteHook",
        value: function _runPreRouteHook() {
            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee2() {
                var authToken;
                return regeneratorRuntime.wrap(function _callee2$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                authToken = this._cookieProxy.authToken;

                                if (!(this._lifecycleActionsCreator && this._lifecycleActionsCreator.willResolveRoute)) {
                                    _context3.next = 4;
                                    break;
                                }

                                _context3.next = 4;
                                return this._reduxFacade.dispatch(this._lifecycleActionsCreator.willResolveRoute(!!authToken));

                            case 4:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "_runPostRouteHook",
        value: function _runPostRouteHook(renderProps) {
            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                if (!(this._lifecycleActionsCreator && this._lifecycleActionsCreator.didResolveRoute)) {
                                    _context4.next = 3;
                                    break;
                                }

                                _context4.next = 3;
                                return this._reduxFacade.dispatch(this._lifecycleActionsCreator.didResolveRoute(renderProps));

                            case 3:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
    }, {
        key: "_attachHistoryChangeHook",
        value: function _attachHistoryChangeHook() {
            if (this._lifecycleActionsCreator && this._lifecycleActionsCreator.historyDidChanged) {
                this._context.history.listen(this._historyChangeHook.bind(this));
            }
        }
    }, {
        key: "_historyChangeHook",
        value: function _historyChangeHook(location) {
            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee4() {
                var renderProps;
                return regeneratorRuntime.wrap(function _callee4$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return this._routerFacade.resolveRoute();

                            case 2:
                                renderProps = _context5.sent;

                                this._reduxFacade.dispatch(this._lifecycleActionsCreator.historyDidChanged(location, renderProps));

                            case 4:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee4, this);
            }));
        }
    }, {
        key: "_completeInitialization",
        value: function _completeInitialization() {
            if (this._lifecycleActionsCreator && this._lifecycleActionsCreator.initializationComplete) {
                this._lifecycleActionsCreator.initializationComplete(this._reduxFacade.store);
            }
        }
    }]);

    return RetaxMediator;
}();
RetaxMediator = __decorate([injectable(), __param(0, inject(CONTEXT)), __param(1, inject(COOKIE_PROXY)), __param(2, inject(STATE_PROXY)), __param(3, inject(REDUX_FACADE)), __param(4, inject(REACT_ROUTER_FACADE)), __param(5, inject(LIFECYCLE_ACTIONS_CREATOR)), __param(6, inject(JSX_BUILDER)), __metadata('design:paramtypes', [Object, Object, Object, Object, Object, Object, Object])], RetaxMediator);
export default RetaxMediator;
//# sourceMappingURL=Mediator.js.map
