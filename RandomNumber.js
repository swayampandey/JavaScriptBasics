/*
Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum value
*/
// math.random()*(max – min) + min
let num1 = Math.floor(Math.random()*(999-100) + 100);
let num2 = Math.floor(Math.random()*(999-100) + 100);
let num3 = Math.floor(Math.random()*(999-100) + 100);
let num4 = Math.floor(Math.random()*(999-100) + 100);
let num5 = Math.floor(Math.random()*(999-100) + 100);

console.log("First Random Number : "+num1);
console.log("Second Random Number : "+num2);
console.log("Third Random Number : "+num3);
console.log("Fourth Random Number : "+num4);
console.log("Fifth Random Number : "+num5);

if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
console.log("Maximum number is : " +num1);
}
else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
    console.log("Maximum number is : " +num2);
}
else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
    console.log("Maximum number is : " +num3);
}
else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
    console.log("Maximum number is : " +num4);
}
else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4)
    console.log("Maximum number is : " +num5);

 if (num1 < num2 && num1 < num3 && num1 < num && num < num) {
        console.log("Minimum number is : " + num1);
    }

else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) {
        console.log("Minimum number is : " + num2);

} 
else if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5) {
        console.log("Minimum number is : " + num3);

}
else if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5) {
        console.log("Minimum number is : " + num4);

}
else if (num5 < num1 && num5 < num2 && num5 < num3 && num5 <  num4) {
        console.log("Minimum number is : " + num5);

    }

