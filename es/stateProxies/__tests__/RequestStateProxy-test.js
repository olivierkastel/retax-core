jest.unmock('inversify');
jest.unmock('../RequestStateProxy');
import RequestStateProxy from '../RequestStateProxy';
describe('RequestStateProxy', function () {
    it('reads the initial state and convert it to an immutable object', function () {
        var proxy = new RequestStateProxy();
        var res = proxy.read();
        expect(res).toEqual({});
    });
});
//# sourceMappingURL=RequestStateProxy-test.js.map
