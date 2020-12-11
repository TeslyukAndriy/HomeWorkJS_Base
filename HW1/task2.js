// 2. Обменять значения двух переменных, используя третью (буферную) переменную.

var a=4;
var b=8;
var c;


console.log('befor exchenge');
console.log('a:'+a);
console.log('a:'+b);
var c = a;
var a = b;
var b = c;
console.log('after exchenge');
console.log('a:'+a);
console.log('a:'+b);
