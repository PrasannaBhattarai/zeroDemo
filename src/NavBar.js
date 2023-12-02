import React from 'react';
import './NavBar.css';
import {Link } from 'react-router-dom';
import logo from './zeroLogo.png';

const Navbar = () => {
  return (<>
    <nav className='nav'>
      <img src={logo}></img>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link  to="/products">Products</Link>
        </li>
        <li>
          <Link  to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  
    </>
    
  );
}

export default Navbar;

