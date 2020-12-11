// 1. По координатам двух точек, которые вводит пользователь, определить уравнение прямой, проходящей через эти точки.
// Общий вид уравнения: y = kx + b; где k = (y1 - y2) / (x1 - x2), b = y2 - k*x2.

// var y1;
// var y2;
// var x1;
// var x2;

var y1, y2, x1, x2;
var y1 = prompt('plise enter y1:');
var y2 = prompt('plise enter y2:');
var x1 = prompt('plise enter x1:');
var x2 = prompt('plise enter x2:');

console.log('y1:' + y1);
console.log('y2:' + y2);
console.log('x1:' + x1);
console.log('x2:' + x2);

var k = (y1 - y2)/(x1 - x2);
console.log('k:'+ k);

var b = y2 - k*x2;
console.log('b:'+ b);
var y = k+'x+' + b;
console.log('y='+ y);
