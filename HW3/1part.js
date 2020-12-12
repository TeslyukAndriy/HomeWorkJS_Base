// 1. Сделать собственные примеры методов применяемых для массивов.

// Створюєм масив

var cars = ["Mercedes", "Audi", "BMW","Pedgeot","Ford","Citroen","Fiat","ZAZ"];
var sportCars = ["Ferrari","Mclaren","Porsche" ];

// Виводим в консоль

console.log("Existing array: ");
console.log(cars)

// Використання методу Join

var methodJoin = cars.join(" ;// ");

console.log("after Method Join: ");
console.log(methodJoin);

// Використання методу Split

var methodSplit = methodJoin.split(" ;// ");

console.log("after Method Split: ");
console.log(methodSplit);

// Використання методу concat

var sportCars = sportCars.concat("Lamborghini")

console.log(sportCars);

var ollCars = cars.concat(sportCars);

console.log("after Method concat(ollCars): ");
console.log(ollCars);

// Використання методу reverse

ollCars = ollCars.reverse();

console.log("after Method reverse(ollCars): ");
console.log(ollCars);

// Використання методу slice

var threeІportsСars = ollCars.slice(1,4);

console.log("after Method slice: ");
console.log(threeІportsСars);

// Використання методу splice

var deleteSportCars = ollCars.splice(0,4);

console.log("after Method splice: ");
console.log(deleteSportCars);

console.log("Remained in the array after deletion: ");
console.log(ollCars);

// Використання методу sort

ollCars.sort();

console.log("after Method sort: ");
console.log(ollCars);

// Використання методу push

ollCars1 = ollCars.push(deleteSportCars);

console.log("after Method push: ");
console.log(ollCars);        
console.log("Размер массива: " + ollCars1);

// Використання методу pop

var deletedElement = ollCars.pop();

console.log("after Method pop: ");
console.log("Remained in the array after deletion: ")
console.log(ollCars); 
console.log("What was deleted : ");
console.log(deletedElement); 

// Використання методу unshift

var newArrayCars = ollCars.unshift(deletedElement);

console.log("after Method unshift: ");
console.log(ollCars);
console.log("Размер массива: " + newArrayCars);

// Використання методу shift

var deleteFirstElementWithOllCars = ollCars.shift();

console.log("after Method shift: ");
console.log(ollCars);
console.log("Видалене значення: ")
console.log (deleteFirstElementWithOllCars);
