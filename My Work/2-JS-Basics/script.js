/*
///////////////////////////////////
LECTURE 8
Variables 1
*/

// var name = 'John';
// console.log(name);
//
// var lastName = 'Smith';
// console.log(lastName);
//
// var age = 26;
// console.log(age);
//
// // Primitive data types:
// //- number: floating point, for decimals and ints (5 = 5.0)
// //- string: sequence of characters, used for text
// //- boolean: logical data type that can only be true or false
// //- undefined: data type of a variable which does not have a value yet
// //- null: also means 'non-existent'
//
// var fullAge = true;
// console.log(fullAge);

/*
///////////////////////////////////
LECTURE 9
Variables 2
*/

// var name = 'John';
// var age = 26;
//
// // type coersion: age is converted into a string
// // console.log(name + age);
// // no coersion as they are the same type - integers are just added together
// // console.log(age + age);
//
// var job, married;
//
// // undefined
// // console.log(job);
//
// job = 'Teacher';
// isMarried = false;
//
// // boolean and integers are converted to strings for the following:
// console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');
//
// // var mutation (changing value of existing variable):
// age = 'thirty six';
// job = 'driver';
//
// // values will be different
// console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');
//
// // set value at runtime using a js prompt
// var lastName = prompt('What is the last name?');
// console.log(lastName);
//
// // view string previously printed in console inside a js alert (mainly used for debugging)
// alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');


/*
///////////////////////////////////
LECTURE 10 & 11
Operators & precedence
*/

// var now = 2018;
// var age = 26;
// var birthYear = now - age;
//
// // operator precedence dictates that age will be multiplied first (simple math)
// birthYear = now - age * 2;
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// // higher precedence value = higher execution priorirty
//
// console.log(birthYear);
//
// var ageJohn = 30;
// var ageMark = 30;
//
// // 5 * 4 = 20, 20 - 6 = 14, 3 + 14 = 17
// // precedence order of '=' is right-to-left:
// // ageMark = 17, ageJohn = ageMark = 17
// ageJohn = ageMark = 3 + 5 * 4 - 6;
//
// // 3 + 5 = 8, 8 * 4 = 32, 32 - 6 = 26
// ageJohn = (3 + 5) * 4 - 6;
//
// // simple operators to mutate variables with less code
// ageJohn++;
// ageMark *= 2;
//
// console.log(ageJohn);

/*
CODING CHALLENGE 1
*/


/*
///////////////////////////////////
LECTURE 14
If-else statements
*/

// var name = 'John';
// var age = 26;
// var isMarried = 'yes';
//
// if (isMarried === 'yes') {
//   console.log(name + ' is married!');
// } else {
//   console.log(name + ' will hopefully marry soon!');
// }
//
// var isMarried = true;
// /*
// if (isMarried) {
//   console.log(' YES!');
// } else {
//   console.log('no...');
// }
// */
//
// if (isMarried) {
//   console.log('YES!');
// }
//
// // do not compare using this...
// if (23 == "23") {
//   console.log('Type coersion is in use (must be comparing with "==")');
// } else {
//   console.log('Type coersion is in use (must be comparing with "===")');
// }
//
// // this one is better and safer!
// if (23 === "23") {
//   console.log('Type coersion is in use (must be comparing with "==")');
// } else {
//   console.log('Type coersion is in use (must be comparing with "===")');
// }


/*
///////////////////////////////////
LECTURE 15
Boolean logic and switch
*/

// var age = 25;
//
// if (age < 20) {
//   console.log('John is a teenager');
// // >= is necessary to include '20'
// } else if (age >= 20 && age < 30) {
//   console.log('John is a young man')
// } else {
//   console.log('John is a middle aged man');
// }
//
// var job = 'Teacher';
//
// job = prompt('What does John do?');
//
// switch (job) {
//   case 'Teacher':
//     console.log('John teaches kids.')
//     break;
//   case 'Driver':
//     console.log('John drives a cab in London.');
//     break;
//   case 'Cop':
//     console.log('John helps fight crime.');
//     break;
//   default:
//     console.log('Johns job is ' + job + '.');
//     break;
// }


/*
///////////////////////////////////
lecture 16
The ternary operator and switch statements
(switch covered in previous notes)
*/

// var firstName = 'George';
// var age = 21;
//
// // both ternary and assignment operators
// //  - ternary operator is ran before assignment in order
// //    to get the value to assign
// var drink = age >= 18 ? 'Beer' : 'Juice';
// console.log(drink);


/*
///////////////////////////////////
lecture 17
Truthy and falsey values and equality operators
*/

// falsey values:
//  - undefined
//  - null
//  - 0   (IMPORTANT! Variable can be defined as 0, but equates to false!)
//  - ''  (has been defined but still equates to empty, there isn't any value in the string)
//  - NaN

// Truthy values:
//  - NOT falsey values

// var height;
//
// height = 0;
//
// // use conditionals to ensure 0 is not treated as undefined in this instance
// if (height || height === 0) {
//   console.log('Variable is defined.');
// } else {
//   console.log('Variable has not been defined.')
// }


/*
///////////////////////////////////
LECTURE 18 & 19
CODING CHALLENGE 2
average bball scores
*/


/*
///////////////////////////////////
LECTURE 20
Functions
*/

// function calculateAge(birthYear) {
//   var now = 2018;
//   var age = now - birthYear;
//   return age;
// }
//
// // var ageJohn = calculateAge(1996);
// // var ageMike = calculateAge(1943);
// // var ageMary = calculateAge(1976);
// //
// // console.log(ageJohn);
// // console.log(ageMike);
// // console.log(ageMary);
//
// function yearsUntilRetirement(name, yearOfBirth) {
//   var age = calculateAge(yearOfBirth);
//   var retirementAge = 65;
//   var yearsLeft = retirementAge - age;
//   if (yearsLeft < 0) {
//     console.log(name + ' has already retired.');
//   } else if (yearsLeft === 0) {
//     console.log(name + ' retires this year.');
//   } else {
//     console.log(name + ' retires in ' + yearsLeft + ' years.');
//   }
// }
//
// yearsUntilRetirement('George', 1996);
// yearsUntilRetirement('Mary', 1942);
// yearsUntilRetirement('Hannah', 1956);
// yearsUntilRetirement('Dick', 1968);
// yearsUntilRetirement('Dom', 1953);


/*
///////////////////////////////////
LECTURE 21
Statements and expressions
*/

// // function statement
// // statement performs an action
// function someFun(par) {
//   // code
// }
//
// // function expression
// // expression produces an output value
// var someFun = function(par) {
//   // code
// }
//
// // other expressions
// // (values produced)
// 3 + 4;
// var x = 3;
//
// // other Statements
// // (nothing produced)
// if (x === 5) {
//   // do something
// }


/*
///////////////////////////////////
LECTURE 22
Arrays
*/

// // INITIALIZE new array
// // second is hardly used, but exists
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);
//
// // GETTING array data
// console.log(names[0]);
// console.log(names);
// console.log(names.length)
//
// // MUTATE array data
// names[0] = 'Ben';
// names[5] = 'Mary';
// names[names.length] = 'Brian';
// console.log(names);
//
// // Different data types in one structure
// var john = ['John', 'Smith', 1990, 'Teacher', false];
// john.push('blue');
// console.log(john);
//
// // Other array methods
// john.unshift('Mr.');  // add to first element
// john.pop();           // remove last element
// john.shift();         // remove first element
// john.indexOf(1990);   // return index of value in the array
// john.indexOf(21);     // will return -1 if value is not in the array
//
// console.log('indexOf(1990) = ' + john.indexOf(1990));
// console.log('indexOf(21) = ' + john.indexOf(21));
//
// // assert the existence of a value in an array
// // called by 'isDesigner()'
// var isDesigner = function() {
//   return john.indexOf('Designer') === -1 ? 'John is not a Designer' : 'John is a Designer';
// }
//
// // OR more simply
// var isDesigner = john.indexOf('Designer') === -1 ? 'John is not a Designer' : 'John is a Designer';
//
// console.log(isDesigner);


/*
///////////////////////////////////
CHALLENGE 3
Tip calulator
*/


/*
///////////////////////////////////
LECTURE 25
Objects and Properties
*/

// // objects are defined using curcly braces
// // OBJECT LITERAL
// var john = {
//   // key: 'value',
//   name: 'John',
//   lastname: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'Teacher',
//   isMarried: false
// };
//
// // access properties of objects as follows
// console.log(john.name);
// console.log(john['lastname']);
// var x = 'birthYear';
// console.log(john[x]);
//
// // mutate values in an object
// john.job = 'Designer';
// john['isMarried'] = true;
// console.log(john);
//
// // NEW OBJECT
// var jane = new Object();
// jane.name = 'Jane';
// jane.lastName = 'Connor';
// jane.['birthYear'] = 1976;


/*
///////////////////////////////////
LECTURE 26
Object methods
*/

// var john = {
//   // key: 'value',
//   name: 'John',
//   lastname: 'Smith',
//   birthYear: 1996,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'Teacher',
//   isMarried: false,
//   calcAge: function(now) {
//     return now - this.birthYear;
//   }, // Or BETTER yet...
//   setAge: function(now) {
//     this.age = now - this.birthYear;
//   }
// };
//
// john.age = john.calcAge(2018);
// console.log(john.age);
// john.setAge(2022);
// console.log(john.age);


/*
///////////////////////////////////
CHALLENGE 4
BMI game with Objects
*/


/*
///////////////////////////////////
LECTURE 29
Loops & Iteration
*/

// var john = ['John', 'Smith', 1990, 'Teacher', false];
//
// // introducing 'typeof'
// //  - returns true or false
// //  - compares objects against names of data types
//
// // CONTINUE: skip iteration and continue with loop
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// }
//
// // BREAK: break out of loop completely / stop looping
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') break;
//   console.log(john[i]);
// }
//
// // looping backwards
// for (var i = john.length - 1; i >= 0; i--) {
//   if (typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// }


/*
///////////////////////////////////
LECTURE 33
JavaScript Versions: ES5, ES6 / ES2015 and ES6+
*/
