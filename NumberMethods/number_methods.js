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

/*
Converting Variables to Numbers
There are 3 JavaScript methods that can be used to convert variables to numbers:

The Number() method
The parseInt() method
The parseFloat() method

Method	        Description
Number()	    Returns a number, converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	    Parses its argument and returns an integer

These methods are not number methods, but global JavaScript methods. */

// The Number() Method
// Number() can be used to convert JavaScript variables to numbers:

Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN

/*
The Number() Method Used on Dates
Number() can also convert a date to a number:

Example*/
Number(new Date("2017-09-30"));    // returns 1506729600000
// The Number() method above returns the number of milliseconds since 1.1.1970.

/*
The parseInt() Method
parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
 
Example*/
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 
// If the number cannot be converted, NaN (Not a Number) is returned.


/*
The parseFloat() Method
parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

Example */
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN
// If the number cannot be converted, NaN (Not a Number) is returned.

/*
Number Properties

Property	        Description
MAX_VALUE	        Returns the largest number possible in JavaScript
MIN_VALUE	        Returns the smallest number possible in JavaScript
POSITIVE_INFINITY	Represents infinity (returned on overflow)
NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
NaN	                Represents a "Not-a-Number" value */

// Example

// MAX_VALUE returns the largest possible number in JavaScript.
var x = Number.MAX_VALUE;
document.write(x);
document.write("<br>");

// MIN_VALUE returns the lowest possible number in JavaScript.
var x = Number.MIN_VALUE;

// JavaScript POSITIVE_INFINITY
// Example
var x = Number.POSITIVE_INFINITY; // POSITIVE_INFINITY is returned on overflow

// JavaScript NEGATIVE_INFINITY
// Example
var x = Number.NEGATIVE_INFINITY; // NEGATIVE_INFINITY is returned on overflow:


/*
NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

Example */
var x = 100 / "Apple";  // x will be NaN (Not a Number)


/*
Number Properties Cannot be Used on Variables
Number properties belongs to the JavaScript's number object wrapper called Number.
These properties can only be accessed as Number.MAX_VALUE.
Using myNumber.MAX_VALUE, where myNumber is a variable, expression, or value, will return undefined:

Example */
var x = 6;
var y = x.MAX_VALUE;    // y becomes undefined

