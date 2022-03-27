//static
class Ayam10 {
  static kaki = 2; //nempel ke class
  static jumlahAyam = 0;
  constructor() {
    Ayam10.jumlahAyam += 1;
  }
  static jalan() {
    console.log(`ayam sedang berjalan dengan ${this.kaki} kaki`); //bisa pakai this karena samasama static
  }
  getKaki() {
    //   return this.kaki //tidak bisa akses dengan this karena beda dimensi (bukan static)
    return Ayam10.kaki;
  }
}

console.info(Ayam10.jumlahAyam);
const obj = new Ayam10();

console.info(Ayam10.kaki);
console.info(obj.getKaki());
Ayam10.jalan();

const obj1 = new Ayam10();
const obj2 = new Ayam10();
const obj3 = new Ayam10();
const obj4 = new Ayam10();
const obj5 = new Ayam10();
const obj6 = new Ayam10();
const obj7 = new Ayam10();
const obj8 = new Ayam10();
console.info(Ayam10.jumlahAyam);
