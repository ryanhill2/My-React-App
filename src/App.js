import logo from './logo.svg';
import './App.css';
import MyFirstComponent from "./Components/MyFirstComponent";
import ComponentWithButton from './Components/ComponentWithButton'
import ComponentWithState from './Components/ComponentWithState'
import Posts from './Components/Post'
import PostForm from './Components/Postform'

function App() {
  return (
    <div className="App">
      <ComponentWithButton/>
      <ComponentWithState/>
      <PostForm/>
      <Posts/>
    
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
