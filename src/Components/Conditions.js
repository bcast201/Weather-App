import React from 'react'
import styled from 'styled-components';


export const Conditions = ({condition, cityDisplay}) => {
    return (
        <Container>
            <CityName>{cityDisplay}</CityName>
            <Text>{condition}</Text>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 10%;

    @media only screen and (max-width: 600px){
        align-items: center;
    }
    
`

const Text = styled.p`
    font-size: 1.15rem;
    display: flex;
    height: 5%;
    align-items: center;
    justify-content: center;
`

const CityName = styled.h1`
    display: flex;
    height: 5%;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 3rem
`
