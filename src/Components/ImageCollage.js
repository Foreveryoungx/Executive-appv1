import React from 'react';
import {Image} from '@chakra-ui/react';


export default function ImageCollage({img}) {
    return (
        <>
            <Image borderRadius={'md'} src={img} alt={img}/>
        </>
    );
};
//
// <Container
//     maxW='container.xl'
//     centerContent
//     padding={"17px"}
//     bgColor={"#022038"}
//     bgPosition={'fixed'}
// >
//     <HeroL url={brows}/>
// </Container>
// <br/>
// <Container
//     maxW='container.xl'
//     centerContent
//     bgColor={"#022038"}
//     opacity={1}
// >
//     <HeroL url={img2}/>
// </Container>
// <br/>
// <Container
//     maxW='container.xl'
//     centerContent
//     padding={"17px"}
//     bgColor={"#022038"}
// >
//     <HeroL url={img8}/>
// </Container>