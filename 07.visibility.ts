//visibility => membatasi akses property / method
/*
public => bisa diakses dimana saja (default)
protected => hanya bisa diakses di class sendiri dan turunanya
private => hanya bisa diakses di class sendiri
*/

class Mobil7 {
  constructor(private merk: string) {}
  protected getMerkMobil(): string {
    return this.merk;
  }
}
class Avanza7 extends Mobil7 {
  constructor() {
    super("Avanza");
  }
  getMerk(): string {
    return `Merk mobil ini: ${super.getMerkMobil()}`;
  }
}

const car = new Avanza7();
// console.info(car.merk); //error karena private
console.info(car.getMerk());
