import logo from './logo.svg';
import './App.css';
import Home from './Components/HomeComp/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Components/NavBar/NavBar';
import FeatureComp from './Components/Features/FeatureComp';

function App() {
  return (
    <div className="App " style={{}}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <NavBar />
      <Home />
      <div className="containers">
        <FeatureComp />
      </div>
    </div>
  );
}

export default App;


// https://github.com/adrianhajdin/project_hoobank/tree/main