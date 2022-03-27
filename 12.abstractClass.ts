//absract => tidak bisa diinstansiasi
abstract class Hewan12 {
  constructor(public name: string) {}

  makan(): void {
    console.log(`${this.name} sedang makan`);
  }

  abstract bergerak(): void;
}

class Kucing12 extends Hewan12 {
  constructor() {
    super("Kucing");
  }

  bergerak(): void {
    //wajib mengoverriding
    console.log(`berjalan`);
  }
}

// const h1=new Hewan12() //error
const puss = new Kucing12();
puss.makan();
puss.bergerak();
