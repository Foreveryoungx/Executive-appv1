import React from 'react';

import ImageGallery from "react-image-gallery";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpeg";
import img9 from "../Images/img9.jpg";
import img6 from "../Images/img6.jpg";
import {Box} from "@chakra-ui/react";
const images =[
    {
        original: `${img2}`,
    },
    {
        original: `${img1}`,
    },
    {
        original: `${img9}`,
    },
    {
        original: `${img6}`,
    }
]
function HaircutPhotos() {
    return (
        <>
            <Box
            rounded={"md"}>
            <ImageGallery items={images}/>
            </Box>
        </>
    );
}

export default HaircutPhotos;