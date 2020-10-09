   module.exports = function toReadable (number) {
   const digits1 = ["", "one", "two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
   const digits2 = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
   let strDigits = [];
   let hundred = Math.trunc(number / 100);
   let doz = number % 100;
   let val = number % 10;
   if (number === 0){
      return "zero";
   }
   if (hundred){
      strDigits.push(digits1[hundred], `hundred`)
   }
   if(doz < 20){
      strDigits.push(digits1[doz]);
   }else{
      if(val == 0){
         strDigits.push(digits2[doz / 10]);
      }else{
         strDigits.push(digits2[Math.trunc(doz / 10)], digits1[val]);
      }
     
   }

   return strDigits.join(" ").trim();

}