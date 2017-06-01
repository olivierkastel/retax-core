function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { ConfigStore } from 'retax-utils';
export var initialConfig = {
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
        static: {}
    },
    store: {
        initialState: {},
        middlewares: [],
        nonImmutableKeys: ['routing'],
        reducers: undefined,
        storeEnhancers: []
    }
};

var RetaxConfigStore = function (_ConfigStore) {
    _inherits(RetaxConfigStore, _ConfigStore);

    function RetaxConfigStore(userConfig) {
        _classCallCheck(this, RetaxConfigStore);

        var _this = _possibleConstructorReturn(this, (RetaxConfigStore.__proto__ || Object.getPrototypeOf(RetaxConfigStore)).call(this));

        _this.config = initialConfig;
        _this.mergeConfig(userConfig);
        return _this;
    }

    return RetaxConfigStore;
}(ConfigStore);

export default RetaxConfigStore;
//# sourceMappingURL=RetaxConfigStore.js.map
