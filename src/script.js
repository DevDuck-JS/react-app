// Functions for temperature conversion
export function convertCelsiusToFahrenheit(celsiusValue) {
  if (isNaN(celsiusValue) || celsiusValue === "") {
    return "NaN";
  }
  return ((celsiusValue * 9) / 5 + 32).toFixed(2);
}

export function convertFahrenheitToCelsius(fahrenheitValue) {
  if (isNaN(fahrenheitValue) || fahrenheitValue === "") {
    return "NaN";
  }
  return (((fahrenheitValue - 32) * 5) / 9).toFixed(2);
}

// Function to handle Celsius to Fahrenheit input and display
export function handleCelsiusInput(celsiusInput, fahrenheitInput) {
  const celsiusValue = celsiusInput.value;
  const calculatedFahrenheit = convertCelsiusToFahrenheit(celsiusValue);

  fahrenheitInput.value = calculatedFahrenheit;

  // Log the entered Celsius and calculated Fahrenheit
  console.log(
    `Celsius: ${celsiusValue}, Calculated Fahrenheit: ${calculatedFahrenheit}`
  );

  if (!celsiusValue) fahrenheitInput.value = "";
}

// Function to handle Fahrenheit to Celsius input and display
export function handleFahrenheitInput(fahrenheitInput, celsiusInput) {
  const fahrenheitValue = fahrenheitInput.value;
  const calculatedCelsius = convertFahrenheitToCelsius(fahrenheitValue);

  celsiusInput.value = calculatedCelsius;

  // Log the entered Fahrenheit and calculated Celsius
  console.log(
    `Fahrenheit: ${fahrenheitValue}, Calculated Celsius: ${calculatedCelsius}`
  );

  if (!fahrenheitValue) celsiusInput.value = "";
}
