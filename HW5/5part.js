// 5. Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
// Параметр для сортировки принимается от пользователя.
// После выполнения функции — вывести информацию о сотрудниках.
// OK

var employees = [
    e1 = {
        name:prompt("Enter the employee's name"),
        sName:prompt("Enter the employee's last name"),
        age: + prompt("Age of the employee"),
        occupation:prompt("Occupation"),
    }, 
    e2 = {
        name:prompt("Enter the employee's name"),
        sName:prompt("Enter the employee's last name"),
        age: + prompt("Age of the employee"),
        occupation:prompt("Occupation"),
    }, 
    e3 = {
        name:prompt("Enter the employee's name"),
        sName:prompt("Enter the employee's last name"),
        age: + prompt("Age of the employee"),
        occupation:prompt("Occupation"),
    }, 
    e4 = {
        name:prompt("Enter the employee's name"),
        sName:prompt("Enter the employee's last name"),
        age: + prompt("Age of the employee"),
        occupation:prompt("Occupation"),
    }, 
];

function addSalary(employees){
for (var i = 0; i < employees.length; i++) {
    switch (employees[i].occupation){
        case "director" :
            employees[i].salary = 3000;
            break;
        case "manager" :
            employees[i].salary = 1500;
            break;
        case "programmer" :
            employees[i].salary = 2000;
            break;
        default:
            employees[i].salary = 1000;  
    };
};
};

addSalary(employees);

var crit = prompt("Enter criteria (name, sName, age, salary): ");
employees.sort (function(a, b) {
            switch (crit) {
                case "name":
                    if (a["name"] > b["name"]) {
                        return 1;
                    }
                    else if (a["name"] < b["name"]) {
                        return -1;
                    } else {return 0;}
                    break;
                case "sName":
                    if (a["sName"] > b["sName"]) {
                        return 1;
                    }
                    else if (a["sName"] < b["sName"]) {
                        return -1;
                    } else {return 0;}
                    break;
                case "age":
                    return a["age"] - b["age"];
                    break;
                case "salary":
                    return a["salary"] - b["salary"];
                    break;
                default:
                    alert("None");
            }
        });


for (var i = 0; i < employees.length; i++) {
    console.log("Employee's name : " + employees[i].name);
    console.log("employee's last name : " + employees[i].sName);
    console.log("Age: " + employees[i].age);
    console.log("Occupation: " + employees[i].occupation);
    console.log("Salary: " + employees[i].salary);
}






