import React from 'react';
import {Button, Stack, useBreakpointValue, VStack} from "@chakra-ui/react";

const Hero2 = () => {
    function btnClick() {
        window.open("https://booksy.com/en-us/412654_executiv-grooming_barber-shop_25427_cottleville#ba_s=sr_1")
    }

    return (
        <>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({base: 4, md: 8})}
                bgGradient={'linear(to-r, blackAlpha.600,transparent)'}
            >
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Button
                        bg={'white'}
                        rounded={'full'}
                        color={'#338791'}
                        _hover={{bg: '#338791', color: 'white'}}
                        onClick={btnClick}
                        postion={'relative'}
                        opacity={1}>
                        Book Now
                    </Button>
                </Stack>
            </VStack>

        </>
    );
};

export default Hero2;