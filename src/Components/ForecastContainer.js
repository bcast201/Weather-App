import React from 'react'
import styled from 'styled-components';

export const ForecastContainer = ({timeOne, timeTwo, timeThree, futureTempOne, futureTempTwo, futureTempThree, futureIconOne, futureIconTwo, futureIconThree}) => {
    return (
        <Container>
            <ForecastOne>
                <Time>
                    {timeOne}
                </Time>
                <Icon >
                <img src={futureIconOne} alt='weather-icon'></img>
                    
                </Icon>
                <Temp>
                    {futureTempOne}
                </Temp>
            </ForecastOne>
            <ForecastTwo>
                <Time>
                    {timeTwo}
                </Time>
                <Icon>
                <img src={futureIconTwo} alt='weather-icon'></img>
                </Icon>
                <Temp>
                {futureTempTwo}
                </Temp>
            </ForecastTwo>
            <ForecastThree>
                <Time>
                    {timeThree}
                </Time>
                <Icon>
                <img src={futureIconThree} alt='weather-icon'></img>
                </Icon>
                <Temp>
                    {futureTempThree}
                </Temp>
            </ForecastThree>
            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 20%;
    width: 100%;
    align-items: center;
    justify-content: center;
`

const ForecastOne = styled.div`
    display: flex;
    width: 100%;
    min-height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ForecastTwo = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ForecastThree = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Time = styled.p`
    display: flex;
    padding-top: 40px;
    `

const Icon = styled.div`
    display: flex;
    & img{
        max-height: 50px;
    }
`

const Temp = styled.p`
    display: flex;

`
