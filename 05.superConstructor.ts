//super constructor => memanggil constructor milik parent
class Parent1 {
  constructor(public name: string) {}
}

class Child1 extends Parent1 {
  constructor(name: string) {
    super(name); //memanggil constructor parent
  }
}

const obj1 = new Child1("Yudi");
console.info(obj1.name);
