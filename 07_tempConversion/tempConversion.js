const convertToCelsius = function(fahr) {
  let celCon = (fahr - 32) * 5/9;
  return Math.round(celCon * 10) / 10;
};

convertToCelsius(45);

const convertToFahrenheit = function(cel) {
  let fahrCon = (cel * 9/5) + 32;
  return Math.round(fahrCon * 10) / 10;
};

convertToFahrenheit(20);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
