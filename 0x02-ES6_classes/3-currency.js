export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(ncode) {
    if (typeof ncode !== 'string') {
      throw new TypeError('Code must be a String');
    }
    this._code = ncode;
  }
}
