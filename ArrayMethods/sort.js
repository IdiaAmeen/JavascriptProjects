const names = ["mario", "shaun", "chun-li", "yoshi", "luigi"];

names.sort();
console.log(names);

const scores = [10, 50, 20, 5, 35, 70, 45];
// scores.sort();
console.log(scores);

const players = [
  { name: "mario", score: "20" },
  { name: "luigi", score: "10" },
  { name: "chun-li", score: "50" },
  { name: "yoshi", score: "30" },
  { name: "shaun", score: "70" },
];

players.sort((a, b) => {
  if (a.score > b.score) {
    return -1;
  } else if (b.score > a.score) {
    return 1;
  } else return 0;
});

players.sort((a, b) => b.score - a.score);

scores.sort((a, b) => b - a);
scores.sort((a, b) => a - b);
console.log(scores);

const products = [
  { name: "gold star", price: 30 },
  { name: "green shell", price: 10 },
  { name: "red shell", price: 40 },
  { name: "banana skin", price: 5 },
  { name: "mushroom", price: 50 },
];

//Chaining Arrays//

// const filtered = products.filter(product => product.price > 20);

// const promos = filtered.map(product => {
//   return `the ${product.name} is ${product.price / 2} pounds`;
// });

// const promos = products
//   .filter((product) => product.price > 20)
//   .map((product) => `the ${product.name} is ${product.price / 2} pounds`);

// console.log(promos);

const promos = products
  .filter((product) => product.price > 20)
  .map((product) => `the ${product.name} is ${product.price / 2} pounds`);
console.log(promos);
