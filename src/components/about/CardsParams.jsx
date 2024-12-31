import React from 'react';
import { useSearchParams } from 'react-router';
import { CARD_DATA } from '../../utils/helper';

const Cards = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = (card) => {
        setSearchParams({ card: card.replace(/ /g, '-') });
    };

    const selectedCard = searchParams.get('card');

    return (
        <div className='bg-dark-blue'>
            <div className="container row row-gap-4 mx-auto py-5">
                <h2 className='text-white text-center'>Card Params</h2>
                {CARD_DATA.map((card, i) => (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                        <div
                            onClick={() => handleClick(card.heading)}
                            className={`card px-2 ${selectedCard === card.heading.replace(/ /g, '-') ? 'bg-dark-green' : ''}`}>
                            <h2 className={`text-center cursor-pointer ${selectedCard === card.heading.replace(/ /g, '-') ? 'text-white' : ''}`} >
                                {card.heading}
                            </h2>
                            <p className={`text-center cursor-pointer ${selectedCard === card.heading.replace(/ /g, '-') ? 'text-white' : ''}`}>
                                {card.description}
                            </p>
                        </div >
                    </div >
                ))}
            </div >
        </div>
    );
};

export default Cards;