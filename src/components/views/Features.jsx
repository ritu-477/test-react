import React from 'react'
import Competition from '../features/Competition'
import CountingCountDown from '../features/CountingCountDown.jsx'
import CardsParams from '../features/CardsParams.jsx'

const Features = () => {
  return (
      <>
          <Competition />
          <CountingCountDown />
          <CardsParams/>
      </>
  )
}

export default Features