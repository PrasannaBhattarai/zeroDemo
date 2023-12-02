import React from "react";
import './Footer.css';

function Footer(){
    return(

        <div class="footer" id="footer">
            <hr></hr>
           
        <div class="contact">
            <p >Contact Us</p>
            <p >Phone no: 9800000000<br/>
                Email: syz@gmail.com</p>
        </div>
        <div class="social">
            <p>Socials:</p>
			<img src="img/fb.png"></img>
            <img src="img/insta.png"></img>
        </div>
    </div>

    );
}

export default Footer;