import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Logo from '../Images/Executiv_Grooming_2020-10-27_11.00.22_xvhzat-t_media_lib_thumb jpg'
function ServicesCards() {
    return (
        <div className='cards' color={"black"}>
            <h1>Services</h1>
            <div className="cards__container" color={"black"}>
                <div className="cards__wrapper" color={"#022038"}>
                    <ul className="cards__items">
                        <CardItem
                            src={Logo}
                            text="Haircuts"
                            label='Haircut Services'
                            price=''
                            path='/haircuts'
                        />
                        <CardItem
                            src={Logo}
                            text="Ombre Brows"
                            label='OmbreBrows Services'
                            price=''
                            path='/brows'
                        />
                        <CardItem
                            src={Logo}
                            text="Haircut Units"
                            label='Hair Unit Services'
                            price=''
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={Logo}
                            text="Teeth Whitening"
                            label='Whitening Services'
                            price=''
                            path='/services'
                        />
                        <CardItem
                            src={Logo}
                            text="Facials"
                            label='Face Services'
                            price='$25.00'
                            path='/services'
                        />
                        <CardItem
                            src={Logo}
                            text="Lining Restoration"
                            label='Maintenance Services'
                            price='$100.00'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default ServicesCards;

