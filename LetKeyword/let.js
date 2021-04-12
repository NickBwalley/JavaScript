/*
ECMAScript 2015
ES2015 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope variables (and constants) in JavaScript.

Before ES2015, JavaScript had only two types of scope: Global Scope and Function Scope. 

*/

//Global Scope
//Variables declared Globally (outside any function) have Global Scope.


//Example

var carName = "Volvo";

// code here can use carName

function myFunction() {
  // code here can also use carName
}
// Global variables can be accessed from anywhere in a JavaScript program.

// Function Scope
// Variables declared Locally (inside a function) have Function Scope.

// code here can NOT use carName

function myFunction() {
    var carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName

  // Local variables can only be accessed from inside the function where they are declared.


// JavaScript Block Scope
// Variables declared with the var keyword cannot have Block Scope.

// Variables declared inside a block {} can be accessed from outside the block.

// example
{
    var x = 2;
}
  // x CAN be used here

  /*
Before ES2015 JavaScript did not have Block Scope.

Variables declared with the let keyword can have Block Scope.

Variables declared inside a block {} cannot be accessed from outside the block: 
*/

{
    let x = 2;
}
  // x can NOT be used here

// Redeclaring Variables
// Redeclaring a variable using the var keyword can impose problems.

// Redeclaring a variable inside a block will also redeclare the variable outside the block:
// Example
var x = 10;
// Here x is 10
{
  var x = 2;
  // Here x is 2
}
// Here x is 2

// Redeclaring a variable using the let keyword can solve this problem.

// Redeclaring a variable inside a block will not redeclare the variable outside the block:

// Example
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10


// Loop Scope
// Using var in a loop:

// Example
var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10
// Using let in a loop:

// Example
let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
// Here i is 5
/*In the first example, using var, the variable declared in the loop redeclares the variable outside the loop.

In the second example, using let, the variable declared in the loop does not redeclare the variable outside the loop.

When let is used to declare the i variable in a loop, the i variable will only be visible within the loop.*/

// Function Scope
// Variables declared with var and let are quite similar when declared inside a function.

//They will both have Function Scope:

// Global Scope
// Variables declared with var and let are quite similar when declared outside a block.

// They will both have Global Scope:

// Global Variables in HTML
// With JavaScript, the global scope is the JavaScript environment.

// In HTML, the global scope is the window object.

// Global variables defined with the var keyword belong to the window object:
// Global variables defined with the let keyword do not belong to the window object:

// Redeclaring
// Redeclaring a JavaScript variable with var is allowed anywhere in a program:
var x = 2;

// Now x is 2
 
var x = 3;

// Now x is 3

// Redeclaring a var variable with let, in the same scope, or in the same block, is not allowed:

var x = 2;       // Allowed
let x = 3;       // Not allowed

{
  var x = 4;   // Allowed
  let x = 5   // Not allowed
}

// Redeclaring a let variable with let, in the same scope, or in the same block, is not allowed:
let x = 2;       // Allowed
let x = 3;       // Not allowed

{
  let x = 4;   // Allowed
  let x = 5;   // Not allowed
}

// Redeclaring a variable with let, in another scope, or in another block, is allowed:
let x = 2;       // Allowed

{
  let x = 3;   // Allowed
}

{
  let x = 4;   // Allowed
}

// Hoisting
/* Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. */
// Example
// This is OK:

carName = "Volvo";
alert(carName);
var carName;