import React from 'react'
import styled from 'styled-components';

export const DataContainer = ({highTemp, lowTemp, windSpeed, humidity}) => {
    return (
        <Container>
            <HighLow> 
                <High>
                    High: {highTemp}
                </High>
                <hr style={{width: '40px'}}/>
                <Low>
                    Low: {lowTemp}
                </Low>
             </HighLow>
            <WindSpeed> 
                <WindTitle>
                    WindSpeed
                </WindTitle> 
                <Speed>    
                    {windSpeed} mph
                </Speed>
            </WindSpeed>
            <Humidity> 
                <HumidityTitle >
                    Humidity
                </HumidityTitle>
                <HumidityData>
                    {humidity}% 
                 </HumidityData>
            </Humidity>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 90%;
    margin: auto;
    height: 15vh;
    align-items: center;
    justify-content: center;
    font-weight: 400;
`
const HighLow = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const High = styled.div`
    display: flex;
`

const Low = styled.div`
    display: flex;
`

const WindSpeed = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


const WindTitle = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding-top: 2.5rem;
`
    
const Speed = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding-bottom: 2.5rem;
`

const Humidity = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`
const HumidityTitle = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2.5rem;
    font-size: 1rem;
`
    
const HumidityData = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    padding-bottom: 2.5rem;
`