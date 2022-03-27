// property dan method
class Hewan3 {
  nama: string;
  kaki: number;
  mamalia: boolean;

  constructor(p1: string = "", p2: number = 0, p3: boolean = false) {
    this.nama = p1;
    this.kaki = p2;
    this.mamalia = p3;
  }

  bernafas() {
    console.log(`hewan ${this.nama} sedang bernafas`);
  }
}

const ular = new Hewan3("ular", 0, false);
console.info(ular.nama);
ular.bernafas();
