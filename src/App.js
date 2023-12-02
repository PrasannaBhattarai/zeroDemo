
import './App.css';
import Navbar from './NavBar';
import AboutUs from './AboutUs';
import Products from './Products';
import Home from './Home.js';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Footer from './Footer.js';


function App() {
  return (
    <Router>
       <div className="App">
          <Navbar/>
  
          <Routes>
            <Route exact path="/" element= {<Home/>}/>
            <Route path="/products" element={<Products/>} />
            <Route path="/contact" element={<AboutUs/>} />
          </Routes>

          <Footer/>
        </div>
    </Router>
  );
}

export default App;
