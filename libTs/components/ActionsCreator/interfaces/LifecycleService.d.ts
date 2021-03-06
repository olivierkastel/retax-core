import { Store } from 'redux';
import { IActionsCreatorService, IActionsCreatorServiceConstructor } from './ActionsCreator';
import { IUserService } from '../../Service';
import { IRouterContextProps } from '../../../reactRouter';
import { IAction } from 'retax-utils';
/**
 * A service used for lifecycle managment
 */
export interface ILifecycleService extends IActionsCreatorService {
    willResolveRoute?(hasToken: boolean): IAction<any, any>;
    didResolveRoute?(renderProps: IRouterContextProps): IAction<any, any>;
    historyDidChanged?(location: HistoryModule.Location, renderProps: IRouterContextProps): IAction<any, any>;
    initializationComplete?(store: Store<any>): void;
}
/**
 * A service constructor used for lifecycle managment
 */
export interface ILifecycleServiceConstructor extends IActionsCreatorServiceConstructor {
    new (apis?: IUserService[], actionsCreators?: IUserService[]): ILifecycleService;
}
