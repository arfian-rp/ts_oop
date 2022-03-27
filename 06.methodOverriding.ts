//method overriding => membuat ulang method yg ada di kelas parent
class Hewan6 {
  name: string = "";

  bernafas() {
    console.log(`sedang bernafas`);
  }
}
class Katak6 extends Hewan6 {
  bernafas() {
    console.log(`malas bernafas`);
  }
}

const kdok = new Katak6();
kdok.bernafas();
