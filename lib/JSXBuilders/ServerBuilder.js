"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _inversify = require("inversify");

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _inversify2 = require("../inversify");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};

var ServerBuilder = function () {
    function ServerBuilder(_retaxConfigStore, RetaxProviderComponent, _reduxFacade, _routerFacade) {
        _classCallCheck(this, ServerBuilder);

        this._retaxConfigStore = _retaxConfigStore;
        this.RetaxProviderComponent = RetaxProviderComponent;
        this._reduxFacade = _reduxFacade;
        this._routerFacade = _routerFacade;
    }

    _createClass(ServerBuilder, [{
        key: "build",
        value: function build(kernel) {
            var RetaxProviderComponent = this.RetaxProviderComponent;
            var appendChild = this._retaxConfigStore.config.react.appendChild;
            var store = this._reduxFacade.store;
            var renderProps = this._routerFacade.renderProps;

            return React.createElement(
                RetaxProviderComponent,
                { kernel: kernel },
                React.createElement(
                    _reactRedux.Provider,
                    { store: store, key: "provider" },
                    React.createElement(
                        "div",
                        { className: "flex layout vertical" },
                        React.createElement(_reactRouter.RouterContext, renderProps),
                        appendChild && React.Children.only(appendChild)
                    )
                )
            );
        }
    }]);

    return ServerBuilder;
}();
ServerBuilder = __decorate([(0, _inversify.injectable)(), __param(0, (0, _inversify.inject)(_inversify2.RETAX_CONFIG_STORE)), __param(1, (0, _inversify.inject)(_inversify2.RETAX_PROVIDER_COMPONENT)), __param(2, (0, _inversify.inject)(_inversify2.REDUX_FACADE)), __param(3, (0, _inversify.inject)(_inversify2.REACT_ROUTER_FACADE)), __metadata('design:paramtypes', [Object, Object, Object, Object])], ServerBuilder);
exports.default = ServerBuilder;
module.exports = exports['default'];
//# sourceMappingURL=ServerBuilder.js.map
