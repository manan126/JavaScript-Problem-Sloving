// Get File Extension

function getExtension(filename){
   let extension = filename.split(".").pop()
   return extension
}


const fname = "anime.png";

console.log(getExtension(fname))