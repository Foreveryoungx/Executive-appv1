import React from 'react';
import {Box, Heading, Stack} from "@chakra-ui/react";


function Gallery() {
    return (
        <>
            <Stack
                as={Box}
                textAlign={'center'}
                spacing={{ base: 8, md: 14 }}
                py={{ base: 5, md: 30 }}
                color={'black'}>
            <Heading
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'} color={'#A38A00'}> Gallery </Heading>
            </Stack>
        </>
    );
}

export default Gallery;