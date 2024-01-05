/* eslint-disable no-underscore-dangle */
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

   set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a String');
    }
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`
  }
}
