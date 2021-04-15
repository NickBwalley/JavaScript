// JavaScript has only one type of number. Numbers can be written with or without decimals.
// Example
var x = 3.14;    // A number with decimals
var y = 3;       // A number without decimals

// Extra large or extra small numbers can be written with scientific (exponent) notation:
// Example
var x = 123e5;    // 12300000
var y = 123e-5;   // 0.00123

/*
Precision
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

Example */
var x = 999999999999999;   // x will be 999999999999999
var y = 9999999999999999;  // y will be 10000000000000000

document.write(x);
document.write("<br>");
document.write(y);

/*
Adding Numbers and Strings
WARNING !!

JavaScript uses the + operator for both addition and concatenation.

Numbers are added. Strings are concatenated.
If you add two numbers, the result will be a number:
Example */
var x = 10;
var y = 20;
var z = x + y;           // z will be 30 (a number) 

/*

If you add two strings, the result will be a string concatenation:
Example */
var x = "10";
var y = "20";
var z = x + y;           // z will be 1020 (a string)


/*
Numeric Strings
JavaScript strings can have numeric content:
 */
var x = 100;         // x is a number

var y = "100";       // y is a string

// JavaScript will try to convert strings to numbers in all numeric operations:
// This will work:

var x = "100";
var y = "10";
var z = x / y;       // z will be 10 
document.write("<br>");
document.write(z);
document.write("<br>");

// This will also work:

var x = "100";
var y = "10";
var z = x * y;       // z will be 1000

// And this will work:

var x = "100";
var y = "10";
var z = x - y;       // z will be 90

// But this will not work:

var x = "100";
var y = "10";
var z = x + y;       // z will not be 110 (It will be 10010)

// In the last example JavaScript uses the + operator to concatenate the strings.


/*
NaN - Not a Number
NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

Example */

var x = 100 / "Apple";  // x will be NaN (Not a Number)

document.write(x);      // x will be: NaN
document.write("<br>"); 

// However, if the string contains a numeric value , the result will be a number:
// Example
var x = 100 / "10";     // x will be 10

// You can use the global JavaScript function isNaN() to find out if a value is a number:
// Example
var x = 100 / "Apple";
document.write(isNaN(x));               // returns true because x is Not a Number
document.write("<br>"); 

// Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:
// Example
var x = NaN;
var y = 5;
var z = x + y;         // z will be NaN

// Or the result might be a concatenation:
// Example
var x = NaN;
var y = "5";
var z = x + y;         // z will be NaN5

// NaN is a number: typeof NaN returns number:

document.write(typeof NaN);            // returns "number"
document.write("<br>");

/*
Infinity
Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

Example */
