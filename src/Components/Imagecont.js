import React from 'react';
import haircut2 from '../Images/img2.jpeg'
import haircut1 from '../Images/img1.jpg'
import {Box, Container, Image} from '@chakra-ui/react'

const Imagecont = () => {
    return (
        <>
            <Container centerContent maxW="container.xl" bgGradient={'linear(to-r, blackAlpha.600,transparent)'}>
                <Box position={{lg: "absolute"}}
                     top={{lg: 0}}
                     bottom={{lg: 0}}
                     w={{lg: "50%"}}
                     border='solid 1px transparent'>
                    <Image
                        h={[56, 72, 96, "full"]}
                        w={"full"}
                        borderRadius='2xl'
                        align='center'
                        fit='cover'
                        boxSize='lg'
                        src={haircut1}
                        alt='Picture of a Haircut styled by Erik Harmon'
                    />
                </Box>
                <Image
                    borderRadius='2xl'
                    align='center'
                    objectFit='cover'
                    boxSize='lg'
                    src={haircut2}
                    alt='Picture of a Haircut styled by Erik Harmon'/>
                <Image
                    borderRadius='2xl'
                    align='center'
                    objectFit='cover'
                    boxSize='lg'
                    src={haircut2}
                    alt='Picture of a Haircut styled by Erik Harmon'/>
                <Image
                    borderRadius='2xl'
                    align='center'
                    objectFit='cover'
                    boxSize='lg'
                    src={haircut2}
                    alt='Picture of a Haircut styled by Erik Harmon'/>
                <Image
                    borderRadius='2xl'
                    align='center'
                    objectFit='cover'
                    boxSize='lg'
                    src={haircut2}
                    alt='Picture of a Haircut styled by Erik Harmon'/>
            </Container>
        </>
    );
};

export default Imagecont;