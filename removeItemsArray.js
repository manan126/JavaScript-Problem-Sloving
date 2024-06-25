function removeItemFromArray(array, itemToRemove) {

        return array.filter(item => item !== itemToRemove );
}

const originalArray = [1, "Manan", 3, 4, 5];
const newArray = removeItemFromArray(originalArray, "Manan");

console.log(newArray);

