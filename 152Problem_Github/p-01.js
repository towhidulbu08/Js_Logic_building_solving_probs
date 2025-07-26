//P-01 function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = 'Lydia';
//   let age = 21;
// }

// sayHi();

//output: undefined and Ref error

// for (var i = 0; i < 3; i++) {

//   //0,1,2,3
//   setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// +true;
//*  !'Lydia' */

// const bird = {
//   size: "small",
// };

// const mouse = {
//   name: "Mickey",
//   small: true,
// };

// console.log(mouse[bird.size]);
// console.log(mouse[bird["size"]]);

// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = "green" } = {}) {
//     this.newColor = newColor;
//   }
// }

// const freddie = new Chameleon();
// console.log(Chameleon.colorChange("orange"));
// console.log(freddie);

// function showStudentInfo({
//   name = "No Name",
//   address: { city = "Unknown", zip = 0 } = {}
// } = {}) {
//   console.log(`Student: ${name}, City: ${city}, Zip: ${zip}`);
// }

// showStudentInfo();

// showStudentInfo({
//   name: "Rahim"
// });

// showStudentInfo({
//   name: "Tamim",
//   address: { city: "Barishal", zip: 8200 }
// });

// let greeting;
// greetign = {}; // Typo!
// console.log(greetign);

// function bark() {
//   console.log("Woof!");
// }

// bark.animal = "dog";

// console.dir(bark);

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person('Lydia', 'Hallie');
// Person.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

//console.log(member.getFullName());

//P-12 function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person("Lydia", "Hallie");
// const sarah = Person("Sarah", "Smith");

// console.log(lydia);
//console.log(sarah);


///P-13. What are the three phases of event propagation?

function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;