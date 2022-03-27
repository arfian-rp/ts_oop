//return type
class Burung11 {
  private kaki: number = 2;

  getKaki(): number {
    return this.kaki;
  }

  terbang(): void {
    console.log(`burung sedang terbang`);
  }

  async makan(): Promise<string> {
    return `lagi makan nih guys`;
  }
}

const elang = new Burung11();
console.info(elang.getKaki());
elang.terbang();
elang.makan().then((e) => console.info(e));
