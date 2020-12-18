// 3.  Создать игру "Камень-Ножницы-Бумага".
// Выбор компьютера определяется строкой:  
// "var computerChoice = Math.random();
// alert(computerChoice);".
// Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.





function myFunction4() {
    console.log("UYTRDFGHJKLKJHGFDFGBNM");
}


function myFunction1() {
    var stone = document.getElementById("stone");
    // console.log(stone);
    var textstone = stone.innerHTML;
    console.log(textstone);
    return result;
}
function myFunction2() {
    var scissors = document.getElementById("scissors");
    // console.log(scissors);
    var textScissors = scissors.innerHTML;
    console.log(textScissors);
    return result;
}
function myFunction3() {
    var paper = document.getElementById("paper");
    // console.log(paper);
    var textpaper = paper.innerHTML;
    console.log(textpaper);
    return result;
}
function random(){
var computerChoice = Math.random();
    // alert(computerChoice);
    Math.random()
    console.log(computerChoice);

if(computerChoice <= 0.33){
    computerChoice = "Камінь";
    console.log(computerChoice);

}
else if(computerChoice >= 0.63){
    computerChoice = "Ножниці";
    console.log(computerChoice);
}
else{
    computerChoice = "Папір";
    console.log(computerChoice);
}
return result;
};