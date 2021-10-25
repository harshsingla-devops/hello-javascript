/* 
1. What is Strict Mode [closed]
2. Difference among const,var and let [closed]
3. What is Closure an why we use it [closed]
5. What is Lexical Scoping [closed]
8. What is hoisiting in Javascript [closed] // refer hoisting.js in same repo
7. What are different Scopes in Javascript [closed]
10.What is the difference b/w null, undefined [closed]

4. What is Currying and why we use it
6. What is the difference b/w function and arrow functions
9. What is Prototype in Javascript
11.Why do we need arrow functions.
12.What is REPL
13.What is Destructuring Arrays and Objects
14.What is spread operator in JavaScript
15.What is event loop
*/

/*********************************************
 *
 *     ANSWERS START HERE....
 *
 *********************************************/

//1. strict mode
// Use strict mode to avoid accidental errors/bugs in the code
// strict mode helps to avoid issues for which javascript fails sliently
"use strict";

consoleLog("STARTS HERE");
consoleLog("1. ADVANTAGE OF STRICT MODE");

/* x = 40;
console.log(x); // With Strict mode ON, this will cause runtime error as 'x' is not defined.
*/

const x = 30;
console.log(x); // With Strict mode ON, this will work as 'x' has been defined with the type of the variable.

consoleLog("1. ADVANTAGE OF STRICT MODE [closed]");

consoleLog("2. const vs var vs let");
//2. var vs const vs let
//var declarations are globally scoped or function scoped while let and const are block scoped.
//var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared;
// const variables can neither be updated nor re-declared.
//They are all hoisted to the top of their scope. But while var variables are initialized with undefined,
//let and const variables are not initialized.
//While var and let can be declared without being initialized, const must be initialized during declaration.
consoleLog("2. const vs var vs let [closed]");
// 3. Closures
//A closure is the combination of a function bundled together (enclosed)
//with references to its surrounding state (the lexical environment).

consoleLog("3. CLOSURES");

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
consoleLog(add5(2));
consoleLog("3. CLOSURES [closed]");

//Lexical Scoping
//The word lexical refers to the fact that lexical scoping uses the location where a
//variable is declared within the source code to determine where that variable
//is available. Nested functions have access to variables declared in their outer scope.
consoleLog("5. Lexical Scoping");
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    consoleLog(name); // use variable declared in the parent function
  }
  displayName();
}
init();
consoleLog("5. Lexical Scoping [closed]");

consoleLog("10. difference b/w undefined and null");
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(undefined == null); //true
console.log(undefined === null); //false
consoleLog("10. difference b/w undefined and null [closed]");
consoleLog("ENDS HERE");
function consoleLog(input) {
  console.log(`========= ${input} ===========`);
}
