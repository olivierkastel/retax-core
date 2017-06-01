var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
jest.disableAutomock();
import { createMemoryHistory } from 'react-router';
import configureStore from 'redux-mock-store';
import ReactRouterFacade from '../ReactRouterFacade';
describe('ReactRouterFacade', () => {
    const history = createMemoryHistory();
    const context = {
        history: history,
    };
    const reduxFacade = {
        store: configureStore()({}),
    };
    const configStore = {
        evaluateConfig: jest.fn(() => ({
            router: {
                static: {
                    childRoutes: [
                        { path: 'home' },
                        {
                            path: 'redirect',
                            onEnter(nextState, replace) {
                                replace('/home');
                            },
                        },
                    ],
                    path: '/',
                },
            },
        })),
    };
    it('throws when render props are not yet computed', () => {
        const routerFacade = new ReactRouterFacade(context, reduxFacade, configStore);
        expect(() => routerFacade.renderProps).toThrow();
    });
    pit('initialize the facade', () => __awaiter(this, void 0, void 0, function* () {
        history.replace('/home');
        const routerFacade = new ReactRouterFacade(context, reduxFacade, configStore);
        const renderProps = yield routerFacade.initialize();
        expect(renderProps).toBeTruthy();
        expect(renderProps.location.pathname).toEqual('/home');
        expect(routerFacade.renderProps).toEqual(renderProps);
    }));
    pit('redirect to another route', () => __awaiter(this, void 0, void 0, function* () {
        history.replace('/redirect');
        const routerFacade = new ReactRouterFacade(context, reduxFacade, configStore);
        const renderProps = yield routerFacade.resolveRoute();
        expect(renderProps).toBeTruthy();
        expect(renderProps.location.pathname).toEqual('/home');
    }));
    pit('throws an error when nothing match', () => __awaiter(this, void 0, void 0, function* () {
        history.replace('/error');
        const routerFacade = new ReactRouterFacade(context, reduxFacade, configStore);
        let error;
        try {
            yield routerFacade.resolveRoute();
        }
        catch (e) {
            error = e;
        }
        finally {
            expect(error.message).toEqual('Error in react-router, too much try');
        }
    }));
});
//# sourceMappingURL=ReactRouterFacade-test.js.map