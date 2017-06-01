import { ICookieProxy } from './interfaces';
import CookieProxy from './CookieProxy';
import { IContext } from '../context';
export default class RequestCookieProxy extends CookieProxy implements ICookieProxy {
    private _context;
    constructor(_context: IContext);
    deleteAuthToken(): void;
    protected _setAuthToken(token: string): void;
    protected _readAuthToken(): string;
}
