//dependency injection
interface Store {
  name: string;
  profit: number;
  getName(): string;
  getProfit(): number;
}

class StoreA implements Store {
  name: string = "Store A";
  profit: number = 2.5;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class StoreB implements Store {
  name: string = "Store B";
  profit: number = 5;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class FashionProduct {
  store: Store;
  constructor(private name: string, private price: number, store: Store) {
    this.store = store;
  }

  sell(): void {
    console.log(`${this.name} harga jual adalah ${this.price + (this.price * this.store.getProfit()) / 100}`);
  }
}

const bedak = new FashionProduct("wedak", 10_000, new StoreA());
bedak.sell();

const hijab = new FashionProduct("jilbab", 10_000, new StoreB());
hijab.sell();
