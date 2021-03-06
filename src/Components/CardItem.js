import React from 'react';
import {Link} from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' href={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='cards__item__img'
                            alt={''}
                            src={props.src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h4 className='cards__item__text'>{props.text}</h4>
                        <h4 className='cards__item_text'>{props.price}</h4>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;