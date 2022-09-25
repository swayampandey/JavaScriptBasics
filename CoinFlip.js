/*
Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
*/

let flip = Math.floor(Math.random()*2)+1;
console.log("Rnadom number after fliping the coin is : "+flip);
if(flip == 1)
console.log("Its head ");
else 
console.log("its tail");