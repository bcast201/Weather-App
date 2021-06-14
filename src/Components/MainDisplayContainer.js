import React from 'react'
import styled from 'styled-components';

export const MainDisplayContainer = ({temp, icon, feelsLike, feelsColor}) => {
    return (
        <Container>
            <DisplayIcon>
                <img src={icon} alt='weather-icon'></img>
                <p>Feels Like <span style={{color: `${feelsColor}`, fontWeight: '900',}}>{feelsLike}</span></p>

            </DisplayIcon>
            <DisplayTemp>
                <Temp>{temp}<span>&deg;F</span></Temp>

            </DisplayTemp>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 40%;

`

const DisplayIcon = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-weight: 400;

`

const DisplayTemp = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;

    & span{
        font-size: 2rem;
        vertical-align: top;

        

    }
`

const Temp = styled.h1`
    font-size: 9rem;
    font-weight: 100;

    @media only screen and (max-width: 1200px){
        font-size: 7rem;
    }

    @media only screen and (max-width: 1000px){
        font-size: 6rem;
    }

    @media only screen and (max-width: 800px){
        font-size: 8rem;
    }
    @media only screen and (max-width: 600px){
        font-size: 5rem;
    }


   
`
