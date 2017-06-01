'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.contextModuleFactory = contextModuleFactory;
exports.lifecycleModuleFactory = lifecycleModuleFactory;

var _inversify = require('inversify');

var _components = require('../../components');

var _reactRouter = require('../../reactRouter');

var _redux = require('../../redux');

var _mediator = require('../../mediator');

var _identifiers = require('../identifiers');

exports.default = new _inversify.KernelModule(function (bind) {
    bind(_identifiers.MEDIATOR).to(_mediator.RetaxMediator).inSingletonScope();
    bind(_identifiers.REACT_ROUTER_FACADE).to(_reactRouter.ReactRouterFacade).inSingletonScope();
    bind(_identifiers.REDUX_FACADE).to(_redux.ReduxFacade).inSingletonScope();
    bind(_identifiers.COMPONENTS.RETAX_PROVIDER_COMPONENT).toConstructor(_components.RetaxProvider);
});
function contextModuleFactory(context) {
    return new _inversify.KernelModule(function (bind) {
        bind(_identifiers.CONTEXT).toConstantValue(context);
    });
}
function lifecycleModuleFactory(LifecycleActionsCreator) {
    return new _inversify.KernelModule(function (bind) {
        if (LifecycleActionsCreator) {
            bind(_identifiers.LIFECYCLE_ACTIONS_CREATOR).to(LifecycleActionsCreator);
        } else {
            bind(_identifiers.LIFECYCLE_ACTIONS_CREATOR).toConstantValue(undefined);
        }
    });
}
//# sourceMappingURL=common.js.map
