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
    max-height: 20%;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-top: 1.5rem;

    @media only screen and (max-width:600px){
        height: 100px;

    }
`

const ForecastOne = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ForecastTwo = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ForecastThree = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Time = styled.p`
    display: flex;
    margin: 0;
    `

const Icon = styled.div`
    display: flex;
    & img{
        height: 4rem;
    }
`

const Temp = styled.p`
    display: flex;
    margin: 0;

`