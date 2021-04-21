import logo from './logo.svg';
import './App.css';
import multiButton from './cgu_multiButton';
import HelloCGU from './HelloCGU';


/*function App() {
  return (
    <div className="App">
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
    </div>
  );
}*/
function App() {
  return(
    <div className="App">
      <div>
        {HelloCGU()}
      </div>
      <div>
        {multiButton(10)}
      </div>
  </div>
  );
}

export default App;
