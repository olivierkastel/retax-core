"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _inversify = require("inversify");

var _jsCookie = require("js-cookie");

var Cookie = _interopRequireWildcard(_jsCookie);

var _CookieProxy2 = require("./CookieProxy");

var _CookieProxy3 = _interopRequireDefault(_CookieProxy2);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

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
            Cookie.remove(_constants.COOKIE_AUTH_TOKEN_KEY);
        }
    }, {
        key: "_setAuthToken",
        value: function _setAuthToken(token) {
            if (!token) return;
            if (this._readAuthToken() === undefined) {
                console.log('_readAuthToken is undefined : we set the cookie');
                Cookie.set(_constants.COOKIE_AUTH_TOKEN_KEY, token);
            }
        }
    }, {
        key: "_readAuthToken",
        value: function _readAuthToken() {
            console.log('_readAuthToken : we read the cookie');
            return Cookie.get(_constants.COOKIE_AUTH_TOKEN_KEY);
        }
    }]);

    return DomCookieProxy;
}(_CookieProxy3.default);
DomCookieProxy = __decorate([(0, _inversify.injectable)(), __metadata('design:paramtypes', [])], DomCookieProxy);
exports.default = DomCookieProxy;
module.exports = exports['default'];
//# sourceMappingURL=DomCookieProxy.js.map
