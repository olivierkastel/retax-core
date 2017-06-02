import { injectable } from 'inversify';
import * as Cookie from 'js-cookie';

import { ICookieProxy } from './interfaces';
import CookieProxy from './CookieProxy';

import { COOKIE_AUTH_TOKEN_KEY } from '../constants';

@injectable()
export default class DomCookieProxy extends CookieProxy implements ICookieProxy {
  public deleteAuthToken(): void {
    console.log('deleteAuthToken : we delete the cookie');
    Cookie.remove(COOKIE_AUTH_TOKEN_KEY);
  }

  protected _setAuthToken(token: string): void {
    if (!token) return;
    if (this._readAuthToken() === undefined) {
      console.log('_readAuthToken is undefined : we set the cookie');
      Cookie.set(COOKIE_AUTH_TOKEN_KEY, token);
    }
  }

  protected _readAuthToken(): string {
    console.log('_readAuthToken : we read the cookie');
    return Cookie.get(COOKIE_AUTH_TOKEN_KEY);
  }
}
