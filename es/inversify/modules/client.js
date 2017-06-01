import { KernelModule } from 'inversify';
import { DomCookieProxy } from '../../cookieProxies';
import { ClientBuilder } from '../../JSXBuilders';
import { DomStateProxy } from '../../stateProxies';
import { DomRetaxConfigStore } from '../../configStores';
import { RETAX_CONFIG_STORE, COOKIE_PROXY, JSX_BUILDER, STATE_PROXY } from '../identifiers';
export default new KernelModule(function (bind) {
    bind(RETAX_CONFIG_STORE).to(DomRetaxConfigStore).inSingletonScope();
    bind(COOKIE_PROXY).to(DomCookieProxy).inSingletonScope();
    bind(STATE_PROXY).to(DomStateProxy).inSingletonScope();
    bind(JSX_BUILDER).to(ClientBuilder);
});
//# sourceMappingURL=client.js.map
