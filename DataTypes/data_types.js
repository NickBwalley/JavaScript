/*Javascript Data Types
JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript.

Primitive data type
Non-primitive (reference) data type
JavaScript is a dynamic type language, means you don't need to specify type of the variable because it is dynamically used by JavaScript engine. You need to use var here to specify the data type. It can hold any type of values such as numbers, strings etc. For example: */

var a = 10; // holding a number 
var b = "Nick" // holding a string 
var x = {firstName:"John", lastName:"Doe"};    // Object


/*
JavaScript primitive data types
There are five types of primitive data types in JavaScript. They are as follows:


Data Type	Description
String	    represents sequence of characters e.g. "hello"
Number	    represents numeric values e.g. 100
Boolean	    represents boolean value either false or true
Undefined	represents undefined value
Null	    represents null i.e. no value at all 

The non-primitive data types are as follows:

Data Type	Description
Object	represents instance through which we can access members
Array	represents group of similar values
RegExp	represents regular expression

*/

/*JavaScript Types are Dynamic
JavaScript has dynamic types. This means that the same variable can be used to hold different data types: */
// Example
var x1;           // Now x is undefined
x2 = 5;           // Now x is a Number
x3 = "John";      // Now x is a String
document.write(typeof(x1));
document.write("<br>");
document.write(typeof(x2));
document.write("<br>");
document.write(typeof(x3));