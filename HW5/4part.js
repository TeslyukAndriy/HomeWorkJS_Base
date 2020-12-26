// 4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
// будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
// Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//     • "director" — 3000;
//     • "manager" — 1500;
//     • "programmer" — 2000;
//     • для остальных значений — 1000.
// После выполнения функции — вывести информацию о сотрудниках.
// OK


var employees = [
    e1 = {
        name:prompt("Enter the employee's name"),
        sName:prompt("Enter the employee's last name"),
        age: + prompt("Age of the employee"),
        occupation:prompt("Occupation"),
        // show:function(){
        //     console.log("Employee's name : " + this.name);
        //     console.log("employee's last name : " + this.sName);
        //     console.log("Age : " + this.age);
        //     console.log("Employee salary : " + this.occupation);
        // }
    }, 
    e2 = {
        name:prompt("Enter the employee's name"),
        sName:prompt("Enter the employee's last name"),
        age: + prompt("Age of the employee"),
        occupation:prompt("Occupation"),
        // show:function(){
        //     console.log("Employee's name : " + this.name);
        //     console.log("employee's last name : " + this.sName);
        //     console.log("Age : " + this.age);
        //     console.log("Employee salary : " + this.occupation);
        // }
    }, 
    e3 = {
        name:prompt("Enter the employee's name"),
        sName:prompt("Enter the employee's last name"),
        age: + prompt("Age of the employee"),
        occupation:prompt("Occupation"),
        // show:function(){
        //     console.log("Employee's name : " + this.name);
        //     console.log("employee's last name : " + this.sName);
        //     console.log("Age : " + this.age);
        //     console.log("Employee salary : " + this.occupation);
        // }
    }, 
    e4 = {
        name:prompt("Enter the employee's name"),
        sName:prompt("Enter the employee's last name"),
        age: + prompt("Age of the employee"),
        occupation:prompt("Occupation"),
        // show:function(){
        //     console.log("Employee's name : " + this.name);
        //     console.log("employee's last name : " + this.sName);
        //     console.log("Age : " + this.age);
        //     console.log("Employee salary : " + this.occupation);
        // }
    }, 
];

// console.log(employees[0].e1.show());
// e1.show();
// e2.show();
// e3.show();
// e4.show();
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


for (var i = 0; i < employees.length; i++) {
    console.log("Employee's name : " + employees[i].name);
    console.log("employee's last name : " + employees[i].sName);
    console.log("Age: " + employees[i].age);
    console.log("Occupation: " + employees[i].occupation);
    console.log("Salary: " + employees[i].salary);
}