import React from "react";
import './Home.css';
import pic1 from './pic1.JPG';
import picMain from './banana.jpg';
import pic2 from './pic2.JPG';
import pic3 from './bigimg.jpg';

// import pan1 from "./pan2.jpg";
// import pan2 from "./pan4.jpg";
// import pan3 from "./pan5.jpg";
// import pan4 from "./pan3.jpg";
// import pan5 from "./pan1.jpg";

import pan1 from "./competitive.jpg";
import pan2 from "./climate friendly.jpg";
import pan3 from "./hands.jpg";
import pan4 from "./biobased.jpg";
import pan5 from "./recycleable.jpg";

function Home() {
    return (
        <div className="main-content">
            <br/>
            <div className="mainPic">
                <img src={picMain} alt="Section 1 Image" />
                <br></br>
                <div className="parallax-text">Eliminating material waste through regenerative products ♻️</div>
            </div>
            <div className="sub-div">
                <div className="section">
                    <div className="img-section">
                        <img src={pic1} alt="Section 1 Image" />
                    </div>
                    <div className="text-box">
                        <h3>Introducing Zero's Bio Plastic</h3>
                        <p>Toxin free plastics</p>
                    </div>
                </div>
            </div>

            <div className="sub-div">
                <div className="section">
                    <div className="img-section">
                        <img src={pic3} alt="Section 2 Image" />
                    </div>
                    <div className="text-box">
                        <h3>Regenerative products to eliminate material waste.</h3>
                        <p>Health Hazard free products.</p>
                    </div>
                </div>
            </div>

            <div className="sub-div">
                <div className="section">
                    <div className="img-section">
                        <img src={pic2} alt="Section 1 Image" />
                    </div>
                    <div className="text-box">
                        <h3>Recyclable Products</h3>
                        <p>Stay Tuned for More!</p>
                    </div>
                </div>
            </div>
            
            <div className="yellow-background">
                <div className="icon-background">
                    <div className="panels">
                        
                    <div class="panel-content">
                            <img src={pan2} alt="Image 4"/>
                        </div>
                    </div>
                    <div className="panels">
                        <div class="panel-content">
                            <img src={pan1} alt="Image 4"/>
                        </div>
                    </div>
                    <div className="panels">
                        <div class="panel-content">
                            <img src={pan3} alt="Image 4"/>
                        </div>
                    </div>
                    <div className="panels">
                        <div class="panel-content">
                            <img src={pan5} alt="Image 4"/>
                        </div>
                    </div>
                    <div className="panels">
                        <div class="panel-content">
                            <img src={pan4} alt="Image 5"/>
                        </div>
                    </div>
    </div>
</div>

        </div>
    );
}

export default Home;
