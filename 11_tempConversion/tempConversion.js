const convertToCelsius = function(fahrenheit) {
  //Convert to celcius using the formula
  const celcius = (fahrenheit - 32) * 5 / 9;
  //Round the number up to one decimal
  const rounded = Math.round(celcius * 10) / 10;
  return rounded;


};

const convertToFahrenheit = function(celcius) {

  //Same as conversion to celcius but other way around
  const fahrenheit = celcius * (9 / 5) + 32;
  
  const rounded = Math.round(fahrenheit * 10) / 10;

  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
