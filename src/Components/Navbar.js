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
    Stack,
} from '@chakra-ui/react';
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons';

const style = {
    height: 80,
    width: 90,
}

//store Links in a array
const Links = ['Home', 'Services', 'Gallery', 'About'];

const NavLink = ({children}: {children: ReactNode}) => (
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

const  Navbar = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
            <Box bg={"#022038"} px={4} >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        color={'#338791'}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box><img src={Logo} alt={'Website Logo'} style={style}  /></Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <Link2 to={link}><NavLink key={link} >{link}</NavLink></Link2>
                            ))}
                        </HStack>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <Link2 to={link}><NavLink key={link}>{link}</NavLink></Link2>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>


        </>
    )
};

export default Navbar;