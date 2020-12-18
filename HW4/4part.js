// 4. Напишите функцию, которая возвращает n-е число Фибоначчи. Для решения используйте цикл.

function fib(n) {
    var a = 1,
      b = 1;
    for (var i = 3; i <= n; i++) {
      var temp = a + b;
      a = b;
      b = temp;
    }
    return b;}


    console.log(fib(7))
