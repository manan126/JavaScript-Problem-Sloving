
function RemoveDuplicatesItems(array1, array2) {
    return [...new Set([...array1, ...array2])]; 
}


const array1 = [1, 2, 3, 4,"Luffy","Zoro"];
const array2 = [3, 4, 5, 6,"Naruto","Sasuke"];
const mergedArray = RemoveDuplicatesItems(array1, array2);

console.log(mergedArray); 