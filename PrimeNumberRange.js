/**
 * Extend the program to take a range of number as input and output the Prime
Numbers in that range.
                 --->>> let input lower range = 10
                 let input upper range = 30

*/

const prompt = require("prompt-sync")();
let lowerRange = parseInt(prompt("Enter lower range : "));
let upperRange = parseInt(prompt("Enter upper Range : "));
//nested for loop to find prime number b/w two numbers.
console.log(`Prime numbers between ${lowerRange} and ${upperRange} are : `);
for(i = lowerRange; i <= upperRange; i++){ // i b/w lower range and upper range
    for(j = 2; j <= i; j++){               // least prime number is 2
        if(i%j == 0)
            break; 
    }
    if(i == j)
    console.log(j);
}

