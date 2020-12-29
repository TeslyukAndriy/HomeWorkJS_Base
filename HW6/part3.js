// 3. Допишите функцию countOnline; используйте оператор for ... in в этой функции для циклического обхода пользователей в объекте users и возврата количества пользователей, для которых для свойства онлайн установлено значение true.

//         let users = {
//             Alan: {
//                 age: 27,
//                 online: false
//             },
//             Jeff: {
//                 age: 32,
//                 online: true
//             },
//             Sarah: {
//                 age: 48,
//                 online: false
//             },
//             Ryan: {
//                 age: 19,
//                 online: true
//             }
//         };

//         function countOnline(obj) {}

//         console.log(countOnline(users));

// OK


        let users = {
            Alan: {
                age: 27,
                online: false
            },
            Jeff: {
                age: 32,
                online: true
            },
            Sarah: {
                age: 48,
                online: false
            },
            Ryan: {
                age: 19,
                online: true
            }
        };

        function countOnline(users) {
            var count = 0;

            for (var a in users){
               if (users[a].online == true ){
                   count++
               }
            }
            return count;
        }

        console.log(countOnline(users));
