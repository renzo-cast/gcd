/*----------------------------------------------------------------
Greatest Common Divisor (GCD) 

By Laurence Castagnoli
date: 20 Aug 2015
-----------------------------------------------------------------*/


function euclideanAlgorithm(n1, n2){
	//intialize the remainder as some number > 0
	var r = 1;

	//determine which of the numbers is largest and smaller
	var l = Math.max(n1, n2);
	var s = Math.min(n1, n2);

	//Euclidean Algorithm
	//continue to divide numbers until there is no remainder (r=0), var gcd is now the greatest common 
	while (r > 0) {
		var q = Math.floor(l / s);
		var r =  l - ( q * s );
		var gcd = s;
		var l = s;	
		var s = r;
	} 
	return gcd;
}
