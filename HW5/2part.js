// 2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
// Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
// В зависимости от принятого знака операции, вызвать соответствующий метод.

// Обєкт із методами для калькулятора
var calculator = {
    sum: function (a, b) {
        var result = a + b;
        console.log(result);
    },
    sub: function (a, b) {
        var result = a - b;
        console.log(result);
    },
    mul: function (a, b) {
        var result = a * b;
        console.log(result);
    },
    div: function (a, b) {
        var result = a / b;
        console.log(result);
    },
}
// Ведання чисел та знаку арефметичної дії
do{
    var namberOne = +prompt("Введіть число №1");
}
while(isNaN(namberOne));

var arithmeticAction = prompt("Введіть знак арефметичної дії");

do{
    var namberTwo = +prompt("Введіть число №2");
}
while(isNaN(namberTwo));

// Перебираєм яку дію потрібно виконати в залежності від оператора

if (arithmeticAction == "+") {
    calculator.sum(namberOne,namberTwo);
} else if (arithmeticAction == "-") {
    calculator.sub(namberOne,namberTwo);
} else if (arithmeticAction == "*") {
    calculator.mul(namberOne,namberTwo);
} else if (arithmeticAction == "/") {
    calculator.div(namberOne,namberTwo);
} else {
    console.log("Невірний оператор");
}