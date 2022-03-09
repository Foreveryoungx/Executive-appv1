import {Flex} from "@chakra-ui/react";
import React from "react";

export default function HeroL(props) {
    return (
        <Flex
            w={'full'}
            h={'50vh'}
            backgroundSize={'cover'}
            backgroundImage={props.url}
            opacity={1}
            backgroundPosition={'center center'}
        >
        </Flex>
    )
}