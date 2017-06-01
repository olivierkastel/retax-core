import { IStateProxy } from './interfaces';
import AStateConverter from './StateConverter';
export default class RequestStateProxy extends AStateConverter implements IStateProxy {
    constructor();
    read<S>(): S;
}
