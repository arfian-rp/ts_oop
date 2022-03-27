//getter setter
class Product9 {
  private _price = 0;
  private disc = 0.05;

  get price() {
    return this._price - this._price * this.disc;
  }
  set price(value) {
    this._price = value;
  }
}

const pangsit = new Product9();
pangsit.price = 12_000;
console.info(pangsit.price);
