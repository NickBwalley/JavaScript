//You can use single or double quotes:
//Example

var carName1 = "Volvo XC60";  // Double quotes
var carName2 = 'Volvo XC60';  // Single quotes

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
// Example

var answer1 = "It's alright";
var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"';

document.write(answer1);
document.write("<br>");
document.write(answer2);
document.write("<br>");
document.write(answer3);
document.write("<br>");

// String Length
// To find the length of a string, use the built-in length property:
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
document.write(sln);
document.write("<br>");

// Escape Character
// Because strings must be written within quotes, JavaScript will misunderstand this string:
// var x = "We are the so-called "Vikings" from the north.";
// The string will be chopped to "We are the so-called ".
// The solution to avoid this problem, is to use the backslash escape character.
// The backslash (\) escape character turns special characters into string characters:

/*Code	Result	Description
\'	'	Single quote
\"	"	Double quote
\\	\	Backslash
The sequence \"  inserts a double quote in a string:
*/

// Example
var x = "We are the so-called \"Vikings\" from the north.";
// The sequence \'  inserts a single quote in a string:

// Example
var x = 'It\'s alright.';
// The sequence \\  inserts a backslash in a string:

// Example
var x = "The character \\ is called backslash.";

/*
Six other escape sequences are valid in JavaScript:

Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
*/
// The 6 escape characters above were originally designed to control typewriters, teletypes, and fax machines. They do not make any sense in HTML.


/*
Breaking Long Code Lines

For best readability, programmers often like to avoid code lines longer than 80 characters.

If a JavaScript statement does not fit on one line, the best place to break it is after an operator:
*/
// Example
document.getElementById("demo").innerHTML =
"Hello Dolly!";

// You can also break up a code line within a text string with a single backslash:
// Example
var y = document.getElementById("demo4").innerHTML = "Hello \
Dolly!";
document.write(y);
document.write("<br>");
/*
The \ method is not the preferred method. It might not have universal support.
Some browsers do not allow spaces behind the \ character.

A safer way to break up a string, is to use string addition:

*/
// Example
document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";

// NOTE: You cannot break up a code line with a backslash:
// Example
// document.getElementById("demo").innerHTML = \
// "Hello Dolly!";

/*
Strings Can be Objects
Normally, JavaScript strings are primitive values, created from literals:

var firstName = "John";

But strings can also be defined as objects with the keyword new:

var firstName = new String("John");

Example
 */
var x = "John";
var y = new String("John");

// typeof x will return string
// typeof y will return object

/*
Don't create strings as objects. It slows down execution speed.
The new keyword complicates the code. This can produce some unexpected results: 
*/

// When using the == operator, equal strings are equal:
var x = "John";             
var y = new String("John");

// (x == y) is true because x and y have equal values

// When using the === operator, equal values may not be equal, because the === operator expects equality in both data type and value.
var x = "John";             
var y = new String("John");

// (x === y) is false because x and y have different types (string and object)


// Or even worse. Objects cannot be compared:
var x = new String("John");             
var y = new String("John");

// (x == y) is false because x and y are objects

var x = new String("John");             
var y = new String("John");

// (x === y) is false because x and y are objects


/*
* Note the difference between (x==y) and (x===y).
* Also note that comparing two JavaScript objects will always return false. 
*/