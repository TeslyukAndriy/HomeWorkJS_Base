// 4. Дано два числа A и B где (A<B). 
// Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В. 
// Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.   

var a = +prompt("Введіть 1");
var b = prompt("Введіть 2");
var sum = 0;

var c = a - (a%2)+1;
    while(c<b){
        alert(c);
        c +=2
    }

    while(a<b){
        a++;
        if(a<b){
            sum+=a;
        }
    }
    alert(sum);