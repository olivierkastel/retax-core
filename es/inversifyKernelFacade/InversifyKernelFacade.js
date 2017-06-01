var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
import { Kernel, injectable } from 'inversify';
var InversifyKernelFacade = function () {
    function InversifyKernelFacade() {
        _classCallCheck(this, InversifyKernelFacade);

        this._kernel = new Kernel();
        this._loadedUserModules = new Map();
    }

    _createClass(InversifyKernelFacade, [{
        key: "getService",
        value: function getService(serviceId) {
            return this._kernel.get(serviceId);
        }
    }, {
        key: "getAllServices",
        value: function getAllServices(serviceId) {
            return this._kernel.getAll(serviceId);
        }
    }, {
        key: "loadKernelModules",
        value: function loadKernelModules() {
            var _kernel;

            var modules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            (_kernel = this._kernel).load.apply(_kernel, _toConsumableArray(modules));
        }
    }, {
        key: "loadModules",
        value: function loadModules() {
            var _this = this;

            var modules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            modules.forEach(function (m) {
                if (!_this._loadedUserModules.get(m.serviceId)) {
                    _this._kernel.load(m.kernelModule);
                    _this._loadedUserModules.set(m.serviceId, true);
                }
            });
        }
    }, {
        key: "unloadModules",
        value: function unloadModules() {
            var _this2 = this;

            var modules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            modules.forEach(function (m) {
                if (_this2._loadedUserModules.get(m.serviceId)) {
                    _this2._kernel.unload(m.kernelModule);
                    _this2._loadedUserModules.set(m.serviceId, false);
                }
            });
        }
    }]);

    return InversifyKernelFacade;
}();
InversifyKernelFacade = __decorate([injectable(), __metadata('design:paramtypes', [])], InversifyKernelFacade);
export default InversifyKernelFacade;
//# sourceMappingURL=InversifyKernelFacade.js.map
