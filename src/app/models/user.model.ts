export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _expirationDate: Date
  ) { }
  getToken() {
    if (!this._expirationDate || this._expirationDate < new Date()) {
      return null
    } return this._token
  }
}
