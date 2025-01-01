import React from 'react';
import { useSearchParams } from 'react-router';
import { CARDS_DATA } from '../../utils/helper';
import Heading from '../../common/Heading';

const CardsParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = (card) => {
        setSearchParams({ card: card.replace(/ /g, '-').toLowerCase()});
    };

    const cardSelected = searchParams.get('card');

    return (
        <div className='bg-dark-blue'>
            <div className="container row row-gap-4 mx-auto py-5">
                <Heading classStyle={'text-white text-center'} text={'Cards Params'} />
                {CARDS_DATA.map((card, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 cursor-pointer" key={index}>
                        <div
                            onClick={() => handleClick(card.heading)}
                            className={`card p-4 ${cardSelected === card.heading.replace(/ /g, '-') ? 'bg-dark-green' : ''}`}>
                            <h3 className={`text-center ${cardSelected === card.heading.replace(/ /g, '-') ? 'text-white' : ''}`} >
                                {card.heading}
                            </h3>
                            <p className={`text-center mb-0 ${cardSelected === card.heading.replace(/ /g, '-') ? 'text-white' : ''}`}>
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