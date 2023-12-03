import React from "react";
import './Footer1.css';
import insta from './insta.png';
import facebook from './Facebook_Logo_2023.png';
import {Link } from 'react-router-dom';


function Footer(){
    return(<>
        <hr></hr>
        <div className="socials">
        <p>Socials:</p>
        <a href="https://www.facebook.com/"><img src={facebook}></img></a>
        <a href="https://www.instagram.com/"><img src={insta}></img></a>
       
        </div>
        <div class="footer-basic">
    
            <ul class="list-inline">
                <li class="list-inline-item"><Link to="/">Home</Link></li>
                {/* <li class="list-inline-item"><Link to="#">Services</Link></li> */}
                <li class="list-inline-item"><Link to="/contact">ContactUs</Link></li>
                <li class="list-inline-item"><Link to="#">Terms</Link></li>
                <li class="list-inline-item"><Link to="#">Privacy Policy</Link></li>
            </ul>
            <p class="copyright">Company Name © 2018</p>
       
    
    </div>

        </>

    //     <div class="footer" id="footer">
    //         <hr></hr>
           
    //     <div class="contact">
    //         <p >Contact Us</p>
    //         <p >Phone no: 9800000000<br/>
    //             Email: syz@gmail.com</p>
    //     </div>
    //     <div class="social">
    //         <p>Socials:</p>
	// 		<img src="img/fb.png"></img>
    //         <img src="img/insta.png"></img>
    //     </div>
    // </div>

    );
}

export default Footer;