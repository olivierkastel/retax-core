jest.disableAutomock();
import { browserHistory } from 'react-router';
import { fromJS } from 'immutable';
import ReduxFacade from '../ReduxFacade';
describe('ReduxFacade Flow', function () {
    var context = {
        history: browserHistory
    };
    var cookieProxy = {
        authToken: '1234'
    };
    var configStore = {
        config: {
            store: {
                middlewares: [],
                reducers: {},
                storeEnhancers: []
            }
        }
    };
    it('throws an error when the store is undefined', function () {
        var facade = new ReduxFacade(configStore, cookieProxy, context);
        expect(function () {
            return facade.store;
        }).toThrow();
    });
    it('initializes the store and retrieve the auth token', function () {
        var facade = new ReduxFacade(configStore, cookieProxy, context);
        var store = facade.initialize({});
        expect(facade.store).toEqual(store);
        expect(facade.getAuthToken()).toEqual('1234');
    });
    it('initializes the store with an initiale state', function () {
        var facade = new ReduxFacade(configStore, cookieProxy, context);
        facade.initialize({
            retax: fromJS({ here: true })
        });
        expect(facade.store.getState().retax.toJS()).toEqual({
            authToken: '1234',
            here: true
        });
    });
    it('set the auth token', function () {
        var facade = new ReduxFacade(configStore, cookieProxy, context);
        facade.initialize({});
        facade.setAuthToken('4321');
        expect(facade.getAuthToken()).toEqual('4321');
    });
});
//# sourceMappingURL=ReduxFacade-test.js.map
