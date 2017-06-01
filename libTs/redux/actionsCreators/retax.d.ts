import { TSetAuthTokenPayload } from './interfaces';
import { IActionCreator, IAction } from 'retax-utils';
export declare function isSetAuthTokenAction(a: IAction<any, any>): a is IAction<TSetAuthTokenPayload, void>;
export declare function isRemoveAuthTokenAction(a: IAction<any, any>): a is IAction<void, void>;
export declare const setAuthToken: IActionCreator<TSetAuthTokenPayload, void>;
export declare const removeAuthToken: IActionCreator<void, void>;
