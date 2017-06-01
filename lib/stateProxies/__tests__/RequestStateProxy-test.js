'use strict';

var _RequestStateProxy = require('../RequestStateProxy');

var _RequestStateProxy2 = _interopRequireDefault(_RequestStateProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock('inversify');
jest.unmock('../RequestStateProxy');

describe('RequestStateProxy', function () {
    it('reads the initial state and convert it to an immutable object', function () {
        var proxy = new _RequestStateProxy2.default();
        var res = proxy.read();
        expect(res).toEqual({});
    });
});
//# sourceMappingURL=RequestStateProxy-test.js.map
