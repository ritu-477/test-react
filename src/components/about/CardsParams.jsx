import React from 'react';
import { useSearchParams } from 'react-router';
import { CARD_DATA } from '../../utils/helper';
import Heading from '../../common/Heading';

const CardsParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = (card) => {
        setSearchParams({ card: card.replace(/ /g, '-') });
    };

    const cardSelected = searchParams.get('card');

    return (
        <div className='bg-dark-blue'>
            <div className="container row row-gap-4 mx-auto py-5">
                <Heading classStyle={'text-white text-center'} text={'Cards Params'} />
                {CARD_DATA.map((card, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                        <div
                            onClick={() => handleClick(card.heading)}
                            className={`card px-2 ${cardSelected === card.heading.replace(/ /g, '-') ? 'bg-dark-green' : ''}`}>
                            <h3 className={`text-center cursor-pointer ${cardSelected === card.heading.replace(/ /g, '-') ? 'text-white' : ''}`} >
                                {card.heading}
                            </h3>
                            <p className={`text-center cursor-pointer ${cardSelected === card.heading.replace(/ /g, '-') ? 'text-white' : ''}`}>
                                {card.description}
                            </p>
                        </div >
                    </div >
                ))}
            </div >
        </div>
    );
};

export default CardsParams;