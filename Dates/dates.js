// function create newLine and toPrint
function toPrint(value){
    document.write(value);
}

function newLine(){
    document.write("<br><br>");
}

/*
Creating Date Objects
Date objects are created with the new Date() constructor.

There are 4 ways to create a new date object:

new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
 */

var d = new Date();
toPrint("The Date today is: ");
toPrint(d);
newLine();
// Date objects are static. The computer time is ticking, but date objects are not.

// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
// Example
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
toPrint(d);
/*
Note: JavaScript counts months from 0 to 11.
January is 0. December is 11.
6 numbers specify year, month, day, hour, minute, second:
*/
newLine();

// 5 numbers specify year, month, day, hour, and minute:
// Example
var d = new Date(2018, 11, 24, 10, 33);

// 4 numbers specify year, month, day, and hour:
// Example
var d = new Date(2018, 11, 24, 10);

// 3 numbers specify year, month, and day:
// Example
var d = new Date(2018, 11, 24);

// 2 numbers specify year and month:
// Example
var d = new Date(2018, 11);

// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

// Example
var d = new Date(2018);
toPrint(d);
newLine();

// One day (24 hours) is 86 400 000 milliseconds.

// When you display a date object in HTML, it is automatically converted to a string, with the       toString() method.

// The toUTCString() method converts a date to a UTC string (a date display standard):
var a = new Date();
toPrint(a.toUTCString());
newLine();

// The toDateString() method converts a date to a more readable format:
toPrint(a.toDateString());
newLine();

// The toISOString() method converts a date to a string, using the ISO standard format:
toPrint(a.toISOString());
newLine();