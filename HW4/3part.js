// 3.  Создать игру "Камень-Ножницы-Бумага".
// Выбор компьютера определяется строкой:  
// "var computerChoice = Math.random();
// alert(computerChoice);".
// Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.

var userChoice = prompt("Виберіть: (Камінь),(Ножиці),(Папір)");
console.log(userChoice);

var computerChoice = Math.random();
    //  alert(computerChoice);
    Math.random();
    console.log(computerChoice);

if(computerChoice <= 0.33)
{
    computerChoice = "Камінь";
    console.log(computerChoice);

}
else if(computerChoice >= 0.63)
{
    computerChoice = "Ножиці";
    console.log(computerChoice);
}
else {
    computerChoice = "Папір";
    console.log(computerChoice);
}

// console.log(viner);


// var viner = function(userChoice, computerChoice)
function viner(userChoice, computerChoice)
{
    if(userChoice == computerChoice)
    {
        // console.log("Нічия");
        result = "Нічия"
    }
    else{
        switch(userChoice)
        {
            case "Камінь":
                {
                    if(computerChoice === "Ножиці" )
                    {
                        // console.log("Ви виграли");
                        result = "Ви виграли";
                    }
                    if(computerChoice === "Папір")
                    {
                        // console.log("Переміг PC");
                        result = "Переміг PC";
                    }
                };
                break;
                
            case "Ножиці":
                {
                    if(computerChoice ==="Папір"){
                        // console.log("Ви виграли");
                        result = "Ви виграли";
                    }
                    if(computerChoice === "Камінь")
                    {
                        // console.log("Переміг PC");
                        result = "Переміг PC";
                    }
                };
                break;
                
            case "Папір":
                {
                    if(computerChoice === "Камінь"){
                        // console.log("Ви виграли");
                        result = "Ви виграли";
                    }
                    if(computerChoice === "Ножиці")
                    {
                        // console.log("Переміг PC");
                        result = "Переміг PC";
                    }
                };
                break;

            default :
                {
                    // console.log("Зроблено некоретний вибір");
                    result =  "Зроблено некоретний вибір";
                };
            
        };
    }
    return result;
}
var result = viner(userChoice, computerChoice);
console.log(result);
