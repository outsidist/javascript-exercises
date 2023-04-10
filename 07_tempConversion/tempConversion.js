const convertToCelsius = function(deg) {
  //To convert to celsius subtract 32, divide by 1.8
  convertedToCelsius = ((parseFloat(deg) - 32) / 1.8).toFixed(1);
  return parseFloat(convertedToCelsius);
};

const convertToFahrenheit = function(deg) {
  //To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
  convertedToFahrenheit = ((parseFloat(deg)*1.8)+32).toFixed(1);
  return parseFloat(convertedToFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
