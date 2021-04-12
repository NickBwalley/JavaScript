/*ECMAScript 2015
ES2015 introduced two important new JavaScript keywords: let and const.

Variables defined with const behave like let variables, except they cannot be reassigned: */

const PI = 3.141592653589793; // This is the correct way
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

/*Block Scope
Declaring a variable with const is similar to let when it comes to Block Scope.

The x declared in the block, in this example, is not the same as the x declared outside the block: */
var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10

// JavaScript const variables must be assigned a value when they are declared:
const PI = 3.14159265359; // Correct

/*Not Real Constants
The keyword const is a little misleading.

It does NOT define a constant value. It defines a constant reference to a value.

Because of this, we cannot change constant primitive values, but we can change the properties of constant objects. */

/*Primitive Values
If we assign a primitive value to a constant, we cannot change the primitive value: 
 */
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

/*Constant Objects can Change
You can change the properties of a constant object: */
// Example

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

// But you can NOT reassign a constant object:

const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

// Constant Arrays can Change
// You can change the elements of a constant array:
// Example
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// But you can NOT reassign a constant array:
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR

/*Browser Support
The const keyword is not supported in Internet Explorer 10 or earlier. */

/*Redeclaring
Redeclaring a JavaScript var variable is allowed anywhere in a program: */
// Example
var x = 2;    //  Allowed
var x = 3;    //  Allowed
x = 4;        //  Allowed

/*Redeclaring or reassigning an existing var or let variable to const, in the same scope, or in the same block, is not allowed: */
// Example
var x = 2;         // Allowed
const x = 2;       // Not allowed
{
  let x = 2;     // Allowed
  const x = 2;   // Not allowed
}

// Redeclaring or reassigning an existing const variable, in the same scope, or in the same block, is not allowed:
const x = 2;       // Allowed
const x = 3;       // Not allowed
x = 3;             // Not allowed
var x = 3;         // Not allowed
let x = 3;         // Not allowed

{
  const x = 2;   // Allowed
  const x = 3;   // Not allowed
  x = 3;         // Not allowed
  var x = 3;     // Not allowed
  let x = 3;     // Not allowed
}

// Redeclaring a variable with const, in another scope, or in another block, is allowed:
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}

/*Hoisting
Variables defined with var are hoisted to the top and can be initialized at any time 
Meaning: You can use the variable before it is declared: */
// Example
// This is OK
carName = "Volvo";
alert(carName);
var carName;

/*
Variables defined with const are hoisted to the top of the block, but not initialized.

Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

The variable is in a "temporal dead zone" from the start of the block until it is declared.

Using a const variable before it is declared, is a syntax errror, so the code will simply not run. */

// This Code Will NOT RUN
carName = "Volvo";
const carName;