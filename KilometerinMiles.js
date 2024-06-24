function kmToMiles(kilometers) {
    
    const miles = kilometers * 0.621371;
    return miles;
}


const kilometers = 20;
const miles = kmToMiles(kilometers);
console.log(`${kilometers} kilometers is equal to ${miles} miles.`);