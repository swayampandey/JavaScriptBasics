/**
 * Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
 */
 const prompt = require("prompt-sync")();
 let number = parseInt(prompt("Enter a single digit number : "));
 
 switch(number){
     case 1:
         console.log("Unit");
         break;
         
     case 10:
         console.log("Ten");
         break;
                 
     case 100:
         console.log("Hundred");
         break;
                         
     case 1000:
         console.log("One Thousand");
         break;
                                 
     case 10000:
         console.log("Ten Thousand");
         break;
                                                                                           
     default:
         console.log("Invalid Number ! ");                                                                                                                                                                  case 0:
                                                 
 }