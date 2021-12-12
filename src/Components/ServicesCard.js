import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ServicesCards() {
    return (
        <div className='cards' color={"black"}>
            <h1>Services</h1>
            <div className="cards__container" color={"black"}>
                <div className="cards__wrapper" color={"black"}>
                    <ul className="cards__items">
                        <CardItem
                            src="images/barber.png"
                            text="Haircuts"
                            label='Haircut Services'
                            price=''
                            path='/haircuts'
                        />
                        <CardItem
                            src="images/barber.png"
                            text="Ombre Brows"
                            label='OmbreBrows Services'
                            price=''
                            path='/brows'
                        />
                        <CardItem
                            src="images/barber.png"
                            text="Haircut Units"
                            label='Hair Unit Services'
                            price=''
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/barber.png"
                            text="Teeth Whitening"
                            label='Whitening Services'
                            price=''
                            path='/services'
                        />
                        <CardItem
                            src="images/barber.png"
                            text="Facials"
                            label='Face Services'
                            price='$25.00'
                            path='/services'
                        />
                        <CardItem
                            src="images/barber.png"
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

