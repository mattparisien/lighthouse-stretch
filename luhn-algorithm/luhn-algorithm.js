//Remove spaces
//First identify if its 16 digits
//Return an error right away if credit card length !== 16 digitds 
//Convert string to number
//Seperate each number according to their even/odd INDEXES
//Get sum off odd places & sum of even places
//Even must be doubled, if it ends up in a 2 digit number, add those digits together
//Add sum of even and sum of odd
//If this sum is divisible by 10, its a valid number, otherwise it's not 

const check = num => {
  let sumEven = 0;
  let arrayOfEven = [];
  let sumOdd = 0;
  let sumOfEvenOdd = 0;

  //Remove spaces if number contains spaces
   num = num.split("");
   num.forEach((val) => {
    if (val === ' ') {
      num.splice(num.indexOf(val), 1)
    }
   })

   //Return an error right away  if number doesn't have 16 digits
   if (num.length !== 16) {
     throw new Error("Credit card must have 16 digits.");
   }

   //Sum all values corresponding to odd indexes, & push values of even indexes into an array, and double those values
   for (i = num.length - 1; i >= 0; i--) {
     if (i % 2 !== 0) {
      sumOdd += Number(num[i]);
     }  else if (i % 2 === 0) {
        arrayOfEven.push(num[i] * 2);
     } 
   };

   //Check the length of each number in array, if num has 2 digits, add those digits together
   arrayOfEven = arrayOfEven.map(num => {
     if (num.toString().length === 2) {
       num = num.toString();
       num = Number(num[0]) + Number(num[1]);
     }
     return num;
   });

   //Add all of the array values together together to get the sum of all even numbers  
   sumEven = arrayOfEven.reduce((acc, value) => {
     //reduce runs every time it iterates through "value", which is the element in the array
     return acc + value; // acc will increase every time value is added to it
   }, 0);

   //Add sum of even numbers + sum of odd numbers together
   sumOfEvenOdd = sumEven + sumOdd;
   num = num.join("");

   //Returning string confirming valid card number if sum is divisible by 10
   if (sumOfEvenOdd % 10 === 0) {
     return `${num} is a valid number`;
   }
   //Returning string confirming invalid card number if sum is divisible by 10
   return `${num} is an invalid number`;
};

console.log(check("1615 3107 3127 2413"));

module.exports = check;

