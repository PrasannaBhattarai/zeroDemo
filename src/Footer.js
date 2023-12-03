import React from "react";
import './Footer1.css';
import insta from './insta.png';
import facebook from './Facebook_Logo_2023.png';
import {Link } from 'react-router-dom';


function Footer(){
    return(<>
        <hr></hr>
        
        <div class="footer-basic">
        <div className="socials">
        <h4>Socials:</h4>
        <a href="https://www.facebook.com/zerocircular"><img src={facebook}></img></a>
        <a href="https://www.instagram.com/zero.circular/"><img src={insta}></img></a>
       
        </div>
    
            <ul class="list-inline">
                <li class="list-inline-item"><Link to="/">Home</Link></li>
                <li class="list-inline-item"><Link to="/contact">Contact Us</Link></li>
                <li class="list-inline-item"><Link to="#">Terms</Link></li>
                <li class="list-inline-item"><Link to="#">Privacy Policy</Link></li>
            </ul>
            <p class="copyright">Zero © 2023</p>
       
    
    </div>

        </>


    );
}

export default Footer;