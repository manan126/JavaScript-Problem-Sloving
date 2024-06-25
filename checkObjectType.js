// Check if An Object is An Array

function checkIfArray(object) {
    return Array.isArray(object);
}

const myArray = [1, 2, 3];
const myObject = { name: "Luffy", age: 20 };

console.log(checkIfArray(myArray)); 
console.log(checkIfArray(myObject)); 


console.log(typeof(myArray) );