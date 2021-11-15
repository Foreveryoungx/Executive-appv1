import React from 'react';
import {
    Stack,
    Flex,
    Button, useBreakpointValue, VStack,

} from '@chakra-ui/react';
import Services from "./Services";

const Home = () => {
    return (
        <div>
        <Flex
            w={'full'}
            h={'100vh'}
            backgroundImage={
                'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Stack direction={'row'}>
                        <Button
                            bg={'whiteAlpha.300'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'whiteAlpha.500' }}>
                            BOOK NOW
                        </Button>
                    </Stack>
                </Stack>
            </VStack>

        </Flex>
    <Services/>
    </div>
    );
};

export default Home;