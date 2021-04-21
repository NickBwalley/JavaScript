/*Function toPrint() and newLine() */
function toPrint(value){
    document.write(value);
}
function newLine(){
    document.write("<br><br>");
}


toPrint(Math.PI);            // returns 3.141592653589793
newLine();

/*
JavaScript provides 8 mathematical constants that can be accessed as Math properties:

Example
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E 


Math Methods
The syntax for Math any methods is : Math.method.(number)


Number to Integer
There are 4 common methods to round a number to an integer:
Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x Example: 4.9 returns 4 or 4.1 returns 4


Math.sign()
Math.sign(x) returns if x is negative, null or positive:

Example
Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1


Math.min() and Math.max()
Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:

Example
Math.min(0, 150, 30, 20, -8, -200);  // returns -200
Example
Math.max(0, 150, 30, 20, -8, -200);  // returns 150


Math.random()
Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

Example
Math.random();     // returns a random number
*/

