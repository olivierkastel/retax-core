var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

jest.unmock('inversify');
jest.unmock('retax-utils');
jest.unmock('../RetaxConfigStore');
import RetaxConfigStore from '../RetaxConfigStore';
describe('RetaxConfigStore', function () {
    var Consumer = function (_RetaxConfigStore) {
        _inherits(Consumer, _RetaxConfigStore);

        function Consumer() {
            _classCallCheck(this, Consumer);

            return _possibleConstructorReturn(this, (Consumer.__proto__ || Object.getPrototypeOf(Consumer)).apply(this, arguments));
        }

        _createClass(Consumer, [{
            key: 'evaluateConfig',
            value: function evaluateConfig(store) {
                return store;
            }
        }]);

        return Consumer;
    }(RetaxConfigStore);

    it('defines the initial config', function () {
        var store = new Consumer({
            router: {
                dynamic: undefined
            }
        });
        expect(store.config).toEqual({
            api: {
                authHeaderName: 'auth_token',
                baseUrl: ''
            },
            client: {
                keepInitialState: false
            },
            lifecycle: undefined,
            react: {},
            router: {
                dynamic: undefined,
                static: {}
            },
            store: {
                initialState: {},
                middlewares: [],
                nonImmutableKeys: ['routing'],
                reducers: undefined,
                storeEnhancers: []
            }
        });
    });
});
//# sourceMappingURL=RetaxConfigStore-test.js.map
