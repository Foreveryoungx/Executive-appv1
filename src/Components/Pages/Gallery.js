import React from 'react';
import {Container} from "@chakra-ui/react";
import HeroL from "../HeroL";


function Gallery() {
    return (
        <>
            <Container
                maxW='container.xl'
                centerContent
                padding={"10px"}
                bgColor={"#022038"}>
                <HeroL/>
            </Container>
        </>
    );
}

export default Gallery;