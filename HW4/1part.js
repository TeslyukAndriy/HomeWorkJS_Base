// 1. Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
// Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// Функция должна проверять корректность введенных чисел и знака операции.
// Все аргументы для функции принять от пользователя.

// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function mul(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }

// 
// 
function calculate(operand1,operand2,sign){

switch (sign) {
    case "+":
        result = operand1 + operand2;
        break;
    case "-":
        result = operand1 - operand2;
        break;
    case "*":
        result = operand1 * operand2;
        break;
    case "/":
        result = operand1 / operand2;
        break;
    default:
        result = alert(arithmeticAction + "- не является знаком арифметической операции")
}
    return result;
}
// 
// 
// 



do{
    var namberOne = +prompt("Введіть число №1");
}
while(isNaN(namberOne));

var arithmeticAction = prompt("Введіть знак арефметичної дії");

do{
    var namberTwo = +prompt("Введіть число №2");
}
while(isNaN(namberTwo));

var result = calculate(namberOne,namberTwo,arithmeticAction);


if (result != undefined) {
    console.log("Результат операции: " + result);
}

// var result = calculate();

// switch (arithmeticAction) {
//     case "+":
//         result = add(namberOne, namberTwo);
//         break;
//     case "-":
//         result = sub(namberOne, namberTwo);
//         break;
//     case "*":
//         result = mul(namberOne, namberTwo);
//         break;
//     case "/":
//         result = div(namberOne, namberTwo);
//         break;
//     default:
//         console.log( arithmeticAction + "- не является знаком арифметической операции");
// }

