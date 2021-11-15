import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ServicesCards() {
    return (
        <div className='cards'>
            <h1>Services</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="../Images/Logo.PNG"
                            text="Haircuts"
                            path='/haircuts'
                        />
                        <CardItem
                            src="images/barber.png"
                            text="Ombre Brows"
                            path='/brows'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/barber.png"
                            text="Haircut Units"
                            path='/units'
                        />
                        <CardItem
                            src="images/barber.png"
                            text="Teeth Whitening"
                            path='/services'
                        />
                        <CardItem
                            src="images/barber.png"
                            text="Facials"
                            path='/services'
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default ServicesCards;
