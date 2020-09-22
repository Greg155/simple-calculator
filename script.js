console.log("Hello world");

let firstValue = 0;
console.log(firstValue);

firstValue = parseInt(prompt("Enter votre premier nombre :"));
console.log(firstValue);

let operator;
do{
    operator = prompt("Manipulation : + , - , * , / ou %");
    console.log(operator);
}while(operator != "+" && operator != "-" && operator != "/" && operator != "*" && operator != "%");


let secondValue = parseInt(prompt("Enter votre second nombre :"));
console.log(secondValue);



function addition(a,b){
    return (a+b);
}

function soustraction(a,b){
    return (a-b);
}

function multiplication(a,b){
    return a*b;
}

function divison(a,b){
    return (a/b);
}

function modulo(a,b){
    return (a%b);
}

function calcul(callback){
    let result = callback(firstValue,secondValue);
    console.log(result);
    console.log("Le resultat du calcul vaut : " + result);
}


switch (operator){
    case "+" :
        calcul(addition);
        break;
    case "-" :
        calcul(soustraction);
        break;    
    case "*" :
        calcul(multiplication);
        break;
    case "/" :
        calcul(divison);
        break; 
    case "%" :
        calcul(modulo);
        break;
    default : 
    console.log("Sorry, can't do it"); 
}

