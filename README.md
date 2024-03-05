# temperature-converter

This package provides a function to convert temperature from one unit to another.

## Installation

To use this package, you can install it via npm:

```
npm install temperature-cvt
```

## Usage

```
const convertTemperature = require('temperature-cvt');

// Example: Convert 20 degrees Celsius to Fahrenheit
const result = convertTemperature(20, 'C', 'F');
console.log(result); // Output: 68
```

The convertTemperature function takes three parameters:

- value: The temperature value to convert.
- fromUnit: The source temperature unit (e.g., 'C' for Celsius).
- toUnit: The target temperature unit (e.g., 'F' for Fahrenheit).
