// assign temp value of celsius
let tempCelsius = 10;

// assign temp value of fahrenheit
let tempFahrenheit = 20;


function convertceltoKelvin(tempCelsius) {
    let tempKelvin = tempCelsius + 273.15;
    //formula of Celsius to Kelvin
    // 1°C + 273.15 = 274.15K
    return tempKelvin;
}

function convertfahtoKelvin(tempFahrenheit) {
    let tempKelvin = (tempFahrenheit - 32) * 5/9 + 273.15;
    //formula of Fahrenheit to Kelvin
    // (1°F − 32) × 5/9 + 273.15 = 255.928K
    return tempKelvin.toFixed(2);
}

console.log(convertceltoKelvin(tempCelsius));
console.log(convertfahtoKelvin(tempFahrenheit));