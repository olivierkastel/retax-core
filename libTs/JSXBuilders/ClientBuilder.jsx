var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { injectable, inject } from 'inversify';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { RETAX_PROVIDER_COMPONENT, RETAX_CONFIG_STORE, REDUX_FACADE, REACT_ROUTER_FACADE } from '../inversify';
let ClientBuilder = class ClientBuilder {
    constructor(_retaxConfigStore, RetaxProviderComponent, _reduxFacade, _routerFacade) {
        this._retaxConfigStore = _retaxConfigStore;
        this.RetaxProviderComponent = RetaxProviderComponent;
        this._reduxFacade = _reduxFacade;
        this._routerFacade = _routerFacade;
    }
    build(kernel) {
        const { RetaxProviderComponent } = this;
        const { react: { appendChild } } = this._retaxConfigStore.config;
        const { store } = this._reduxFacade;
        const { renderProps } = this._routerFacade;
        return (<RetaxProviderComponent kernel={kernel}>
        <Provider store={store} key="provider">
          <div className="flex layout vertical">
            <Router {...renderProps}/>
            {appendChild && React.Children.only(appendChild)}
          </div>
        </Provider>
      </RetaxProviderComponent>);
    }
};
ClientBuilder = __decorate([
    injectable(),
    __param(0, inject(RETAX_CONFIG_STORE)),
    __param(1, inject(RETAX_PROVIDER_COMPONENT)),
    __param(2, inject(REDUX_FACADE)),
    __param(3, inject(REACT_ROUTER_FACADE)), 
    __metadata('design:paramtypes', [Object, Object, Object, Object])
], ClientBuilder);
export default ClientBuilder;
//# sourceMappingURL=ClientBuilder.jsx.map