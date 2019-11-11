import React from 'react'

interface ReturnProps {
    county: string,
    red: number,
    blue: number
}

export const Return: React.FC<ReturnProps> = ({ county, red, blue }) => {
    return (
        <div className='return'>
            <div>{county}</div>
            <svg viewBox="0 0 100 10">
                <rect x={0} className='total' width={100} height={10}></rect>
                <rect x={0} className='red' width={red} height={10}></rect>
                <rect x={100-blue} className='blue' width={blue} height={10}></rect>
            </svg>
        </div>
    )
}
