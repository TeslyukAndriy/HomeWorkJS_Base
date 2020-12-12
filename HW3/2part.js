// 2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.

var WhereAdd = +prompt("Введіть місце куди додати (де для №1 потрібно ввести 0) ");
var WhatAdd = +prompt("Що добавити : ")
var shoppingList = new Array(0);

shoppingList[WhereAdd] = WhatAdd;

console.log(shoppingList);
