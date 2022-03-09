import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Logo from '../Images/Executiv_Grooming_2020-10-27_11.00.22_xvhzat-t_media_lib_thumb jpg'
import {Heading,} from '@chakra-ui/react';

function ServicesCards() {
    function btnClick() {
        window.open("https://booksy.com/en-us/412654_executiv-grooming_barber-shop_25427_cottleville#ba_s=sr_1")
    }

    return (
        <div className='cards' color={"black"}>
            <Heading as={'h1'} color={'black'}>Services</Heading>
            <div className="cards__container" color={"black"}>
                <div className="cards__wrapper" color={"#022038"} onClick={btnClick}>
                    <ul className="cards__items">
                        <CardItem
                            src={Logo}
                            text="Haircuts"
                            label='Haircut Services'
                            price=''
                            path={"/"}
                        />
                        <CardItem
                            src={Logo}
                            text="Ombre Brows"
                            label='OmbreBrows Services'
                            price=''
                            path={"/"}
                        />
                        <CardItem
                            src={Logo}
                            text="Haircut Units"
                            label='Hair Unit Services'
                            price=''
                            path={"/"}
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={Logo}
                            text="Teeth Whitening"
                            label='Whitening Services'
                            price=''
                            path={"/"}/>
                        <CardItem
                            src={Logo}
                            text="Facials"
                            label='Face Services'
                            price='$25.00'
                            path={"/"}/>
                        <CardItem
                            src={Logo}
                            text="Lining Restoration"
                            label='Maintenance Services'
                            price='$100.00'
                            path={"/"}
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default ServicesCards;

