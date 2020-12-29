// 4. Используйте метод some внутри функции checkPositive, чтобы проверить, является ли какой-либо элемент в arr положительным. Функция должна возвращать логическое значение.
// OK
function checkPositive(arr) {

    var a = arr.some(function (b) {
        return b > 0
    })
    console.log(a)

    var positiv = arr.filter(function (namber) {
        return namber > 0
    })
    console.log(positiv)
}

checkPositive([1, 2, 3, -4, 5]);
