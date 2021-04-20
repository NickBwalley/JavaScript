// function create newLine and toPrint
function toPrint(value){
    document.write(value);
}

function newLine(){
    document.write("<br><br>");
}

/*
JavaScript Get Date Methods
These methods can be used for getting information from a date object:

Method	        Description
getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	    Get the month as a number (0-11)
getDate()	    Get the day as a number (1-31)
getHours()	    Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	    Get the time (milliseconds since January 1, 1970)
getDay()	    Get the weekday as a number (0-6)
Date.now()	    Get the time. ECMAScript 5.
 */


/*
The getTime() Method
The getTime() method returns the number of milliseconds since January 1, 1970: */

var d = new Date();
toPrint(d.getTime());
newLine();

/*
The getFullYear() Method
The getFullYear() method returns the year of a date as a four digit number: */
toPrint(d.getFullYear());
newLine();

/*
The getMonth() Method
The getMonth() method returns the month of a date as a number (0-11):
In JavaScript, the first month (January) is month number 0, so December returns month number 11.
 */
toPrint(d.getMonth());
newLine();

/*
The getDate() Method
The getDate() method returns the day of a date as a number (1-31):

The getHours() Method
The getHours() method returns the hours of a date as a number (0-23): 

The getMinutes() Method
The getMinutes() method returns the minutes of a date as a number (0-59):

The getSeconds() Method
The getSeconds() method returns the seconds of a date as a number (0-59):

The getMilliseconds() Method
The getMilliseconds() method returns the milliseconds of a date as a number (0-999):

The getDay() Method
The getDay() method returns the weekday of a date as a number (0-6):



UTC Date Methods
UTC date methods are used for working with UTC dates (Universal Time Zone dates):

Method	Description
getUTCDate()	Same as getDate(), but returns the UTC date
getUTCDay()	Same as getDay(), but returns the UTC day
getUTCFullYear()	Same as getFullYear(), but returns the UTC year
getUTCHours()	Same as getHours(), but returns the UTC hour
getUTCMilliseconds()	Same as getMilliseconds(), but returns the UTC milliseconds
getUTCMinutes()	Same as getMinutes(), but returns the UTC minutes
getUTCMonth()	Same as getMonth(), but returns the UTC month
getUTCSeconds()	Same as getSeconds(), but returns the UTC seconds*/