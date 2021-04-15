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

