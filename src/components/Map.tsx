import React, { } from 'react'
import { geoPath, geoMercator } from 'd3-geo'
import { Feature } from 'geojson'
import { useTrail, animated, config, useSpring } from 'react-spring'

interface MapProps {
    geoJSON: Feature[],
    results: {[key: string]: any}
}

export const Map: React.FC<MapProps> = ({ geoJSON, results }) => {
    const animProps = useTrail(geoJSON.length, {
        from: { fillOpacity: 0 },
        to: { fillOpacity: .85 },
        config: {
            ...config.stiff,
            clamp: true
        }
    })

    const _projection = geoMercator()
        .scale(4800)
        .center([-105.7821, 39.0])
    const pathGenerator = geoPath()
        .projection(_projection)
    const paths = geoJSON.map((val, idx) => {
        const path = pathGenerator(val) || ''
        let name = ''
        if(val && val.properties && val.properties.name){
            name = val.properties.name
            let result = results[name]
            return <animated.g style={animProps[idx]} key={idx}>
                <path className={`state_${result.winner}`} d={path} />
            </animated.g>
        }
        else {
            return null
        }
    })
    return (
        <g>
            {[...paths]}
        </g>
    )

}