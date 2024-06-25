
function decimalToBinary(decimal) {
    let binary = '';
    if(decimal==0){
        return 0
    }
    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
    }
    return binary 
  }
  
  const decimalNumber = 10;
  console.log(decimalToBinaryUsingLoop(decimalNumber)); 

// function decimalToBinary(decimal) {
//     return decimal.toString(2);
//   }
// const decimalNumber = 10;
// console.log(decimalToBinary(decimalNumber)); 