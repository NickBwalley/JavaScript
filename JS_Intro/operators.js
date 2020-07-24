function operators(){
	var a = 20;
	var b = 30;
	var c = "Text";
	var linebreak = "<br/>";

	document.write("Arithmetic Operators")
	document.write(linebreak);
	document.write("a + b = ");
	result = a + b;
	document.write(result);
	document.write(linebreak);

	document.write("a - b = ");
	result = a - b;
	document.write(result);
	document.write(linebreak);

	document.write("a * b = ");
	result = a * b;
	document.write(result);
	document.write(linebreak);

	document.write("a / b = ");
	result = a / b;
	document.write(result);
	document.write(linebreak);

	document.write("a % b = ");
	result = b % a;
	document.write(result);
	document.write(linebreak);

	document.write("a + b + c = ");
	result = a + b + c;
	document.write(result);
	document.write(linebreak);

	a = a++;
	document.write("a++ = ");
	result = a++;
	document.write(result);
	document.write(linebreak);
	document.write(a);
	document.write(linebreak);

	b = b++;
	document.write("b++ = ");
	result = b++;
	document.write(result);
	document.write(linebreak);
	document.write(b);
	document.write(linebreak);


}
// invoking functions 
operators();