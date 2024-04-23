import { useEffect } from 'react';
import Home from './Components/HomeComp/Home';
import NavBar from './Components/NavBar/NavBar';
import FeatureComp from './Components/Features/FeatureComp';
import Product from './Components/Product/Product';
import CardDeal from './Components/CardDeal/CardDeal';
import Client from './Components/Client/Client';
import Footer from './Components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css"
import { FaCircleArrowUp } from "react-icons/fa6";
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({ once: false });
    setTimeout(() => {
      AOS.refresh();
    }, 1500)
  }, []);

 const  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="App " style={{}}>
      <NavBar />
      <Home />
      <div className='scrollToTop' >
        <button onClick={scrollToTop}><FaCircleArrowUp /></button>
      </div>

      <div className="containers">
        <FeatureComp />
        <Product />
        <CardDeal />
        <Client />
        <Footer />
      </div>

    </div>
  );
}

export default App;


// https://github.com/adrianhajdin/project_hoobank/tree/main
// https://safemutual.com/