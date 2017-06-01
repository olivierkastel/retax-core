/**
 * These are the identifiers used with DI.
 * If you are using retax core without retax client or retax server, you HAVE to use these identifiers
 * or the DI won't work.
 */
// components
export var RETAX_PROVIDER_COMPONENT = Symbol('RetaxProviderComponent');
export var RETAX_CONSUMER_COMPONENT = Symbol('RetaxConsumerComponent');
export var COMPONENTS = { RETAX_PROVIDER_COMPONENT: RETAX_PROVIDER_COMPONENT, RETAX_CONSUMER_COMPONENT: RETAX_CONSUMER_COMPONENT };
// config stores
export var RETAX_CONFIG_STORE = Symbol('RetaxConfigStore');
// cookie proxies
export var COOKIE_PROXY = Symbol('CookieProxy');
// inversify kernel facade
export var INVERSIFY_KERNEL_FACADE = Symbol('InversifyKernelFacade');
// jsx builders
export var JSX_BUILDER = Symbol('JSXBuilder');
// react router facade
export var REACT_ROUTER_FACADE = Symbol('ReactRouterFacade');
// redux facade
export var REDUX_FACADE = Symbol('ReduxFacade');
// state proxies
export var STATE_PROXY = Symbol('StateProxy');
// bootstrapping context
export var CONTEXT = Symbol('Context');
// mediator
export var MEDIATOR = Symbol('Mediator');
// lifecycle
export var LIFECYCLE_ACTIONS_CREATOR = Symbol('LifecycleActionsCreator');
//# sourceMappingURL=identifiers.js.map
