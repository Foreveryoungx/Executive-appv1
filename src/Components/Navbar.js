import React from 'react'
import {ReactNode} from 'react';
import Logo from '../Images/Logo.PNG';
import {Link as Link2} from 'react-router-dom';
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Link,
    useDisclosure,
    useColorModeValue,
    Stack, ModalOverlay, ModalContent, Button, Modal, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
} from '@chakra-ui/react';
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons';

const style = {
    height: 80,
    width: 90,
}

//store Links in a array
const Links = ['Home', 'Services', "About"];

const NavLink = ({children}: { children: ReactNode }) => (
    <Link
        to={children}
        px={2}
        py={1}
        rounded={'md'}
        color={'white'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}>
        {children}
    </Link>
);

function gotobook() {
    window.open('https://booksy.com/en-us/412654_executiv-grooming_barber-shop_25427_cottleville#ba_s=sr_1')
}

const Navbar = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {isOpen: isModal, onOpen: openModal, onClose: closeModal} = useDisclosure();
    return (
        <>
            <Box bg={"#022038"} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                        color={'#338791'}
                        aria-label={'Open Menu'}
                        display={{md: 'none'}}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box><img src={Logo} alt={'Website Logo'} style={style}/></Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{base: 'none', md: 'flex'}}>
                            {Links.map((link) => (
                                <Link2 to={link}><NavLink key={link}>{link}</NavLink></Link2>
                            ))}
                            <NavLink>
                                <Button onClick={openModal}>Book Now</Button>
                            </NavLink>
                        </HStack>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{md: 'none'}}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <Link2 to={link}><NavLink key={link}>{link}</NavLink></Link2>
                            ))}
                            <NavLink>
                                <Button onClick={openModal}>Book Now</Button>
                            </NavLink>

                        </Stack>
                    </Box>
                ) : null}
            </Box>
            <Modal isOpen={isModal} onClose={closeModal}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Going To Booking Section</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        You will be leaving the site to book
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={closeModal}>
                            Close
                        </Button>
                        <Button variant='ghost' onClick={gotobook}>Go To Book</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
};

export default Navbar;