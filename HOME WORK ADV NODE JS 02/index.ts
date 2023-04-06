console.log("test");

enum Gender {
  Male = "male",
  Female = "female",
}

interface Person {
  name: string;
  age: number;
  gender: Gender;
}

const filterByProperty = (
  people: Person[],
  property: string,
  value: string | number
): Person[] => {
  return people.filter((person) => person[property] === value);
};

const personOne: Person = {
  name: "Pavel Kocev",
  age: 20,
  gender: Gender.Male,
};
const perosnTwo: Person = {
  name: "Ana Trajkova",
  age: 34,
  gender: Gender.Female,
};

console.log(filterByProperty([personOne, perosnTwo], "age", 34));
