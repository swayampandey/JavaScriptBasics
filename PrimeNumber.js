/**
 * Write a program that takes a input and determines if the number is a prime.
 */
const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a number : "));
let count = 0;

for(i = 1; i<= number; i++){
    if(number%i == 0){
        count++;
    }
}
if(count ==2 )
console.log(`${number} is a prime number`);
else
console.log(`${number} is not a prime number`);