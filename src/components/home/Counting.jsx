import React, { useState, useEffect } from 'react';
import Heading from '../../common/Heading';

const Counting = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount >= 100) {
                    clearInterval(interval); 
                    return prevCount;
                }
                return prevCount + 1; 
            });
        }, 1000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-dark-blue py-5'>
            <div className="container text-center">
                <Heading classStyle={'text-center mx-auto'} text={'Counting from 1 to 100 UseEffect'} />
                <p className='text-white pt-4'>{count}</p>
            </div>
       </div>
    );
};

export default Counting;
