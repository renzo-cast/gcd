/*----------------------------------------------------------------
				Greatest Common Divisor (GCD) 

	By Laurence Cast
-----------------------------------------------------------------*/
function euclidean(){
	//intialize the remainder as some number > 0
	var r = 1;

	//enter two numbers to find GCD
	var n1 = ;
	var n2 = ;
	//or from two html input fields 'number1' and 'number2'
	//var n1 = document.getElementById('number1').value;
	//var n2 = document.getElementById('number2').value;

	//determine which of the numbers is largest and smaller
	var l = Math.max(a, b);
	var s = Math.min(a, b);

	//Euclidean Algorithm
	//continue to divide numbers until there is no remainder (r=0), var gcd is now the greatest common 
	while (r > 0) {
		var q = Math.floor(a / b);
		var r =  l -( q * s );
		var gcd = s;
		var l = s;	
		var s = r;
	} 
divisor
	return gcd;
}
