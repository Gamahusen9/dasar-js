// NUMBER 1
const numbers = [1, 2, 3, 4, 5];
const result1 = numbers.map((numbers) => numbers * 2);
// console.log(result1);


// NUMBER 2
const angka = [
{ id: 1, value: 5 },
{ id: 2, value: 12 },
{ id: 3, value: 8 },
{ id: 4, value: 15 },
];

const result2 = angka.filter((item) => item.value > 10);
// console.log(angka.id);

// NUMBER 3









// NUMBER 9
const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 32 },
{ name: 'Charlie', age: 28 },
{ name: 'Gama', age : 16},
{ name: 'Siti', age : 29}
];

const result = people.filter((result) => result.age < 30 && result.age >= 25  );

const totalAge = people.reduce((accumulator, person) => accumulator + person.age , 0);

// console.log("total dari semua orang yang berusia dibawah 30 dan diatas 25 adalah", result , "dan total semua umur dari people tersebut adalah: ", totalAge);




