import { ICookieProxy } from './interfaces';
import CookieProxy from './CookieProxy';
export default class DomCookieProxy extends CookieProxy implements ICookieProxy {
    deleteAuthToken(): void;
    protected _setAuthToken(token: string): void;
    protected _readAuthToken(): string;
}
