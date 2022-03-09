import React from 'react';
import ServicesCard from "../ServicesCard";
import {Box} from "@chakra-ui/react";
import Logo from "../../Images/Logo.PNG";

const Services = () => {
    return (
        <>

            <Box
                bgColor={'#022038'}
                bgImage={Logo}
                bgRepeat={'round'}
                bgAttachment={'fixed'}
                postion={'relative'}

            >
                <ServicesCard/>
            </Box>
        </>
    );
};

export default Services;