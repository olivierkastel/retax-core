import * as React from 'react';
import { IRetaxChildContext } from './interfaces';
declare abstract class RetaxConsumer<P, S> extends React.Component<P, S> {
    static contextTypes: React.ValidationMap<any>;
    context: IRetaxChildContext;
}
export default RetaxConsumer;
