import React, { useEffect } from "react"; // Add useEffect import
// import logo from "./sun.svg";
import logo from "./logo.svg";
import "./App.css";
import { handleCelsiusInput, handleFahrenheitInput } from "./script";

function App() {
  useEffect(() => {
    const celsiusInput = document.querySelector("#celsius");
    const fahrenheitInput = document.querySelector("#fahrenheit");

    if (celsiusInput && fahrenheitInput) {
      // Attach event listeners
      celsiusInput.addEventListener("input", () =>
        handleCelsiusInput(celsiusInput, fahrenheitInput)
      );
      fahrenheitInput.addEventListener("input", () =>
        handleFahrenheitInput(fahrenheitInput, celsiusInput)
      );
    }

    // Cleanup event listeners when the component unmounts
    return () => {
      if (celsiusInput && fahrenheitInput) {
        celsiusInput.removeEventListener("input", () =>
          handleCelsiusInput(celsiusInput, fahrenheitInput)
        );
        fahrenheitInput.removeEventListener("input", () =>
          handleFahrenheitInput(fahrenheitInput, celsiusInput)
        );
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Convert the Temperature!</code>
        </p>

        <br />
        <div className="wrapper">
          <div className="input-box">
            <h6>Celsius</h6>
            <input type="number" id="celsius" />
          </div>
          <i className="icon">=</i>
          <div className="input-box">
            <h6>Fahrenheit</h6>
            <input type="number" id="fahrenheit" />
          </div>
        </div>
        <br />
        <p className="sm-test">COS40006 Software Deployment and Evolution</p>
        <br />
        <p className="xsm-test">Tested by Jest & Babel</p>
        <p className="xsm-test">Containerized by Docker </p>
        <p className="xsm-test">Deployed via Azure</p>
        <br />
      </header>
    </div>
  );
}

export default App;
