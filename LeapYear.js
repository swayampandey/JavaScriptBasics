/*
Write a program that takes a year as input and outputs the Year is a Leap Year or not
a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
divisible by 400.
*/

const prompt = require("prompt-sync")();
let year = parseInt(prompt("Enter any year : "));
console.log("Entered year is : " +year);

if(year % 400 == 0 && year % 100 == 0 || year % 100 != 0 && year % 4 == 0)
    console.log(+year +" is " + "Leap Year");
    else
    console.log(+year +" is " + "Leap Year");