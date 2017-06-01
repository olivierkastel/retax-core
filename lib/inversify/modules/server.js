'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inversify = require('inversify');

var _cookieProxies = require('../../cookieProxies');

var _JSXBuilders = require('../../JSXBuilders');

var _stateProxies = require('../../stateProxies');

var _configStores = require('../../configStores');

var _identifiers = require('../identifiers');

exports.default = new _inversify.KernelModule(function (bind) {
    bind(_identifiers.RETAX_CONFIG_STORE).to(_configStores.RequestRetaxConfigStore).inSingletonScope();
    bind(_identifiers.COOKIE_PROXY).to(_cookieProxies.RequestCookieProxy).inSingletonScope();
    bind(_identifiers.STATE_PROXY).to(_stateProxies.RequestStateProxy).inSingletonScope();
    bind(_identifiers.JSX_BUILDER).to(_JSXBuilders.ServerBuilder);
});
module.exports = exports['default'];
//# sourceMappingURL=server.js.map
