// Functions for temperature conversion
function convertCelsiusToFahrenheit(celsiusValue) {
  if (isNaN(celsiusValue) || celsiusValue === "") {
    return "NaN";
  }
  return ((celsiusValue * 9) / 5 + 32).toFixed(2);
}

function convertFahrenheitToCelsius(fahrenheitValue) {
  if (isNaN(fahrenheitValue) || fahrenheitValue === "") {
    return "NaN";
  }
  return (((fahrenheitValue - 32) * 5) / 9).toFixed(2);
}

// Function to handle Celsius to Fahrenheit input and display
function handleCelsiusInput() {
  const celsiusValue = celsius.value;
  const calculatedFahrenheit = convertCelsiusToFahrenheit(celsiusValue);

  fahrenheit.value = calculatedFahrenheit;

  // Log the entered Celsius and calculated Fahrenheit
  console.log(
    `Celsius: ${celsiusValue}, Calculated Fahrenheit: ${calculatedFahrenheit}`
  );

  if (!celsiusValue) fahrenheit.value = "";
}

// Function to handle Fahrenheit to Celsius input and display
function handleFahrenheitInput() {
  const fahrenheitValue = fahrenheit.value;
  const calculatedCelsius = convertFahrenheitToCelsius(fahrenheitValue);

  celsius.value = calculatedCelsius;

  // Log the entered Fahrenheit and calculated Celsius
  console.log(
    `Fahrenheit: ${fahrenheitValue}, Calculated Celsius: ${calculatedCelsius}`
  );

  if (!fahrenheitValue) celsius.value = "";
}

module.exports = {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius,
  handleCelsiusInput,
  handleFahrenheitInput,
};
