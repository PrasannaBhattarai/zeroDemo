import React from "react";
import './Home.css';
import pic1 from './pic1.JPG';
import picMain from './bigimg1.jpg';
import pic2 from './pic2.JPG';

function Home(){
    return(
        // window.onscroll = <ScrollFunction/>
        


    <div className="main-content">
        <div className="mainPic">
        <img src={picMain} alt="Section 1 Image"></img>
        </div>
        <div className="sub-div">
            <div className="section">
                <div className="img-section">
                <img src={pic1} alt="Section 1 Image"></img>
                 </div>
                <div className="text-box">
                    <h3>Section 1</h3>
                    <p>Sample Text</p>
                </div>
             </div>
        </div>
        
        <div className="sub-div">
            
            <div className="section">
                <div className="img-section">
            <img src={pic1} alt="Section 2 Image"></img>
            </div>
                 <div className="text-box">
                    <h3>Section 2</h3>
                    <p>Sample gyaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaat</p>
                </div>
               
             </div>
        </div>

        <div className="sub-div">
            <div className="section">
                <div className="img-section">
                <img src={pic2} alt="Section 1 Image"></img>
                 </div>
                <div className="text-box">
                    <h3>Section 1</h3>
                    <p>Sample Text</p>
                </div>
             </div>
        </div>
    </div>


    );
}

export default Home;