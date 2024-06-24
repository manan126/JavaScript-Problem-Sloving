function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

let celsiusTemp = 25;
let fahrenheitTemp = 77;

console.log(`${celsiusTemp}°C is equal to ${celsiusToFahrenheit(celsiusTemp)}°F`);
console.log(`${fahrenheitTemp}°F is equal to ${fahrenheitToCelsius(fahrenheitTemp)}°C`);