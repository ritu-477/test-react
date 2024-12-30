import React from 'react'
import Product from '../home/Product'
import CounterBox from '../home/CounterBox'
import Counting from '../home/Counting'
import CardsParams from '../features/CardsParams'

const Home = () => {
    return (
        <>
            <Product />
            <CounterBox />
            <Counting />
        </>
    )
}

export default Home