//interface optional property

interface Teacher14 {
  name: string;
  age: number;
  phone?: string; //? => optional
}

const tch: Teacher14 = {
  name: "Yudi",
  age: 40,
};
