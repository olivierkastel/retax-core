var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
jest.unmock('inversify');
jest.unmock('../Mediator');
import Mediator from '../Mediator';
describe('Mediator Flow', () => {
    const context = {
        history: {
            listen: jest.fn(),
        },
    };
    const cookieProxy = {
        authToken: '1234',
    };
    const stateProxy = {
        read: jest.fn(() => ({ initialState: true })),
    };
    const reduxFacade = {
        dispatch: jest.fn(),
        initialize: jest.fn(),
    };
    const routerFacade = {
        initialize: jest.fn(() => ({ renderProps: true })),
    };
    const lifecycleActions = {
        didResolveRoute: jest.fn(() => ({ didResolveRoute: true })),
        historyDidChanged: jest.fn(() => ({ historyDidChanged: true })),
        initializationComplete: jest.fn(() => ({ initializationComplete: true })),
        willResolveRoute: jest.fn(() => ({ willResolveRoute: true })),
    };
    const builder = {
        build: jest.fn(() => ({ theApp: true })),
    };
    const kernelFacade = {
        theKernel: true,
    };
    pit('mediates the flow of retax', () => __awaiter(this, void 0, void 0, function* () {
        const mediator = new Mediator(context, cookieProxy, stateProxy, reduxFacade, routerFacade, lifecycleActions, builder);
        const app = yield mediator.run(kernelFacade);
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
    }));
});
//# sourceMappingURL=Mediator-test.js.map