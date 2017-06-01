declare abstract class CookieProxy {
    authToken: string;
    protected abstract _setAuthToken(token: string): void;
    protected abstract _readAuthToken(): string;
}
export default CookieProxy;
