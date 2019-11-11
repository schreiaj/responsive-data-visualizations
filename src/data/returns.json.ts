import { csvParse } from 'd3-dsv'
const CSV_STRING = `county,Donald Trump,Hillary Clinton,Other
Adams,41.35,49.86,8.79
Alamosa,43.90,45.96,10.15
Arapahoe,38.63,52.76,8.62
Archuleta,58.10,34.06,7.83
Baca,81.42,13.14,5.43
Bent,61.65,30.62,7.73
Boulder,22.00,70.34,7.66
Broomfield,38.12,52.35,9.53
Chaffee,47.92,43.45,8.63
Cheyenne,83.94,11.98,4.08
Clear Creek,43.90,46.52,9.58
Conejos,47.59,44.03,8.38
Costilla,31.82,60.88,7.31
Crowley,70.66,22.20,7.14
Custer,67.22,25.99,6.78
Delta,69.42,24.34,6.24
Denver,18.89,73.69,7.42
Dolores,75.22,19.28,5.50
Douglas,54.71,36.62,8.68
Eagle,35.64,55.90,8.46
El Paso,56.19,33.86,9.95
Elbert,73.26,19.61,7.13
Fremont,68.82,24.11,7.07
Garfield,49.61,42.58,7.81
Gilpin,43.79,45.69,10.51
Grand,52.33,39.10,8.57
Gunnison,34.94,54.48,10.57
Hinsdale,57.56,33.45,9.00
Huerfano,49.78,43.17,7.06
Jackson,73.05,19.86,7.08
Jefferson,42.01,48.89,9.10
Kiowa,85.15,10.64,4.21
Kit Carson,80.15,14.48,5.38
La Plata,40.41,49.84,9.75
Lake,39.70,50.52,9.78
Larimer,42.57,47.51,9.92
Las Animas,54.62,39.01,6.37
Lincoln,77.67,16.79,5.54
Logan,74.90,19.04,6.06
Mesa,64.10,27.98,7.91
Mineral,52.76,36.35,10.89
Moffat,81.30,13.39,5.30
Montezuma,61.07,30.90,8.03
Montrose,67.88,25.80,6.32
Morgan,68.10,26.35,5.55
Otero,58.31,34.82,6.87
Ouray,40.82,51.27,7.92
Park,58.89,32.84,8.27
Phillips,76.80,18.70,4.50
Pitkin,24.23,69.69,6.08
Prowers,70.39,23.64,5.96
Pueblo,46.11,45.62,8.27
Rio Blanco,80.90,12.64,6.46
Rio Grande,55.75,36.16,8.10
Routt,37.39,54.34,8.27
Saguache,40.46,49.98,9.56
San Juan,42.49,52.37,5.14
San Miguel,23.86,68.72,7.42
Sedgwick,74.41,19.57,6.01
Summit,31.53,59.09,9.38
Teller,67.47,24.94,7.59
Washington,84.12,10.83,5.05
Weld,56.60,34.35,9.05
Yuma,80.36,15.15,4.49`


const rows  = csvParse(CSV_STRING)

export const Returns = rows.map((val) => {
    return {
        county: val.county,
        red: parseFloat(val['Donald Trump']||''),
        blue: parseFloat(val['Hillary Clinton']||'')
    }
}).reduce((acc, val) => {
    if(val && val.county) {
        acc[val.county] = val
        acc[val.county].winner = val.red >= val.blue ? 'red' : 'blue' 
    }    
    return acc
}, {} as {[key: string]: any})
