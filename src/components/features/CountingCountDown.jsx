import React from 'react';
import Heading from '../../common/Heading';

const CountingCountDown = () => {
    const Countdown = () => {
        const numbers = [];
        for (let i = 9; i >= 0; i--) {
            numbers.push(i); 
        }
        return numbers.join(', '); 
    };

    return (
        <div className='bg-dark-blue'>
            <div className="container py-3">
                <Heading classStyle={'text-center mx-auto'} text={'ForLoop'} />
                <p className='text-white text-center'>{Countdown()}</p>
            </div>
        </div>
    );
};

export default CountingCountDown;
