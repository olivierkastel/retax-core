var _this = this;

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
jest.disableAutomock();
import * as React from 'react';
import { shallow } from 'enzyme';
import { createMemoryHistory, Route } from 'react-router';
import { commonModule, clientModule, contextModuleFactory, lifecycleModuleFactory, MEDIATOR } from '../inversify';
import { InversifyKernelFacade } from '../inversifyKernelFacade';
import { RetaxProvider } from '../components';
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
                Route,
                { path: '/' },
                React.createElement(Route, { path: 'home' }),
                React.createElement(Route, { path: 'about' })
            )
        },
        store: {
            reducers: {
                counter: counterReducer
            }
        }
    };
    pit('build a retax app', function () {
        return __awaiter(_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
            var history, location, inversifyKernelFacade, mediator, app, wrapper;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            // configure history
                            history = createMemoryHistory();
                            location = history.createLocation('/home');

                            history.replace(location);
                            // create IOC kernel
                            inversifyKernelFacade = new InversifyKernelFacade();

                            inversifyKernelFacade.loadKernelModules([commonModule, clientModule, contextModuleFactory({ history: history, retaxConfig: retaxConfig }), lifecycleModuleFactory(retaxConfig.lifecycle)]);
                            // build the app
                            mediator = inversifyKernelFacade.getService(MEDIATOR);
                            _context.next = 8;
                            return mediator.run(inversifyKernelFacade);

                        case 8:
                            app = _context.sent;

                            expect(app.type).toEqual(RetaxProvider);
                            wrapper = shallow(app);

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
