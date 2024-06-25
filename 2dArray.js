

function createTwoDimensionalArray(rows,columns){
let arr = [];

for (let i = 0; i < rows; i++) {
  arr[i] = [];
  for (let j = 0; j < columns; j++) {
    arr[i][j] = i;
  }
}
return arr;
}

let  row = 3
let col = 3
console.log(createTwoDimensionalArray(row,col));



// const array = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// console.log(array[1][1])