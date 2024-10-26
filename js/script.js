"use strict";

////////////////////////////////////
// this keyword

// const narges = {
//   name: "Narges",
//   age: 20,
//   getInfo: function () {
//     console.log(this);

//     const printAge = () => {
//       console.log(this);
//     };

//     printAge();
//   },
// };

// narges.getInfo();

// function something() {
//   console.log(this);
// }

// something();

// console.log(this);

// const printAge = () => {
//   console.log(this);
// };

// printAge();

////////////////////////////////////
// this keyword on callback functions

// const button = document.querySelector(".btn");

// button.addEventListener("click", function () {
//   console.log(this);
//   console.log(this === button);
// });

// button.addEventListener("click", () => {
//   console.log(this);
//   console.log(this === button);
// });
// console.log(this);

/**
 * button.function () {
 * console.log(this);
 * }
 */

////////////////////////////////////
// primitive and reference

// let adelAge = 12;
// let abbasAge = adelAge;

// abbasAge = 16;

// console.log(adelAge);
// console.log(abbasAge);

// const ali = {
//   name: "Ali",
//   age: 20,
// };
// let maryam = ali;

// maryam = {
//   name: "Maryam",
//   age: 22,
// };

// console.log(ali);
// console.log(maryam);

//   {
//     name: "Maryam",
//     age: 20,
//   }

////////////////////////////////////
// destructuring: Array, Object

// const users = ["Saeed", "Hossein", "Cena"];

// const [user1, , user2] = users;

// console.log(user1);
// console.log(user2);

////////////////////
// const shiva = {
//   firstName: "Shiva",
//   age: 18,
//   friends: ["Narges", "Negin", "Hossein"],
// };

// const {
//   firstName,
//   age: shivaAge,
//   friends: [friend1, , friend2],
// } = shiva;
// let age = shiva.age;

// console.log(age);

// shivaAge += 5;

// console.log(firstName, shivaAge);
// console.log(friend1, friend2);

// console.log(shiva);

// const user1 = users[0];
// const user2 = users[1];

////////////////////

// const users = [
//   {
//     firstName: "Shayan",
//     age: 20,
//   },
//   {
//     firstName: "Maryam",
//     age: 22,
//   },
// ];

/**
 * userName1 = "Shayan"
 * userName2 = "Maryam"
 * userAge2 = 22
 */

// const [{ firstName: userName1 }, { firstName: userName2, age: userAge2 }] =
//   users;

// console.log(userName1);
// console.log(userName2);
// console.log(userAge2);

////////////////////////////////////
// spread operator, rest pattern

// const users = ["Saeed", "Hossein", "Cena", { firstName: "Narges" }];

// console.log(users);

// console.log(...users);
// console.log("Saeed", "Hossein", "Cena", { firstName: "Narges" });

// const ali = ["Ali", "welcome"];

// function gritting(name, message) {
//   console.log(`Hey ${name}, ${message}`);
// }

// gritting(ali[0], ali[1]);
// gritting(...ali); // "Ali", "welcome"

// gritting(ali);

// const [user1, ...user] = ["Saeed", "Hossein", "Cena", "Shiva", "Ali"];

// console.log(user1);
// console.log(user);

function addNumbers(...numbers) {
  console.log(numbers);
  //   return number1 + number2;
}

// const result = addNumbers(20, 12, 8);

// console.log(result);
/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/*
// get the parameter
function sumOfCube(...numbers) {
  // calculate sum of cubes
  let sum = 0;

  numbers.forEach((num) => (sum += num ** 2));

  // return result
  return sum;
}

console.log(sumOfCube(3, 2, 4, 1));
console.log(sumOfCube(3, 2, 5));
console.log(sumOfCube(3, 2));
console.log(sumOfCube(3));
*/

/*
////////////////////////////////////
// short circuiting

const firstName = "";

// if (firstName) {
//   console.log("if: name is correct");
// }

// if something is true do this =>

console.log(firstName && "short circuiting: name is correct");

// default value
console.log(firstName || "default name");
// nullish coalescing operator: null, undefined
console.log(firstName ?? "default name");
*/
