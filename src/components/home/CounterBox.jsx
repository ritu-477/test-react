import React, { useState } from 'react';
import Heading from '../../common/Heading';

const CounterBox = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0)); 

    return (
        <div className='bg-dark-blue'>
            <div className="container bg-purple py-4">
                <div className="d-flex flex-column align-items-center">
                    <Heading classStyle="text-center mb-3" text="Counter UseState" />

                    <h2 className="mb-3 text-white">{count}</h2>
                    <div className='d-flex gap-2'>
                        <button onClick={increment} className="p-3 border-gray border-black text-black rounded-3">
                            Increment
                        </button> 
                        <button onClick={decrement} className="p-3 border-gray border-black bg-danger text-black rounded-3">
                            Decrement
                        </button>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default CounterBox;
