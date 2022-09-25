/*
Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
 */

const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a number : "));

if(number == 1){
    console.log("Unit");
}else if(number == 10){
    console.log("ten");
}else if(number == 100){
    console.log("hundred");
}else if(number == 1000){
    console.log("one thousand");
}else if(number == 10000){
    console.log("ten thousand");
}else{
    console.log("Invalid Input !");
}    