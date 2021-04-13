// String methods help you to work with strings.

/*
String Methods and Properties
Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).

But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties. 
*/

// String Length
// The length property returns the length of a string:

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
document.write(sln);
document.write("<br>");

/*
Finding a String in a String
The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string: 
*/
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
document.write(pos);
document.write("<br>");
/*
JavaScript counts positions from zero.
0 is the first position in a string, 1 is the second, 2 is the third ... 
*/

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// Example
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
document.write(pos);
document.write("<br>");

// Both indexOf(), and lastIndexOf() return -1 if the text is not found.
// Example
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("John");
document.write(pos);
document.write("<br>");

// Both methods accept a second parameter as the starting position for the search:
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);
document.write(pos);
document.write("<br>");

// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate", 15);
document.write(pos);
document.write("<br>");

// Searching for a String in a String
// The search() method searches a string for a specified value and returns the position of the match:
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
document.write(pos);
document.write("<br>");

/*
Did You Notice?
The two methods, indexOf() and search(), are equal?

They accept the same arguments (parameters), and return the same value?

The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions). */

/*
Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
 */

/*The slice() Method
slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).

This example slices out a portion of a string from position 7 to position 12 (13-1):
 */
// Example
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);

document.write(res); // outputs banana
document.write("<br>");

// Remember: JavaScript counts positions from zero. First position is 0.

// If a parameter is negative, the position is counted from the end of the string.
// This example slices out a portion of a string from position -12 to position -6:

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
document.write(res); // outputs banana
document.write("<br>");

// If you omit the second parameter, the method will slice out the rest of the string:
var res = str.slice(7);
document.write(res); 
document.write("<br>");
// or counting from the end
var res = str.slice(-12);
document.write(res); 
document.write("<br>");
// Negative positions do not work in Internet Explorer 8 and earlier.


// The substring() Method
// substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.
// Example

var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
document.write(res); // outputs banana
document.write("<br>");

// If you omit the second parameter, substring() will slice out the rest of the string.
/*
The substr() Method
substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part. */
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
document.write(res); // outputs banana
document.write("<br>");

// If you omit the second parameter, substr() will slice out the rest of the string.
var str = "Apple, Banana, Kiwi";
var res = str.substr(7);
document.write(res); 
document.write("<br>");
// If the first parameter is negative, the position counts from the end of the string.
var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);
document.write(res);  // outputs kiwi
document.write("<br>");

/*
Replacing String Content
The replace() method replaces a specified value with another value in a string: */
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
document.write(str);
document.write("<br>");
document.write(n);  
document.write("<br>");

// The replace() method does not change the string it is called on. It returns a new string.
// By default, the replace() method replaces only the first match:
// Example
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
document.write(str);
document.write("<br>");
document.write(n);  
document.write("<br>");

// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
str = "Please visit Microsoft!";
var n = str.replace("MICROSOFT", "W3Schools");
document.write(str);
document.write("<br>");
document.write(n);  
document.write("<br><br>");
// To replace case insensitive, use a regular expression with an /i flag (insensitive):
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");

document.write(str);
document.write("<br>");
document.write(n);  
document.write("<br><br>");

// Note that regular expressions are written without quotes.
// To replace all matches, use a regular expression with a /g flag (global match):
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
document.write(str);
document.write("<br>");
document.write(n);  
document.write("<br><br>");

// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

// A string is converted to lower case with toLowerCase():
var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower

// The concat() Method 
// concat() joins two or more strings:
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
document.write(text3);
document.write("<br><br>");

// The concat() method can be used instead of the plus operator. These two lines do the same:
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");

// All string methods return a new string. They don't modify the original string.
// Formally said: Strings are immutable: Strings cannot be changed, only replaced.

/*
String.trim()
The trim() method removes whitespace from both sides of a string: */
var str = "       Hello World!        ";
document.write(str.trim());
document.write("<br>");

/*
JavaScript String Padding
ECMAScript 2017 added two String methods: padStart and padEnd to support padding at the beginning and at the end of a string. */
// The padStart() method pads a string with another string:

// Example
var str = "5";
str = str.padStart(4,0);
// result is 0005
document.write(str);
document.write("<br>"); 

// Example
var str = "5";
str = str.padEnd(4,0);
// result is 5000
document.write(str);
document.write("<br>"); 

/*
Extracting String Characters
There are 3 methods for extracting string characters:

charAt(position)
charCodeAt(position)
Property access [ ]
 */

// The charAt() Method
// The charAt() method returns the character at a specified index (position) in a string:

// Example

var str = "HELLO WORLD";
document.write(str.charAt(0));            // returns H
document.write("<br>"); 

/*
The charCodeAt() Method
The charCodeAt() method returns the unicode of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).

Example */

var str = "HELLO WORLD";

document.write(str.charCodeAt(0));         // returns 72
document.write("<br>");

/*
Property Access
ECMAScript 5 (2009) allows property access [ ] on strings:

Example
 */
var str = "HELLO WORLD";
document.write(str[0]);                   // returns H
document.write("<br>");

/*
Property access might be a little unpredictable:

It does not work in Internet Explorer 7 or earlier
It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!) */
// Example
var str = "HELLO WORLD";
str[0] = "A";             // Gives no error, but does not work
str[0];                   // returns H

// If you want to work with a string as an array, you can convert it to an array.


/*
Converting a String to an Array
A string can be converted to an array with the split() method: */
// Example
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe