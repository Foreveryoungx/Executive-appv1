import {Box, Button, Container, Heading, Icon, Stack, Text} from "@chakra-ui/react";
import Link from "react-router-dom/es/Link";
import React from "react";
export default function Hero1() {
    return (
        <>
    <Container maxW={''} bg={"black"}>
        <Stack
            as={Box}
            textAlign={'center'}
            spacing={{base: 8, md: 14}}
            py={{base: 20, md: 36}}
        >
            <Heading
                fontWeight={600}
                fontSize={{base: '2xl', sm: '4xl', md: '6xl'}}
                lineHeight={'110%'} color={'white'}>
                Explore Our Variety<br/>
                <Text as={'span'} color={'white'}>
                    Of Services
                </Text>
            </Heading>
            <Text color={'white'}>
                A grooming experience like none other. One on one hair care service with all of the amenities (Facial,
                wax, razor, etc). You only feel your best when you look it. Come feel like “The ExecutIV”.
            </Text>
            <Stack

                direction={'column'}
                spacing={3}
                align={'center'}
                alignSelf={'center'}
                position={'relative'}>
                <Link to={'/services'}>
                    <Button
                        colorScheme={'green'}
                        bg={'white'}
                        color={'#85002E'}
                        rounded={'full'}
                        px={6}
                        _hover={{
                            bg: '#338791', color: 'white'
                        }}
                        // onClick={}
                    >
                        Services
                    </Button>
                </Link>
                <Box>
                    <Icon
                        as={Arrow}
                        color={'white'}
                        w={71}
                        position={'absolute'}
                        right={-71}
                        top={'10px'}
                    />
                    <Text
                        fontSize={'lg'}
                        fontFamily={'Caveat'}
                        position={'absolute'}
                        right={'-125px'}
                        top={'-15px'}
                        transform={'rotate(15deg)'}
                        color={'white'}>
                        Explore More Services
                    </Text>
                </Box>
            </Stack>
        </Stack>
    </Container>
    </>
);
}