import React from 'react';
import {Box, Heading, Stack} from "@chakra-ui/react";
import BrowsPhotos from "../BrowsPhotos";
import HaircutPhotos from "../HaircutPhotos";


function Gallery() {
    return (
        <>
            <Stack
                as={Box}
                textAlign={'center'}
                spacing={{ base: 8, md: 14 }}
                py={{ base: 5, md: 30 }}
                bg={'#FFFFFF'}>
            <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'} color={'#022038'}> Haircuts
        </Heading></Stack>
            <HaircutPhotos/>
            <Stack
                as={Box}
                textAlign={'center'}
                spacing={{ base: 8, md: 14 }}
                py={{ base: 5, md: 30 }}
                bg={'#FFFFFF'}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'} color={'#022038'}> Brows
                </Heading></Stack>
            <BrowsPhotos/>
        </>
    );
}

export default Gallery;