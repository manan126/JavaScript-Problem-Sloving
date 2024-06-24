// let num1 = 2;
// let num2 = 4;

// function swap(a, b) {
//     a = a + b;
//     b = a - b;
//     a = a - b;
//     return [a, b]; 
// }

// [num1, num2] = swap(num1, num2); 

// console.log(`num1: ${num1}, num2: ${num2}`);


// Second Method

function swap(a, b) {
    return [b, a]; 
}


let num1 = 2;
let num2 = 4;

[num1, num2] = swap(num1, num2);

console.log(`num1: ${num1}, num2: ${num2}`);

