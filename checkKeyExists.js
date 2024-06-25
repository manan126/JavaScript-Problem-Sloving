const obj = { name: "luffy", age: 20 };
const key = "name";

if (key in obj) {
    console.log("The key exists in the object.");
} else {
    console.log("The key does not exist in the object.");
}

