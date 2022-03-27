//interface => perjanjian/kontrak semua property/method yg ada di interface wajib di impementasi

interface Android13 {
  name: string;
  menu(): void;
  home(): void;
  back(): void;
}

class Samsung13 implements Android13 {
  constructor(public name: string) {}
  menu(): void {
    console.log(`${this.name}: menu ditekan`);
  }
  home(): void {
    console.log(`${this.name}: home ditekan`);
  }
  back(): void {
    console.log(`${this.name}: back ditekan`);
  }
}

class AndroGame {
  constructor(private phone: Android13) {
    //cuma bisa android
  }
  back() {
    console.log(`keluar game`);
    this.phone.back();
  }
}

const s8 = new Samsung13("s8");
const popGame = new AndroGame(s8);

popGame.back();
