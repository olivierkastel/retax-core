import { injectable } from 'inversify';
import * as Cookie from 'js-cookie';

import { ICookieProxy } from './interfaces';
import CookieProxy from './CookieProxy';

import { COOKIE_AUTH_TOKEN_KEY } from '../constants';

@injectable()
export default class DomCookieProxy extends CookieProxy implements ICookieProxy {
  public deleteAuthToken(): void {
    console.log('deleteAuthToken1');
    Cookie.remove(COOKIE_AUTH_TOKEN_KEY);
  }

  protected _setAuthToken(token: string): void {
    if (!token) return;
    console.log('________cookie1_______');
    console.log(this._readAuthToken());
    console.log(token);
    if (this._readAuthToken() === undefined) {
      console.log('Set cookie');
      Cookie.set(COOKIE_AUTH_TOKEN_KEY, token, { domain: '.archer-app.com' });
    } else {
      console.log('Set nothing');
    }
  }

  protected _readAuthToken(): string {
    console.log('_readAuthToken1');
    return Cookie.get(COOKIE_AUTH_TOKEN_KEY);
  }
}
