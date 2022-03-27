//constructor => method yg pertama kali dipanggil apabila object dibuat
class Hewan2 {
  constructor() {
    console.log(`object dibuat`);
  }
}

const sapi = new Hewan2();

class Hewan21 {
  constructor(public nama: string, public kaki: number) {} //lebih singkat
}

const sap1 = new Hewan21("sapi", 4);
