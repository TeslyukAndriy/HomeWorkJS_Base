// 2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.

var WhereAdd = prompt("Введіть значення після якого потрібно додати(Цукерки, Мандарини, Апельсини, Машина) ");
var WhatAdd = prompt("Що добавити : ")
var shoppingList = ["Цукерки", "Мандарини", "Апельсини", "Машина",];
console.log(WhatAdd);

    if ( WhereAdd == shoppingList[0] ){

             del = shoppingList.splice(1, 4);
             WhatAdd1 = shoppingList.push(WhatAdd);
             newShoppingList = shoppingList.push(del[0],del[1],del[2]);

            console.log("Новий список : ");
            console.log(shoppingList);
        }

    else if (WhereAdd == shoppingList[1]){
             del = shoppingList.splice(2, 3);
             WhatAdd1 = shoppingList.push(WhatAdd);
             newShoppingList = shoppingList.push(del[0],del[1]);

            console.log("Новий список : ");
            console.log(shoppingList);
        }

    else if ( WhereAdd == shoppingList[2] ){
             del = shoppingList.splice( 3 );
             WhatAdd1 = shoppingList.push(WhatAdd);
             newShoppingList = shoppingList.push(del[0]);

            console.log("Новий список : ");
            console.log(shoppingList); 
        }
    else if ( WhereAdd == shoppingList[3] ) {
             WhatAdd1 = shoppingList.push(WhatAdd);

            console.log("Новий список : ");
            console.log(shoppingList);
        }
    else {
            console.log("Данного слова нет");
    };
