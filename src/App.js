import { useEffect } from 'react';
import Home from './Components/HomeComp/Home';
import NavBar from './Components/NavBar/NavBar';
import FeatureComp from './Components/Features/FeatureComp';
import Product from './Components/Product/Product';
import CardDeal from './Components/CardDeal/CardDeal';
import Client from './Components/Client/Client';
import Footer from './Components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css"
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({once: false});
    setTimeout(()=>{
      AOS.refresh();
    }, 1500)
  }, []);
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
        <Product/>
        <CardDeal/>
        <Client/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;


// https://github.com/adrianhajdin/project_hoobank/tree/main
// https://safemutual.com/