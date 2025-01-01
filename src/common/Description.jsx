import React from 'react'

const Description = ({ text, classStyle }) => {
    return (
        <p className={`font-normal description text-white mb-0 ${classStyle}`}>{text}</p>
    )
}

export default Description