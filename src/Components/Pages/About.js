import React from 'react';
import {Badge, Box, Center, Flex, Image, Text,} from '@chakra-ui/react';
import Logo from "../../Images/Logo.PNG"

const About = () => {
    return (
        <>
            <Center h={"100vh"}>
                <Box p={"5"} maxW={"320px"}>
                    <Image borderRadius={"md"} src={Logo} alt={"Logo"}/>
                    <Flex align="center" justify={"center"} mt={2}>
                        <Badge colorScheme={'red'}>Erik Harmon</Badge>
                    </Flex>
                    <Flex align="baseline" mt={2}>
                        <Badge colorScheme={'#338791'}>Entrepreneur</Badge>
                        &bull;
                        <Badge colorScheme={'#338791'}>Visionary</Badge>
                        &bull;
                        <Badge colorScheme={'#338791'}>Groomer</Badge>
                    </Flex>
                    <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                        A grooming experience like none other. One-on-one hair care service with all amenities (Facial,
                        wax, razor, etc.). You only feel your best when you look it. So come feel like the "The
                        ExecutIV".
                    </Text>
                </Box>
            </Center>
        </>
    );
};

export default About;