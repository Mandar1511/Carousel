import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";
import img1 from "../images/img9.jpg";
import img2 from "../images/img8.jpg";
import img3 from "../images/img7.jpg";
import img4 from "../images/img6.jpg";
function Mandar(){
        return(
            <>
            <Carousel className="custom-style" autoPlay={true} interval={3000} infiniteLoop={true} animationHandler="fade" swipeable={false} >
            <div className="container" >
                    <img className="img" src={img1}  />
                    <div className="content">
                    <h1>This is heading 1</h1>
                    <p>This is paragraph 1, Lorem ipsum.</p>
                    </div>
             </div>
            <div className="container" >
                    <img className="img" src={img2}  />
                    <div className="content">
                    <h1>This is heading 2</h1>
                    <p>This is paragraph 2, Lorem ipsum.</p>
                    </div>
             </div>
            <div className="container" >
                    <img className="img" src={img3}  />
                    <div className="content">
                    <h1>This is heading 3</h1>
                    <p>This is paragraph 3, Lorem ipsum.</p>
                    </div>
             </div>
             <div className="container" >
                    <img className="img" src={img4}  />
                    <div className="content">
                    <h1>This is heading 4</h1>
                    <p>This is paragraph 4, Lorem ipsum.</p>
                    </div>
             </div>
            </Carousel>
            </>
        );
}
export default Mandar;