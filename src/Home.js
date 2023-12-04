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
                    <p>Sample </p>
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