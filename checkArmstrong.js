// Check Armstrong Number
function checkArmstrong(num){

let sum = 0;
let temp = num;
while(num > 0){
    let digit =  num%10;
    sum = sum + digit*digit*digit;
    num = Math.floor(num / 10);
}
console.log(sum)
if(sum == temp){
    console.log("Armstrong Number")
}
else{
    console.log("Not a Armstrong Number")
}
}

num = 153
checkArmstrong(num)
