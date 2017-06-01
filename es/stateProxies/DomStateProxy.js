var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = this && this.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
import { injectable, inject } from 'inversify';
import AStateConverter from './StateConverter';
import { INITIAL_STATE_KEY } from '../constants';
import { RETAX_CONFIG_STORE } from '../inversify/identifiers';
var DomStateProxy = function (_AStateConverter) {
    _inherits(DomStateProxy, _AStateConverter);

    function DomStateProxy(_retaxConfigStore) {
        _classCallCheck(this, DomStateProxy);

        var _this = _possibleConstructorReturn(this, (DomStateProxy.__proto__ || Object.getPrototypeOf(DomStateProxy)).call(this));

        _this._retaxConfigStore = _retaxConfigStore;
        return _this;
    }

    _createClass(DomStateProxy, [{
        key: "read",
        value: function read() {
            var nonImmutableKeys = this._retaxConfigStore.config.store.nonImmutableKeys;

            var serverState = window[INITIAL_STATE_KEY];
            var immutableState = this.convertStateToImmutable(serverState, nonImmutableKeys);
            return immutableState;
        }
    }]);

    return DomStateProxy;
}(AStateConverter);
DomStateProxy = __decorate([injectable(), __param(0, inject(RETAX_CONFIG_STORE)), __metadata('design:paramtypes', [Object])], DomStateProxy);
export default DomStateProxy;
//# sourceMappingURL=DomStateProxy.js.map
