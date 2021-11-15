import React from 'react';
import CardItem from "./CardItem";

const HaircutsCard = () => {
    return (
        <div className='cards'>
            <h1>Services</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/barber.png"
                            text="Haircut only"
                            label='Basic Haircut'
                            price='$25.00'
                            path='/services'
                        />
                        <CardItem
                            src="images/barber.png"
                            text="Haircut with wash, enhancements and razor lining"
                            label='ExecutIV Haircut'
                            price='$35.00'
                            path='/services'
                        />
                        <CardItem
                            src="images/barber.png"
                            text="Haircut with beard trim only"
                            label='Basic Haircut w/beard'
                            price='$30.00'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/barber.png"
                            text="Haircut only"
                            label='Basic kids Haircut'
                            price='$20.00'
                            path='/services'
                        />
                        <CardItem
                            src="images/barber.png"
                            text="17 and under Haircut with razor, and enhancements"
                            label='ExecutIV Kids Haircut'
                            price='$25.00'
                            path='/services'
                        />
                        <CardItem
                            src="images/barber.png"
                            text="Any haircut on Upcoming holidays will be $100"
                            label='Holiday haircut'
                            price='$100.00'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
};

export default HaircutsCard;