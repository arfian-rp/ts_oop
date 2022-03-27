//inheritance
class Hewan4 {
  bernafas() {
    console.log(`Hewan bernafas`);
  }
}
class Burung1 extends Hewan4 {
  warna: string = "merah";
}
const burung2 = new Burung1();
burung2.bernafas();
console.info(burung2.warna);
