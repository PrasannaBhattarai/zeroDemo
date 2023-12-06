import React from "react";
import './Home.css';
import pic1 from './pic1.JPG';
import picMain from './mainPic1.jpg';
import pic2 from './pic2.JPG';
import biogarbage from './biogarbage.jpeg';

import pan1 from "./pan2.jpg";
import pan2 from "./pan4.jpg";
import pan3 from "./pan5.jpg";
import pan4 from "./pan3.jpg";
import pan5 from "./pan1.jpg";

import week1 from './Week 1.jpg';
import week2 from './Week 2.jpg';
import week5 from './Week 5.jpg';
import week7 from './Week 7.jpg';

// import pan1 from "./competitive.jpg";
// import pan2 from "./climate friendly.jpg";
// import pan3 from "./hands.jpg";
// import pan4 from "./biobased.jpg";
// import pan5 from "./recycleable.jpg";

function Home(){
    return(
        // window.onscroll = <ScrollFunction/>
        


    <div className="main-content">

{/* <p>Eliminating material waste through regenerative products ♻️</p> */}

<div className="parallax-text"><span><mark>REGENERATIVE PRODUCTS</mark> TO ELIMINATE MATERIAL WASTE </span></div>
        <div className="mainPic">
        <img src={picMain} alt="Section 1 Image"></img>
        <p>How can materials contribute positively to the environment instead of causing pollution and waste? 
We take nature as an example - since in nature, there is no such thing as waste, instead resources are kept in continuous cycles.
</p>
        </div>


        <div className="sub-div">
            
            {/* <h3>ZERO</h3> */}
            <div className="section-1">
                <p><mark>ZERO</mark> is working to shift Kathmandu into being more sustainable. First, with biodegradable plastic alternatives made from corn. It 
                    has all the functionality of plastics, but whithout the same environment footprint.</p>
                <div className="img-section1">
                <img src={pic1} alt="Section 1 Image"></img>
                 </div>
                
             </div>
        </div>
        


       
        <div className="parallax-text"><span><mark>Degradation Process</mark> </span></div>
       
        <div className="degradation">
            <div className="deg-section">
                <div className="img-section">
                <img src={week1} alt="Section 1 Image"></img>
                <div className="text-box">
                    <h3>Week 1</h3>
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                 </div>
            
             </div>

             <div className="deg-section">
                <div className="img-section">
            <img src={week2} alt="Section 2 Image"></img>
            <div className="text-box">
                    <h3>Week 2</h3>
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>
               
            </div>
                 
             </div>

             <div className="deg-section">
                <div className="img-section">
            <img src={week5} alt="Section 2 Image"></img>
            <div className="text-box">
                    <h3>Week 5</h3>
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
               
            </div>
                 
             </div>
             <div className="deg-section">
                <div className="img-section">
            <img src={week7} alt="Section 2 Image"></img>
            <div className="text-box">
                    <h3>Week 7</h3>
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
               
            </div>
                 
             </div>
        </div>

{/* <div className="yellow-background">
                <div className="icon-background">
                    <div className="panels">
                        
                    <div class="panel-content">
                            <img src={week1} alt="Image 4"/>
                        </div>
                    </div>
                    <div className="panels">
                        <div class="panel-content">
                            <img src={week2} alt="Image 4"/>
                        </div>
                    </div>
                    <div className="panels">
                        <div class="panel-content">
                            <img src={week5} alt="Image 4"/>
                        </div>
                    </div>
                    <div className="panels">
                        <div class="panel-content">
                            <img src={week7} alt="Image 4"/>
                        </div>
                    </div>
                    <div className="panels">
                        <div class="panel-content">
                            <img src={pan4} alt="Image 5"/>
                        </div>
                    </div>
    </div>
</div> */}

<div className="parallax-text"><span><mark>Our Products</mark></span>
</div>
<br></br>

        {/* <div className="sub-div">
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
            <div className="text-box">
                    <h3>Section 2</h3>
                    <p>Sample </p>
                </div>
               
            </div>
                 
             </div>
        </div> */}

        <div className="sub-div">
            <div className="section">
                <div className="img-section">
                <img src={pic2} alt="Section 1 Image"></img>
                <div className="text-box">
                    <h3>Bio-Packaging Bag</h3>
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                 </div>
            
             </div>

             <div className="section">
                <div className="img-section">
            <img src={pic1} alt="Section 2 Image"></img>
            <div className="text-box">
                    <h3>Section 2</h3>
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>
               
            </div>
                 
             </div>

             <div className="section">
                <div className="img-section">
            <img src={biogarbage} alt="Section 2 Image"></img>
            <div className="text-box">
                    <h3>Bio-Garbage Bag</h3>
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
               
            </div>
                 
             </div>
        </div>
    </div>


    );
}

export default Home;