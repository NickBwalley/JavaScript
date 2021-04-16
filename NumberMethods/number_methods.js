/*
The toString() Method
The toString() method returns a number as a string.

All number methods can be used on any type of numbers (literals, variables, or expressions):

Example*/
var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
x = (100 + 23).toString();   // returns 123 from expression 100 + 23
document.write(x);
document.write("<br>");
document.write(typeof(x)); // returns string (typeof (string))
document.write("<br>");


/*
The toExponential() Method
toExponential() returns a string, with a number rounded and written using exponential notation.

A parameter defines the number of characters behind the decimal point:

Example*/
var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0
// The parameter is optional. If you don't specify it, JavaScript will not round the number.


/*The toFixed() Method
toFixed() returns a string, with the number written with a specified number of decimals:

Example */
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000
// document.write("<br>");
// toFixed(2) is perfect for working with money.


/*
The toPrecision() Method
toPrecision() returns a string, with a number written with a specified length:

Example */
Example
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600


/*
The valueOf() Method
valueOf() returns a number as a number.

Example*/
var x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23

/*
In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

There is no reason to use it in your code.

All JavaScript data types have a valueOf() and a toString() method.
 */

