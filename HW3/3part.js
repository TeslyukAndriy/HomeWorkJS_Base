// 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. Размер каждого вложенного массива - 3.

var Array1 = new Array(0);
var Array2 = ["even","even" ,"even"];
var Array3 = ["odd","odd" ,"odd"];



var arraySize = prompt("Вкажіть розмір масива : ");

for (var i = 0; i < arraySize; i++){

    if (i % 2 === 0){
        var newLength = Array1.push(Array2);   
    }
    else {
        var newLength = Array1.push(Array3)
    }
}

console.log(Array1);