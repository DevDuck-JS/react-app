import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div class="wrapper">
          <div class="input-box">
            <h6>Celcius</h6>
            <input type="number" id="celsius" />
          </div>
          <i class="icon">=</i>
          <div class="input-box">
            <h6>Fahrenheit</h6>
            <input type="number" id="fahrenheit" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
