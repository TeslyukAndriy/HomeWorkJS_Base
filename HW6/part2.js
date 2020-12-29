// 2. Завершите написание функции getArrayOfUsers, чтобы она возвращала массив, содержащий все свойства объекта, который он получает в качестве аргумента.
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


        function getArrayOfUsers(obj) {
            return Object.values(obj);
        }

        console.log(getArrayOfUsers(users));