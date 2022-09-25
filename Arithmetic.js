/*
Enter 3 Numbers do following arithmetic operation and find the one that
is maximum and minimum
1. a + b * c 3. c + a / b
2. a % b + c 4. a * b + c
*/
const prompt = require("prompt-sync")();
let a = parseInt(prompt("Enter first number : "));
let b = parseInt(prompt("Enter second number : "));
let c = parseInt(prompt("Enter third number : "));

const sum1 = a + b * c ;
const sum2 = a % b + c;
const sum3 = c + a / b;
const sum4 = a * b + c;
/* using Template Literals-->> Template literals are strings that allow embadded expressions,
which will be evaluated and then turned into a resulting string
*/
console.log(`sum1 is ${sum1} sum2 is ${sum2} sum3 is ${sum3} sum4 is ${sum4} `);
// finding maximum 
if(sum1 > sum2 && sum1 > sum3 && sum1 > sum4){
    console.log(`${sum1} is maximum`);
}
else if(sum2 > sum1 && sum2 > sum3 && sum2 > sum4){
    console.log(`${sum2} is maximum`);
}
else if(sum3 > sum1 && sum3 > sum2 && sum3 > sum4){
    console.log(`${sum3} is maximum`);
}
else
    console.log(`${sum4} is maximum`);
// finding minimum

if(sum1 < sum2 && sum1 < sum3 && sum1 < sum4){
    console.log(`${sum1} is minimum`);
}
else if(sum2 < sum1 && sum2 < sum3 && sum2 < sum4){
    console.log(`${sum2} is minimum`);
}
else if(sum3 < sum1 && sum3 < sum2 && sum3 < sum4){
    console.log(`${sum3} is minimum`);
}
else
    console.log(`${sum4} is minimum`);
    
