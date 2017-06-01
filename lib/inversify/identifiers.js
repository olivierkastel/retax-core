'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * These are the identifiers used with DI.
 * If you are using retax core without retax client or retax server, you HAVE to use these identifiers
 * or the DI won't work.
 */
// components
var RETAX_PROVIDER_COMPONENT = exports.RETAX_PROVIDER_COMPONENT = Symbol('RetaxProviderComponent');
var RETAX_CONSUMER_COMPONENT = exports.RETAX_CONSUMER_COMPONENT = Symbol('RetaxConsumerComponent');
var COMPONENTS = exports.COMPONENTS = { RETAX_PROVIDER_COMPONENT: RETAX_PROVIDER_COMPONENT, RETAX_CONSUMER_COMPONENT: RETAX_CONSUMER_COMPONENT };
// config stores
var RETAX_CONFIG_STORE = exports.RETAX_CONFIG_STORE = Symbol('RetaxConfigStore');
// cookie proxies
var COOKIE_PROXY = exports.COOKIE_PROXY = Symbol('CookieProxy');
// inversify kernel facade
var INVERSIFY_KERNEL_FACADE = exports.INVERSIFY_KERNEL_FACADE = Symbol('InversifyKernelFacade');
// jsx builders
var JSX_BUILDER = exports.JSX_BUILDER = Symbol('JSXBuilder');
// react router facade
var REACT_ROUTER_FACADE = exports.REACT_ROUTER_FACADE = Symbol('ReactRouterFacade');
// redux facade
var REDUX_FACADE = exports.REDUX_FACADE = Symbol('ReduxFacade');
// state proxies
var STATE_PROXY = exports.STATE_PROXY = Symbol('StateProxy');
// bootstrapping context
var CONTEXT = exports.CONTEXT = Symbol('Context');
// mediator
var MEDIATOR = exports.MEDIATOR = Symbol('Mediator');
// lifecycle
var LIFECYCLE_ACTIONS_CREATOR = exports.LIFECYCLE_ACTIONS_CREATOR = Symbol('LifecycleActionsCreator');
//# sourceMappingURL=identifiers.js.map
