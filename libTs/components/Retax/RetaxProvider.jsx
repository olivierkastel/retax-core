import * as React from 'react';
import { InversifyKernelFacade } from '../../inversifyKernelFacade';
export default class RetaxProvider extends React.Component {
    getChildContext() {
        return {
            kernel: this.props.kernel,
        };
    }
    render() {
        return React.Children.only(this.props.children);
    }
}
RetaxProvider.propTypes = {
    kernel: React.PropTypes.instanceOf(InversifyKernelFacade).isRequired,
};
RetaxProvider.childContextTypes = {
    kernel: React.PropTypes.instanceOf(InversifyKernelFacade),
};
//# sourceMappingURL=RetaxProvider.jsx.map