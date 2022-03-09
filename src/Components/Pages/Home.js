import React from 'react';
import {Flex, SimpleGrid} from "@chakra-ui/react";
import Logo from '../../Images/Logo.PNG'
import ImageCollage from '../ImageCollage';
import Brows from "../../Images/Brows1.jpg"
import img1 from "../../Images/img1.jpg"
import img9 from "../../Images/img9.jpg"
import img8 from "../../Images/img8.jpg"
import img6 from "../../Images/img6.jpg"
import img2 from "../../Images/img2.jpeg"
import img3 from "../../Images/img3.jpeg"
import img4 from "../../Images/img4.jpeg"
import img5 from "../../Images/img5.jpeg"
import Services from './Services';
import About from './About';

const Home = () => {
    return (
        <>
            <Flex
                bgColor={'#022038'}
                bgImage={Logo}
                bgRepeat={'round'}
                bgAttachment={'fixed'}
                postion={'relative'}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <SimpleGrid columns={3} spacing={10} row={3}>
                    <ImageCollage img={Brows}/>
                    <ImageCollage img={img1}/>
                    <ImageCollage img={img9}/>
                    <ImageCollage img={img8}/>
                    <ImageCollage img={img6}/>
                    <ImageCollage img={img3}/>
                    <ImageCollage img={img4}/>
                    <ImageCollage img={img2}/>
                    <ImageCollage img={img5}/>
                </SimpleGrid>
            </Flex>
            <Services/>
            <About/>
        </>
    );
};

export default Home;