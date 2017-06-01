'use strict';

var _Mediator = require('../Mediator');

var _Mediator2 = _interopRequireDefault(_Mediator);

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
jest.unmock('inversify');
jest.unmock('../Mediator');

describe('Mediator Flow', function () {
    var context = {
        history: {
            listen: jest.fn()
        }
    };
    var cookieProxy = {
        authToken: '1234'
    };
    var stateProxy = {
        read: jest.fn(function () {
            return { initialState: true };
        })
    };
    var reduxFacade = {
        dispatch: jest.fn(),
        initialize: jest.fn()
    };
    var routerFacade = {
        initialize: jest.fn(function () {
            return { renderProps: true };
        })
    };
    var lifecycleActions = {
        didResolveRoute: jest.fn(function () {
            return { didResolveRoute: true };
        }),
        historyDidChanged: jest.fn(function () {
            return { historyDidChanged: true };
        }),
        initializationComplete: jest.fn(function () {
            return { initializationComplete: true };
        }),
        willResolveRoute: jest.fn(function () {
            return { willResolveRoute: true };
        })
    };
    var builder = {
        build: jest.fn(function () {
            return { theApp: true };
        })
    };
    var kernelFacade = {
        theKernel: true
    };
    pit('mediates the flow of retax', function () {
        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee() {
            var mediator, app;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            mediator = new _Mediator2.default(context, cookieProxy, stateProxy, reduxFacade, routerFacade, lifecycleActions, builder);
                            _context.next = 3;
                            return mediator.run(kernelFacade);

                        case 3:
                            app = _context.sent;

                            expect(stateProxy.read).toBeCalled();
                            expect(reduxFacade.initialize).toBeCalledWith({ initialState: true });
                            expect(lifecycleActions.willResolveRoute).toBeCalled();
                            expect(reduxFacade.dispatch).toBeCalledWith({ willResolveRoute: true });
                            expect(routerFacade.initialize).toBeCalled();
                            expect(lifecycleActions.didResolveRoute).toBeCalled();
                            expect(reduxFacade.dispatch).toBeCalledWith({ didResolveRoute: true });
                            expect(builder.build).toBeCalledWith(kernelFacade);
                            expect(context.history.listen).toBeCalled();
                            expect(lifecycleActions.initializationComplete).toBeCalled();
                            expect(app).toEqual({ theApp: true });

                        case 15:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    });
});
//# sourceMappingURL=Mediator-test.js.map
