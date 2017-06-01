import { KernelModule } from 'inversify';
import { RequestCookieProxy } from '../../cookieProxies';
import { ServerBuilder } from '../../JSXBuilders';
import { RequestStateProxy } from '../../stateProxies';
import { RequestRetaxConfigStore } from '../../configStores';
import { RETAX_CONFIG_STORE, COOKIE_PROXY, JSX_BUILDER, STATE_PROXY } from '../identifiers';
export default new KernelModule((bind) => {
    bind(RETAX_CONFIG_STORE).to(RequestRetaxConfigStore).inSingletonScope();
    bind(COOKIE_PROXY).to(RequestCookieProxy).inSingletonScope();
    bind(STATE_PROXY).to(RequestStateProxy).inSingletonScope();
    bind(JSX_BUILDER).to(ServerBuilder);
});
//# sourceMappingURL=server.js.map