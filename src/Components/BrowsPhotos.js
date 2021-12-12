import React from 'react';
import ImageGallery from 'react-image-gallery'

import Brows1 from "../Images/Brows1.jpg"

const images =[
    {
        original: `${Brows1}`,
    }
]

function BrowsPhotos(){
    return (
        <>
            <ImageGallery items={images}/>
        </>
    );
}

export default BrowsPhotos;