jest.disableAutomock();
import * as React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { RouterContext } from 'react-router';
RouterContext.propTypes = undefined;
import ServerBuilder from '../ServerBuilder';
import RetaxProvider from '../../components/Retax/RetaxProvider';
import RetaxProviderComponent from '../../components/Retax/RetaxProvider';
import InverisfyKernelFacade from '../../inversifyKernelFacade/InversifyKernelFacade';
describe('ServerBuilder', function () {
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
        var builder = new ServerBuilder(configStore, RetaxProviderComponent, reduxFacade, routerFacade);
        var app = builder.build(kernelFacade);
        expect(app.type).toEqual(RetaxProvider);
        var wrapper = shallow(app);
        var reduxProvider = wrapper.find('Provider');
        var reactRouter = wrapper.find('RouterContext');
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
        var builder = new ServerBuilder(configStore, RetaxProviderComponent, reduxFacade, routerFacade);
        var app = builder.build(kernelFacade);
        var wrapper = shallow(app);
        var children = wrapper.find('#the-children');
        expect(children.text()).toEqual('Hello World!');
    });
});
//# sourceMappingURL=ServerBuilder-test.js.map
