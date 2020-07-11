export default class Validator {
  validateUsername(name) {
    this.name = name;
    return (/^[a-zA-Z][a-zA-Z0-9\-_]+[a-zA-Z]$/.exec(this.name) !== null)
    && (!/[0-9]{4}/.test(this.name));
  }
}
