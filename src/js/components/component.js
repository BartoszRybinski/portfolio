export default class Component {
  constructor() {
    this.text = "Text";
  }

  init() {
    this.method();
  }

  method() {
      console.log(this.text);
  }
}
