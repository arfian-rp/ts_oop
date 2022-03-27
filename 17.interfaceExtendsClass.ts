//interface extends class
class Animal17 {
  constructor(public name: string) {}
}

interface IShark extends Animal17 {
  swim(): void;
}

class Shark17 implements IShark {
  constructor(public name: string) {}
  swim(): void {
    console.log(`berenang`);
  }
}
