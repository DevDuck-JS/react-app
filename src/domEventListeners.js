// eventListeners.js
document.addEventListener("DOMContentLoaded", function () {
  const celsius = document.querySelector("#celsius");
  const fahrenheit = document.querySelector("#fahrenheit");

  // Attach event listeners
  celsius.addEventListener("input", () =>
    handleCelsiusInput(celsius, fahrenheit)
  );
  fahrenheit.addEventListener("input", () =>
    handleFahrenheitInput(fahrenheit, celsius)
  );
});
