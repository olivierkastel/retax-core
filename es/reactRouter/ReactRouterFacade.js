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
import { match } from 'react-router';
import { CONTEXT, REDUX_FACADE, RETAX_CONFIG_STORE } from '../inversify';
var ReactRouterFacade = function () {
    function ReactRouterFacade(_context, _reduxFacade, _configStore) {
        _classCallCheck(this, ReactRouterFacade);

        this._context = _context;
        this._reduxFacade = _reduxFacade;
        this._configStore = _configStore;
    }

    _createClass(ReactRouterFacade, [{
        key: "initialize",
        value: function initialize() {
            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.resolveRoute();

                            case 2:
                                this._renderProps = _context2.sent;
                                return _context2.abrupt("return", this._renderProps);

                            case 4:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "resolveRoute",
        value: function resolveRoute() {
            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee2() {
                var store, resolutionTry, finalRenderProps, config, routes, _ref, renderProps, redirectLocation;

                return regeneratorRuntime.wrap(function _callee2$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                store = this._reduxFacade.store;
                                resolutionTry = 0;
                                finalRenderProps = void 0;

                            case 3:
                                config = this._configStore.evaluateConfig(store);
                                routes = config.router.static;
                                _context3.next = 7;
                                return this._match({
                                    history: this._context.history,
                                    routes: routes
                                });

                            case 7:
                                _ref = _context3.sent;
                                renderProps = _ref.renderProps;
                                redirectLocation = _ref.redirectLocation;

                                if (redirectLocation) {
                                    this._context.history.replace(redirectLocation);
                                }
                                finalRenderProps = renderProps;
                                resolutionTry++;

                            case 13:
                                if (!finalRenderProps && resolutionTry < 3) {
                                    _context3.next = 3;
                                    break;
                                }

                            case 14:
                                if (!(!finalRenderProps && resolutionTry === 3)) {
                                    _context3.next = 16;
                                    break;
                                }

                                throw new Error('Error in react-router, too much try');

                            case 16:
                                return _context3.abrupt("return", finalRenderProps);

                            case 17:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "_match",
        value: function _match(config) {
            return new Promise(function (resolve, reject) {
                match(config, function (err, redirectLocation, renderProps) {
                    if (err) reject(err);
                    resolve({
                        redirectLocation: redirectLocation,
                        renderProps: renderProps
                    });
                });
            });
        }
    }, {
        key: "renderProps",
        get: function get() {
            if (!this._renderProps) {
                throw new Error('renderProps has not been initialized');
            }
            return this._renderProps;
        }
    }]);

    return ReactRouterFacade;
}();
ReactRouterFacade = __decorate([injectable(), __param(0, inject(CONTEXT)), __param(1, inject(REDUX_FACADE)), __param(2, inject(RETAX_CONFIG_STORE)), __metadata('design:paramtypes', [Object, Object, Object])], ReactRouterFacade);
export default ReactRouterFacade;
//# sourceMappingURL=ReactRouterFacade.js.map
