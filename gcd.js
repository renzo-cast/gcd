/*----------------------------------------------------------------
				Greatest Common Divisor (GCD) 

	By Laurence Cast
-----------------------------------------------------------------*/
function euclidean(){
	//intialize the remainder as some number > 0
	var r = 1;

	//input two values from two html input fields 'number1' and 'number2'
	var n1 = document.getElementById('number1').value;
	var n2 = document.getElementById('number2').value;

	//determine which of the numbers is largest and set the larger to n1 and the smaller to n2
	var a = Math.max(a, b);
	var b = Math.min(a, b);

	//Euclidean Algorithm
	while (r > 0) {
		var q = Math.floor(a / b);
		var r =  a -( q * b );
		var gcd = b;
		var a = b;	
		var b = r;
	} 

	//once the numbers are divided equally with no remainder, the int in var b is now the greatest common divisor
	document.getElementById('output').value = gcd;
}
