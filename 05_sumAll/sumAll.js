const sumAll = function(num, num2) {
   let sum = 0;
   /*if (isNaN(num) || isNaN(num2)) {
    return "ERROR";
   } */
   /*if (typeof num == "number" && typeof num2 == "number") */
   if (!Number.isInteger(num) || !Number.isInteger(num2)) return "ERROR";
    if (num < 0 || num2 < 0) {
    return "ERROR";
   }
   else if (num > num2) {
    for (let i = num2; i <= num; i++) {
        sum += i;
    }
   }

   for (let i = num; i <= num2; i++) {
    sum += i;
   }
    

   console.log(sum);
   return sum;
   

};

sumAll(2, 4);

// Do not edit below this line
module.exports = sumAll;
