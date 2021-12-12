import React from 'react';
import { Zoom } from "react-slideshow-image";

import img1 from "../Images/img1.jpg";
import img8 from "../Images/img8.jpg";
import img9 from "../Images/img9.jpg";
import img6 from "../Images/img6.jpg";
const images = [img1, img8, img9, img6];
const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
};
function HaircutPhotos() {
    return (
        <div className="slide-container">
            <Zoom {...zoomOutProperties}>
                {images.map((each, index) => (
                    <img key={index} style={{ width: "100%", height:300 }} alt="haircuts slideshow" src={each} />
                ))}
            </Zoom>
        </div>
    );
}

export default HaircutPhotos;