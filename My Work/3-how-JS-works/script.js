//
// /*
// ///////////////////////////////////
// LECTURE 39
// Hoisting in practice
// */
//
// /* due to the process of functions in this contexts VO (variable object) being
//   hoisted, we can call the function before it is declared in the file. */
// calculateAge(1996);
//
// /* function declaration is hoisted before execution begins */
// function calculateAge(year) {
//   console.log(2016 - year);
// }
//
// /* will trigger an Uncaught TypeError: retirement is not a function.
//   this is because retirement is declared as a variable which are always set
//   to 'undefined' before they are defined by their line where they are expressed */
// // retirement(1996);
//
// /* how does this work with a function expression? */
// var retirement = function(year) {
//   console.log(65 - (2016 - year));
// }
//
// /* variables are hoisted within the VO, but are set to undefined, therefore 'retirement'
//   will not become a function expression until the line of code has been reached in
//   execution. */
// retirement(1996);
//
//
// /* VARIABLES */
//
// /* age has been declared in the context and therefore the name is stored via hoisting,
//   but the value is not set - therefore it is undefined */
// console.log(age);
//
// /* point in which the value of age is defined in the execution of the code.
//   it's also worth noting that it is declared in the global execution context */
// var age = 23;
//
// /* variable age inside this function has a new execution context, so does not affect
//   the variable of the same name in the global execution context. It has its own
//   execution context object */
// function foo() {
//   var age = 64;
//   console.log(age);
// }
//
// /* one will log the age in the global execution context, one will log the age in the
//  foo() functions execution context */
// console.log(age);
// foo();
//
//
// /*
// ///////////////////////////////////
// LECTURE 40
// Scoping and the Scope chain
// */
//
// /* Correctly makes use of the contexts in the scope chain */
// var a1 = 'Hello!';
// first1();
//
// function first1() {
//   var b1 = 'Hey!';
//   second1();
//
//   function second1() {
//     var c1 = 'Hi!';
//     console.log(a1 + b1 + c1);
//   }
// }
//
// /* Does not correctly make use of the contexts in the scope chain. function third()
//   attempts to access a variable which is not declared in its scope. third() can
//   only access the variables a and d */
// var a2 = 'Hello!';
// first2();
//
// function first2() {
//   var b2 = 'Hey!';
//   second2();
//
//   function second2() {
//     var c2 = 'Hi!';
//     third();
//   }
// }
//
// function third() {
//   var d = 'Bonjour';
//   /* uncaught TypeError: c2 is not defined */
//   // console.log(c2);
// }


/*
///////////////////////////////////
LECTURE 41
The 'this' keyword
*/

/* see `execution contexts.txt` for notes */


/*
///////////////////////////////////
LECTURE 42
The 'this' keyword in practice
*/

/* logs the current default global object, which is the browser window */
// console.log(this);

// calculateAge(1985);
//
// function calculateAge(year) {
//   console.log(2018 - year);
//   console.log(this);
// }

// var john = {
//   name: 'john',
//   yearOfBirth: 1990,
//   calculateAge: function() {
//     /* this will log the context of this object, the variable 'john' */
//     console.log(this);
//     console.log(2018 - this.yearOfBirth);
//
//     // /* this will log the default context, because it is a regular function call.
//     //   Even though it is declared and called inside another context, it is not
//     //   a method call, it is a regular function call */
//     // function innerFunction() {
//     //   console.log(this);
//     // }
//     // innerFunction();
//   }
// }
//
// john.calculateAge();
//
//
// var mike = {
//   name: 'mike',
//   yearOfBirth: 1984
// }
//
// /* method borrowing
//   No parenthesis used, because they are used to invoke functions/methods. To
//   borrow a method, we treat them like a variable */
// mike.calculateAge = john.calculateAge;
// mike.calculateAge();
