export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return (/^[a-z]+[[a-z|\-_]*[[\w|-]{0,3}]*[[a-z|\-_]*[a-z]$/i.test(this.name));
  }
}