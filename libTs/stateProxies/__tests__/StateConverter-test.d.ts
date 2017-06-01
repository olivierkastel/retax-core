import { Collection } from 'immutable';
export interface IState {
    routing: {
        someProps: boolean;
    };
    session: Collection<string, string>;
    user: Collection<string, string>;
}
