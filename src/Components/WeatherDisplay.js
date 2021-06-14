import React from 'react'
import styled from 'styled-components';
import {MainDisplayContainer} from './MainDisplayContainer';
import {ForecastContainer} from './ForecastContainer';
import {DataContainer} from './DataContainer';
import {Conditions} from './Conditions'

export const WeatherDisplay = ({temp, icon, feelsLike, feelsColor, condition, highTemp, lowTemp, windSpeed, humidity, cityDisplay, timeOne, timeTwo, timeThree, futureTempOne, futureTempTwo, futureTempThree, futureIconOne, futureIconTwo, futureIconThree}) => {
    return (
        <Container>
            <Conditions condition={condition}
                        cityDisplay={cityDisplay}
            
            />

            <MainDisplayContainer temp={temp}
                                  icon={icon}
                                  feelsLike={feelsLike}
                                  feelsColor={feelsColor}                               
            />
            <hr style={{width: '300px'}}/>
            <DataContainer  highTemp={highTemp}
                            lowTemp={lowTemp}
                            windSpeed={windSpeed}
                            humidity={humidity}
            />
            <hr style={{width: '300px'}}/>
            <ForecastContainer timeOne={timeOne}
                               timeTwo={timeTwo}
                               timeThree={timeThree}
                               futureTempOne={futureTempOne}
                               futureTempTwo={futureTempTwo}
                               futureTempThree={futureTempThree}
                               futureIconOne={futureIconOne}
                               futureIconTwo={futureIconTwo}
                               futureIconThree={futureIconThree}
            
            />
        </Container>
    )
}


const Container = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    height: 70%;

    @media only screen and (max-width: 600px){
        font-size: 1rem;
        width: 90vw;
        height: 60%
    }
`