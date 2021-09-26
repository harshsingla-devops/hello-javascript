`use strict`;

//Question : What is hoisting?
// Answer : Hoisting in javascript refers to the concept of using variables/functions 
//even before their declaration.

// 1. Function Decalarations are hoisted in Javascript with their initial value as the Actual Function.
// 2. var variables are hoisted in Javascript with initial value as undefined.
// 3. const and let variables are not hoisted in Javascript and if used, these will be considered in TDZ
// temporal dead zone.
//4. Function expressions will be hoisted depending upon the type of the variable being used.
//5. Arrow functions can't be hoisted.


//var variables can be hoisted
console.log(varVariable); // it will undefined
console.log(constVariable); // can't be hoisted;will get error if executed this line
console.log(letVariable); // can't be hoisted;will get error if executed this line

//function declarations can be hoisted
hoistedFunction();

//function expression can be hoisted depending upon the type of varible it is being stored
constFunctionExpression(); // can't be hoisted as it is considered as 'const' variable which can't be hoisted.
varFunctionExpression(); // can be hoisted but will get an error since 'var' will be undefined at this point.
arrowFunction(); //can't be hoisted and same rules applies as function expression.

/*----------------------------------------------------------------
******************************************************************
                    DECALARATION AREA STARTS          
/*----------------------------------------------------------------
*******************************************************************/

//var variable
var varVariable = 10;
// let and const variables
const constVariable = 12;
let letVariable = 19;

//function declaration
function hoistedFunction(){
    console.log("I am function declaration!");
}

//function expression
const constFunctionExpression = function (){
    console.log("I am function constFunctionExpression!");
}
var varFunctionExpression = function (){
    console.log("I am function varFunctionExpression!");
}

//Arrow Function
const arrowFunction = () => console.log("I am arrow function!");

/*----------------------------------------------------------------
******************************************************************
                    DECALARATION AREA ENDS          
/*----------------------------------------------------------------
*******************************************************************/