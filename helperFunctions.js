/*----------------------------------------------------------------
Greatest Common Divisor (GCD) helperFunctions.js

By Laurence Castagnoli
date: 7 Feb 2016
-----------------------------------------------------------------*/
var doc = document;
var n1Field = doc.getElementById('n1Field');
var n2Field = doc.getElementById('n2Field');
var answerField = doc.getElementById('answerField');

function main() {

   if ( isScriptMissing() ) { return }

   var input = document.querySelectorAll('input');
   NodeList.prototype.forEach = Array.prototype.forEach
   input.forEach(function(child) {
      child.addEventListener('input', function() {
            answerField.innerHTML = euclideanAlgorithm(n1Field.value, n2Field.value);
      });
   });
}

function isScriptMissing() {
   if ( typeof euclideanAlgorithm != 'function' ) {
      answerField.style.color = "red";
      answerField.text = "gcd.js not found";
      return true
   } 
   return false
}