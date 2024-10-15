// import {
//   convertCelsiusToFahrenheit,
//   convertFahrenheitToCelsius,
// } from "./script";

// Import the functions from the script file
const {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius,
} = require("./script");

describe("Temperature Conversion", () => {
  // Test for Celsius to Fahrenheit conversion
  test("should correctly convert Celsius to Fahrenheit", () => {
    expect(convertCelsiusToFahrenheit(0)).toBe("32.00");
    expect(convertCelsiusToFahrenheit(100)).toBe("212.00");
    expect(convertCelsiusToFahrenheit(-40)).toBe("-40.00");
  });

  // Test for Fahrenheit to Celsius conversion
  test("should correctly convert Fahrenheit to Celsius", () => {
    expect(convertFahrenheitToCelsius(32)).toBe("0.00");
    expect(convertFahrenheitToCelsius(212)).toBe("100.00");
    expect(convertFahrenheitToCelsius(-40)).toBe("-40.00");
  });

  // Edge case testing for empty input
  test("should return NaN when given invalid or empty input", () => {
    expect(convertCelsiusToFahrenheit("")).toBe("NaN");
    expect(convertFahrenheitToCelsius("")).toBe("NaN");
  });
});
