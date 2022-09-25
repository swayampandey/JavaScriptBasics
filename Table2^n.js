/**
 * Write a program that takes a command-line argument n and prints a table of the

powers of 2 that are less than or equal to 2^n.
 */

const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a number : "));

for(i =1; i <= number; i++){
    console.log(Math.pow(2,i));
}