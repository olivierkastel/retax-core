jest.disableAutomock();
import * as React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ClientBuilder from '../ClientBuilder';
import RetaxProviderComponent from '../../components/Retax/RetaxProvider';
import InverisfyKernelFacade from '../../inversifyKernelFacade/InversifyKernelFacade';
describe('ClientBuilder', function () {
    var reduxFacade = {
        store: configureStore()({})
    };
    var routerFacade = {
        renderProps: {
            firstProp: '1234'
        }
    };
    it('build and render the app', function () {
        var configStore = {
            config: {
                react: {
                    appendChild: undefined
                }
            }
        };
        var kernelFacade = new InverisfyKernelFacade();
        var builder = new ClientBuilder(configStore, RetaxProviderComponent, reduxFacade, routerFacade);
        var app = builder.build(kernelFacade);
        expect(app.type).toEqual(RetaxProviderComponent);
        var wrapper = shallow(app);
        var reduxProvider = wrapper.find('Provider');
        var reactRouter = wrapper.find('Router');
        expect(reduxProvider.prop('store')).toEqual(reduxFacade.store);
        expect(reactRouter.prop('firstProp')).toEqual('1234');
    });
    it('build and render the app with a children', function () {
        var configStore = {
            config: {
                react: {
                    appendChild: React.createElement(
                        'div',
                        { id: 'the-children' },
                        'Hello World!'
                    )
                }
            }
        };
        var kernelFacade = new InverisfyKernelFacade();
        var builder = new ClientBuilder(configStore, RetaxProviderComponent, reduxFacade, routerFacade);
        var app = builder.build(kernelFacade);
        var wrapper = shallow(app);
        var children = wrapper.find('#the-children');
        expect(children.text()).toEqual('Hello World!');
    });
});
//# sourceMappingURL=ClientBuilder-test.js.map
