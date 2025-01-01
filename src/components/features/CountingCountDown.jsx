import React from 'react';
import Heading from '../../common/Heading';

const CountingCountDown = () => {
    const numbers = [];
    for (let i = 9; i >= 0; i--) {
        numbers.push(i);
    }

    return (
        <div className='bg-dark-blue'>
            <div className="container py-3">
                <Heading classStyle={'text-center mx-auto'} text={'ForLoop'} />
                <div className='d-flex gap-2 justify-content-center'>
                    {numbers.map((number, index) => (
                        <p key={index} className='text-white count-text text-center mb-0'>
                            {number}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CountingCountDown;