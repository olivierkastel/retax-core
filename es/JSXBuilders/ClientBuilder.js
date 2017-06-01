var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = this && this.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
import { injectable, inject } from 'inversify';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { RETAX_PROVIDER_COMPONENT, RETAX_CONFIG_STORE, REDUX_FACADE, REACT_ROUTER_FACADE } from '../inversify';
var ClientBuilder = function () {
    function ClientBuilder(_retaxConfigStore, RetaxProviderComponent, _reduxFacade, _routerFacade) {
        _classCallCheck(this, ClientBuilder);

        this._retaxConfigStore = _retaxConfigStore;
        this.RetaxProviderComponent = RetaxProviderComponent;
        this._reduxFacade = _reduxFacade;
        this._routerFacade = _routerFacade;
    }

    _createClass(ClientBuilder, [{
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
                    Provider,
                    { store: store, key: "provider" },
                    React.createElement(
                        "div",
                        { className: "flex layout vertical" },
                        React.createElement(Router, renderProps),
                        appendChild && React.Children.only(appendChild)
                    )
                )
            );
        }
    }]);

    return ClientBuilder;
}();
ClientBuilder = __decorate([injectable(), __param(0, inject(RETAX_CONFIG_STORE)), __param(1, inject(RETAX_PROVIDER_COMPONENT)), __param(2, inject(REDUX_FACADE)), __param(3, inject(REACT_ROUTER_FACADE)), __metadata('design:paramtypes', [Object, Object, Object, Object])], ClientBuilder);
export default ClientBuilder;
//# sourceMappingURL=ClientBuilder.js.map
