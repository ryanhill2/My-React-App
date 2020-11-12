import logo from './logo.svg';
import './App.css';
import MyFirstComponent from "./Components/MyFirstComponent";
import ComponentWithButton from './Components/ComponentWithButton'

function App() {
  return (
    <div className="App">
      <ComponentWithButton/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <MyFirstComponent/>
    </div>
  );
}

export default App;
