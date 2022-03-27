//interface inheritance

interface Vehicle16 {
  name: string;
  wheels: number;
}

interface ICar16 extends Vehicle16 {
  doors: number;
}

class Civic implements ICar16 {
  name = "Civic";
  wheels = 4;
  doors = 2;
}
