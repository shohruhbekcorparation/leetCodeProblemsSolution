/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let kelvin  = celsius + 273.15, fahrenheit = celsius * 1.80 + 32.00;
    result = [];
    result.push(kelvin, fahrenheit);
    return result;
 
    
 };