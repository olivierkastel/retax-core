jest.unmock('../StateConverter');
import StateConverter from '../StateConverter';
class Consumer extends StateConverter {
}
describe('StateConverter', () => {
    let converter;
    beforeEach(() => {
        converter = new Consumer();
    });
    it('converts an object values to immutable skipping some keys', () => {
        const res = converter.convertStateToImmutable({
            routing: {
                someProps: true,
            },
            session: {
                token: '123456789',
            },
            user: {
                name: 'Thomas',
            },
        }, ['routing']);
        expect(res.routing).toEqual({
            someProps: true,
        });
        expect(res.session.toJS()).toEqual({
            token: '123456789',
        });
        expect(res.user.toJS()).toEqual({
            name: 'Thomas',
        });
    });
    it('converts undefined to an empty object', () => {
        const res = converter.convertStateToImmutable();
        expect(res).toEqual({});
    });
});
//# sourceMappingURL=StateConverter-test.js.map