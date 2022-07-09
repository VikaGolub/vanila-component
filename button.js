export { Button };

class Button {
  constructor(text, { size, variant, modifier }) {
    Object.assign(this, { text, size, variant, modifier });
  }

  render() {
    const { text, size, variant, modifier } = this;

    this.el = document.createElement("button");
    this.el.classList.add(size, variant);
    if (modifier) {
      this.el.classList.add(modifier);
    }

    this.el.innerText = this.text;

    return this.el;
  }
}
