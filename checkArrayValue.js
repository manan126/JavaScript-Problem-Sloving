function arrayContainsValue(array, value) {
    
    return array.includes(value);
}


const myArray = [1, "Manan", 3, 4, 5];
const valueToCheck = "Manan";


console.log(arrayContainsValue(myArray, valueToCheck)); 