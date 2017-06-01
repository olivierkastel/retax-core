'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _enzyme = require('enzyme');

var _reactRouter = require('react-router');

var _inversify = require('../inversify');

var _inversifyKernelFacade = require('../inversifyKernelFacade');

var _components = require('../components');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

describe('Retax Core', function () {
    function counterReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var action = arguments[1];

        switch (action.type) {
            case 'INC':
                return state + 1;
            default:
                return state;
        }
    }
    var retaxConfig = {
        lifecycle: undefined,
        react: {
            appendChild: undefined
        },
        router: {
            static: React.createElement(
                _reactRouter.Route,
                { path: '/' },
                React.createElement(_reactRouter.Route, { path: 'home' }),
                React.createElement(_reactRouter.Route, { path: 'about' })
            )
        },
        store: {
            reducers: {
                counter: counterReducer
            }
        }
    };
    pit('build a retax app', function () {
        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee() {
            var history, location, inversifyKernelFacade, mediator, app, wrapper;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            // configure history
                            history = (0, _reactRouter.createMemoryHistory)();
                            location = history.createLocation('/home');

                            history.replace(location);
                            // create IOC kernel
                            inversifyKernelFacade = new _inversifyKernelFacade.InversifyKernelFacade();

                            inversifyKernelFacade.loadKernelModules([_inversify.commonModule, _inversify.clientModule, (0, _inversify.contextModuleFactory)({ history: history, retaxConfig: retaxConfig }), (0, _inversify.lifecycleModuleFactory)(retaxConfig.lifecycle)]);
                            // build the app
                            mediator = inversifyKernelFacade.getService(_inversify.MEDIATOR);
                            _context.next = 8;
                            return mediator.run(inversifyKernelFacade);

                        case 8:
                            app = _context.sent;

                            expect(app.type).toEqual(_components.RetaxProvider);
                            wrapper = (0, _enzyme.shallow)(app);

                            expect(wrapper).toBeTruthy();

                        case 12:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    });
});
//# sourceMappingURL=retax-test.js.map
