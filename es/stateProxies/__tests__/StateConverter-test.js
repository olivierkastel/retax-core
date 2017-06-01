function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

jest.unmock('../StateConverter');
import StateConverter from '../StateConverter';

var Consumer = function (_StateConverter) {
    _inherits(Consumer, _StateConverter);

    function Consumer() {
        _classCallCheck(this, Consumer);

        return _possibleConstructorReturn(this, (Consumer.__proto__ || Object.getPrototypeOf(Consumer)).apply(this, arguments));
    }

    return Consumer;
}(StateConverter);

describe('StateConverter', function () {
    var converter = void 0;
    beforeEach(function () {
        converter = new Consumer();
    });
    it('converts an object values to immutable skipping some keys', function () {
        var res = converter.convertStateToImmutable({
            routing: {
                someProps: true
            },
            session: {
                token: '123456789'
            },
            user: {
                name: 'Thomas'
            }
        }, ['routing']);
        expect(res.routing).toEqual({
            someProps: true
        });
        expect(res.session.toJS()).toEqual({
            token: '123456789'
        });
        expect(res.user.toJS()).toEqual({
            name: 'Thomas'
        });
    });
    it('converts undefined to an empty object', function () {
        var res = converter.convertStateToImmutable();
        expect(res).toEqual({});
    });
});
//# sourceMappingURL=StateConverter-test.js.map
