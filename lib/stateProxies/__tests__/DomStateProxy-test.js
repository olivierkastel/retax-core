'use strict';

var _constants = require('../../constants');

var _DomStateProxy = require('../DomStateProxy');

var _DomStateProxy2 = _interopRequireDefault(_DomStateProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock('inversify');
jest.unmock('../../constants');
jest.unmock('../../constants/internalConfig');
jest.unmock('../DomStateProxy');

describe('DomStateProxy', function () {
    var retaxConfigStore = {
        config: {
            store: {
                nonImmutableKeys: ['routing']
            }
        }
    };
    it('reads the initial state and convert it to an immutable object', function () {
        var proxy = new _DomStateProxy2.default(retaxConfigStore);
        window[_constants.INITIAL_STATE_KEY] = {
            app: {
                here: true
            }
        };
        proxy.read();
        expect(proxy.convertStateToImmutable).toBeCalledWith({
            app: {
                here: true
            }
        }, ['routing']);
    });
});
//# sourceMappingURL=DomStateProxy-test.js.map
