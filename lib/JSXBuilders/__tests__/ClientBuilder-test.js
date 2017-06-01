'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _enzyme = require('enzyme');

var _reduxMockStore = require('redux-mock-store');

var _reduxMockStore2 = _interopRequireDefault(_reduxMockStore);

var _ClientBuilder = require('../ClientBuilder');

var _ClientBuilder2 = _interopRequireDefault(_ClientBuilder);

var _RetaxProvider = require('../../components/Retax/RetaxProvider');

var _RetaxProvider2 = _interopRequireDefault(_RetaxProvider);

var _InversifyKernelFacade = require('../../inversifyKernelFacade/InversifyKernelFacade');

var _InversifyKernelFacade2 = _interopRequireDefault(_InversifyKernelFacade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

jest.disableAutomock();

describe('ClientBuilder', function () {
    var reduxFacade = {
        store: (0, _reduxMockStore2.default)()({})
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
        var kernelFacade = new _InversifyKernelFacade2.default();
        var builder = new _ClientBuilder2.default(configStore, _RetaxProvider2.default, reduxFacade, routerFacade);
        var app = builder.build(kernelFacade);
        expect(app.type).toEqual(_RetaxProvider2.default);
        var wrapper = (0, _enzyme.shallow)(app);
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
        var kernelFacade = new _InversifyKernelFacade2.default();
        var builder = new _ClientBuilder2.default(configStore, _RetaxProvider2.default, reduxFacade, routerFacade);
        var app = builder.build(kernelFacade);
        var wrapper = (0, _enzyme.shallow)(app);
        var children = wrapper.find('#the-children');
        expect(children.text()).toEqual('Hello World!');
    });
});
//# sourceMappingURL=ClientBuilder-test.js.map
