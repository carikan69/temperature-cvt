const convert = require('convert-units');

const convertTemperature = (value, fromUnit, toUnit) => {
  return convert(value).from(fromUnit).to(toUnit);
};

module.exports = convertTemperature;