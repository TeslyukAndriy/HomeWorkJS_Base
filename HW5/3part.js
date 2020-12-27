// 3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
// содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
// Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.
// OK


// var answer = confirm("Вы делаете утреннюю зарядку?");


function addAmployee() {
    var employee = {};
    employee.name = prompt("Enter the employee's name");
    employee.sName = prompt("Enter the employee's last name");
    employee.age = + prompt("Age of the employee");
    employee.occupation = prompt("occupation");
    employee.show = function () {
        console.log("Employee's name : " + this.name);
        console.log("employee's last name : " + this.sName);
        console.log("Age : " + this.age);
        console.log("occupation : " + this.occupation);
    };

    return employee;
};


var allEmployees = [];

while (confirm("Ввести інформацію співробітника? ")) {
    var a = addAmployee();
    allEmployees.push(a);

}


console.log(allEmployees);
allEmployees.forEach(employee => {
    employee.show();
});


// var employees = [
//     e1 = {
//         name:prompt("Enter the employee's name"),
//         sName:prompt("Enter the employee's last name"),
//         age: + prompt("Age of the employee"),
//         occupation:prompt("occupation"),
//         show:function(){
//             console.log("Employee's name : " + this.name);
//             console.log("employee's last name : " + this.sName);
//             console.log("Age : " + this.age);
//             console.log("occupation : " + this.occupation);
//         }
//     }, 
//     e2 = {
//         name:prompt("Enter the employee's name"),
//         sName:prompt("Enter the employee's last name"),
//         age: + prompt("Age of the employee"),
//         occupation:prompt("occupation"),
//         show:function(){
//             console.log("Employee's name : " + this.name);
//             console.log("employee's last name : " + this.sName);
//             console.log("Age : " + this.age);
//             console.log("occupation : " + this.occupation);
//         }
//     }, 
//     e3 = {
//         name:prompt("Enter the employee's name"),
//         sName:prompt("Enter the employee's last name"),
//         age: + prompt("Age of the employee"),
//         occupation:prompt("occupation"),
//         show:function(){
//             console.log("Employee's name : " + this.name);
//             console.log("employee's last name : " + this.sName);
//             console.log("Age : " + this.age);
//             console.log("occupation : " + this.occupation);
//         }
//     }, 
//     e4 = {
//         name:prompt("Enter the employee's name"),
//         sName:prompt("Enter the employee's last name"),
//         age: + prompt("Age of the employee"),
//         occupation:prompt("occupation"),
//         show:function(){
//             console.log("Employee's name : " + this.name);
//             console.log("employee's last name : " + this.sName);
//             console.log("Age : " + this.age);
//             console.log("occupation : " + this.occupation);
//         }
//     }, 
// ];

// console.log(employees[0].e1.show());
// e1.show();
// e2.show();
// e3.show();
// e4.show();
// for (var i = 0; i < employees.length; i++) {
//     employees[i].show();
// }