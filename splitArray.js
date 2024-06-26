// Split Array into Chunks

function splitArrayIntoChunks(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

const Arr = [ 5, 9, 3,'zoro', 21, 5, 6, 7, 8,'manan'];
const chunkSize = 3;
const newArr = splitArrayIntoChunks(Arr, chunkSize);

console.log(newArr);
