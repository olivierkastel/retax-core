'use strict';

var _reactRouter = require('react-router');

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _ReactRouterFacade = require('../ReactRouterFacade');

var _ReactRouterFacade2 = _interopRequireDefault(_ReactRouterFacade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
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
jest.disableAutomock();

describe('ReactRouterFacade', function () {
    var history = (0, _reactRouter.createMemoryHistory)();
    var context = {
        history: history
    };
    var reduxFacade = {
        store: (0, _reduxMockStore2.default)()({})
    };
    var configStore = {
        evaluateConfig: jest.fn(function () {
            return {
                router: {
                    static: {
                        childRoutes: [{ path: 'home' }, {
                            path: 'redirect',
                            onEnter: function onEnter(nextState, replace) {
                                replace('/home');
                            }
                        }],
                        path: '/'
                    }
                }
            };
        })
    };
    it('throws when render props are not yet computed', function () {
        var routerFacade = new _ReactRouterFacade2.default(context, reduxFacade, configStore);
        expect(function () {
            return routerFacade.renderProps;
        }).toThrow();
    });
    pit('initialize the facade', function () {
        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee() {
            var routerFacade, renderProps;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            history.replace('/home');
                            routerFacade = new _ReactRouterFacade2.default(context, reduxFacade, configStore);
                            _context.next = 4;
                            return routerFacade.initialize();

                        case 4:
                            renderProps = _context.sent;

                            expect(renderProps).toBeTruthy();
                            expect(renderProps.location.pathname).toEqual('/home');
                            expect(routerFacade.renderProps).toEqual(renderProps);

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    });
    pit('redirect to another route', function () {
        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
            var routerFacade, renderProps;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            history.replace('/redirect');
                            routerFacade = new _ReactRouterFacade2.default(context, reduxFacade, configStore);
                            _context2.next = 4;
                            return routerFacade.resolveRoute();

                        case 4:
                            renderProps = _context2.sent;

                            expect(renderProps).toBeTruthy();
                            expect(renderProps.location.pathname).toEqual('/home');

                        case 7:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));
    });
    pit('throws an error when nothing match', function () {
        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
            var routerFacade, error;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            history.replace('/error');
                            routerFacade = new _ReactRouterFacade2.default(context, reduxFacade, configStore);
                            error = void 0;
                            _context3.prev = 3;
                            _context3.next = 6;
                            return routerFacade.resolveRoute();

                        case 6:
                            _context3.next = 11;
                            break;

                        case 8:
                            _context3.prev = 8;
                            _context3.t0 = _context3['catch'](3);

                            error = _context3.t0;

                        case 11:
                            _context3.prev = 11;

                            expect(error.message).toEqual('Error in react-router, too much try');
                            return _context3.finish(11);

                        case 14:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this, [[3, 8, 11, 14]]);
        }));
    });
});
//# sourceMappingURL=ReactRouterFacade-test.js.map
