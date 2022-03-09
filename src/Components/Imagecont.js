import React from 'react';
import img2 from '../Images/img2.jpeg'
import { Image, Stack} from '@chakra-ui/react'
const images = () => {
    return (
        <>
            <Stack direction={'column'}>
                <Image
                    borderRadius='2xl'
                    align='center'
                    objectFit='cover'
                    boxSize='lg'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov' />
            <Image
                borderRadius='2xl'
                align='center'
                objectFit='cover'
                boxSize='lg'
                src={img2}
                alt='Dan Abramov' />
            </Stack>
        </>
    );
};

export default images;