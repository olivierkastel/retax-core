import * as React from 'react';
import { IRetaxProps, IRetaxChildContext } from './interfaces';
export default class RetaxProvider extends React.Component<IRetaxProps, void> {
    static propTypes: React.ValidationMap<any>;
    static childContextTypes: React.ValidationMap<any>;
    getChildContext(): IRetaxChildContext;
    render(): any;
}
