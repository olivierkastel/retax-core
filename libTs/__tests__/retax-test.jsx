var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
describe('Retax Core', () => {
    function counterReducer(state = 0, action) {
        switch (action.type) {
            case 'INC':
                return state + 1;
            default:
                return state;
        }
    }
    const retaxConfig = {
        lifecycle: undefined,
        react: {
            appendChild: undefined,
        },
        router: {
            static: (<Route path="/">
          <Route path="home"/>
          <Route path="about"/>
        </Route>),
        },
        store: {
            reducers: {
                counter: counterReducer,
            },
        },
    };
    pit('build a retax app', () => __awaiter(this, void 0, void 0, function* () {
        // configure history
        const history = createMemoryHistory();
        const location = history.createLocation('/home');
        history.replace(location);
        // create IOC kernel
        const inversifyKernelFacade = new InversifyKernelFacade();
        inversifyKernelFacade.loadKernelModules([
            commonModule,
            clientModule,
            contextModuleFactory({ history, retaxConfig }),
            lifecycleModuleFactory(retaxConfig.lifecycle),
        ]);
        // build the app
        const mediator = inversifyKernelFacade.getService(MEDIATOR);
        const app = yield mediator.run(inversifyKernelFacade);
        expect(app.type).toEqual(RetaxProvider);
        const wrapper = shallow(app);
        expect(wrapper).toBeTruthy();
    }));
});
//# sourceMappingURL=retax-test.jsx.map