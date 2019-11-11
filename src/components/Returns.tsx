import React, {useState} from 'react'
import { useSpring, animated, config } from 'react-spring'

import { Return } from './Return'

interface ReturnsProps {
    results: any
}

export const Returns: React.FC<ReturnsProps> = ({results}) => {
   const [isOpen, setOpen] = useState(false)
   const animSpring = useSpring({
    width: isOpen ? '40%' : '5vw'
   })
   const textAnim = useSpring({
    transform: isOpen? 'rotate(0deg)' : 'rotate(90deg)',
    position: 'relative',
    top: isOpen? '0%' : '50%'
   })

    const countyNames = Object.keys(results)
    return (
        <animated.div className='results-pane' style={animSpring} onClick={() => setOpen(!isOpen)}>
            <animated.h2 style={textAnim}>Results</animated.h2>
            {countyNames.map((item, idx) => {
                return <div key={idx}>
                    {isOpen && <Return {...(results[item])}></Return>}
                </div>
            })}
        
        </animated.div>
    )
}

