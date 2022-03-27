//readonly

interface Student15 {
  readonly name: string;
  readonly age: number;
}

const putra: Student15 = {
  name: "Putra",
  age: 10,
};

// putra.name = 'yudi' //error
