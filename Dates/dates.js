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

/*
JavaScript Date Input
There are generally 3 types of JavaScript date input formats:

Type	Example
ISO Date	"2015-03-25" (The International Standard)
Short Date	"03/25/2015"
Long Date	"Mar 25 2015" or "25 Mar 2015"

The ISO format follows a strict standard in JavaScript.
The other formats are not so well defined and might be browser specific. 


JavaScript Date Output
Independent of input format, JavaScript will (by default) output dates in full text string format:
Wed Mar 25 2015 03:00:00 GMT+0300 (East Africa Time) 

UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).
Omitting T or Z in a date-time string can give different results in different browsers.


Time Zones
When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.
When getting a date, without specifying the time zone, the result is converted to the browser's time zone.
In other words: If a date/time is created in GMT (Greenwich Mean Time), the date/time will be converted to CDT (Central US Daylight Time) if a user browses from central US.
JavaScript Short Dates.

Short dates are written with an "MM/DD/YYYY" syntax like this:

JavaScript Long Dates.
Long dates are most often written with a "MMM DD YYYY" syntax like this:


Date Input - Parsing Dates
If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
Date.parse() returns the number of milliseconds between the date and January 1, 1970:*/

var msec = Date.parse("Mar 21, 2012");
toPrint(msec);
newLine();
// You can then use the number of milliseconds to convert it to a date object:
var d = new Date(msec);
toPrint(d);
newLine();



