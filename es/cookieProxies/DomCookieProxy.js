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
import { injectable } from 'inversify';
import * as Cookie from 'js-cookie';
import CookieProxy from './CookieProxy';
import { COOKIE_AUTH_TOKEN_KEY } from '../constants';
var DomCookieProxy = function (_CookieProxy) {
    _inherits(DomCookieProxy, _CookieProxy);

    function DomCookieProxy() {
        _classCallCheck(this, DomCookieProxy);

        return _possibleConstructorReturn(this, (DomCookieProxy.__proto__ || Object.getPrototypeOf(DomCookieProxy)).apply(this, arguments));
    }

    _createClass(DomCookieProxy, [{
        key: "deleteAuthToken",
        value: function deleteAuthToken() {
            console.log('deleteAuthToken : we delete the cookie');
            Cookie.remove(COOKIE_AUTH_TOKEN_KEY);
        }
    }, {
        key: "_setAuthToken",
        value: function _setAuthToken(token) {
            if (!token) return;
            if (this._readAuthToken() === undefined) {
                console.log('_readAuthToken is undefined : we set the cookie');
                Cookie.set(COOKIE_AUTH_TOKEN_KEY, token);
            }
        }
    }, {
        key: "_readAuthToken",
        value: function _readAuthToken() {
            console.log('_readAuthToken : we read the cookie');
            return Cookie.get(COOKIE_AUTH_TOKEN_KEY);
        }
    }]);

    return DomCookieProxy;
}(CookieProxy);
DomCookieProxy = __decorate([injectable(), __metadata('design:paramtypes', [])], DomCookieProxy);
export default DomCookieProxy;
//# sourceMappingURL=DomCookieProxy.js.map
