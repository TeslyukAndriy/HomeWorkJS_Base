// 2. Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// OK 


var namberOne = +prompt("Введіть число");
var namberPower = +prompt("Введіть степінь");
var result

function sum() {
    var result = namberOne ** namberPower;
    console.log("sum result: " + result);
}
sum();