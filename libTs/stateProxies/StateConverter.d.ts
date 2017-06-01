import { IStateConverter, IImmutableState } from './interfaces';
/**
 * Feature inheritance. Not realy good practice...
 */
declare abstract class AStateConverter implements IStateConverter {
    convertStateToImmutable<S extends IImmutableState>(object?: Object, nonImmutableKeys?: string[]): S;
}
export default AStateConverter;
