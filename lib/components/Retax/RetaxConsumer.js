'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _inversifyKernelFacade = require('../../inversifyKernelFacade');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RetaxConsumer = function (_React$Component) {
    _inherits(RetaxConsumer, _React$Component);

    function RetaxConsumer() {
        _classCallCheck(this, RetaxConsumer);

        return _possibleConstructorReturn(this, (RetaxConsumer.__proto__ || Object.getPrototypeOf(RetaxConsumer)).apply(this, arguments));
    }

    return RetaxConsumer;
}(React.Component);

RetaxConsumer.contextTypes = {
    kernel: React.PropTypes.instanceOf(_inversifyKernelFacade.InversifyKernelFacade)
};
exports.default = RetaxConsumer;
module.exports = exports['default'];
//# sourceMappingURL=RetaxConsumer.js.map
