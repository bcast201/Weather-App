import styled from 'styled-components';
import {useState, useEffect} from 'react'
import axios from 'axios'
import {WeatherDisplay} from './Components/WeatherDisplay'

function App() {
  //Search Arguments
  const [city, setCity] = useState('')
  const [state, setStateID] = useState('')
  const [cityDisplay, setCityDisplay] = useState('New York')

  //BackgroundState
  const [background, setBackground] = useState('Clouds')

  //Weather Data
  const [temp, setTemp] = useState('')
  const [icon, setIcon] = useState('')
  const [highTemp, setHighTemp] = useState('')
  const [lowTemp, setLowTemp] = useState('')
  const [feelsLike, setFeelsLike] = useState('')
  const [feelsColor, setFeelsColor] = useState('')
  const [condition, setCondition] = useState('')
  const [windSpeed, setWindSpeed] = useState('')
  const [humidity, setHumidity] = useState('')

  //forecast Data

  const [timeOne, setTimeOne] = useState('')
  const [timeTwo, setTimeTwo] = useState('')
  const [timeThree, setTimeThree] = useState('')
  const [futureTempOne, setFutureTempOne] = useState('')
  const [futureTempTwo, setFutureTempTwo] = useState('')
  const [futureTempThree, setFutureTempThree] = useState('')
  const [futureIconOne, setFutureIconOne] = useState('')
  const [futureIconTwo, setFutureIconTwo] = useState('')
  const [futureIconThree, setFutureIconThree] = useState('')



  

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=7f652c4d970564f9e5da72f381335d86&units=imperial')
      .then(res => {

        //Get Background
        setBackground(res.data.weather[0].main)
        
        //Get Temp and remove decimal
        let longTemp = res.data.main.temp;
        let newTemp = Math.trunc(longTemp);
        setTemp(newTemp)

        //Get Icon
        setIcon(`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`)

        //Get High and Low Temp and remove decimal

        let longHigh = res.data.main.temp_max;
        let newHigh = Math.trunc(longHigh);
        let longLow = res.data.main.temp_min;
        let newLow = Math.trunc(longLow)

        setHighTemp(newHigh);
        setLowTemp(newLow);

        //Get Feels Like Temp

        let longFeelsLike = res.data.main.feels_like;
        let newLongFeelsLike = Math.trunc(longFeelsLike);

        setFeelsLike(newLongFeelsLike)

        //Get Feels Like Temp Color

        if (newLongFeelsLike >= 90){
          setFeelsColor('fireBrick')
        } else if (newLongFeelsLike >= 80 &&  newLongFeelsLike < 90){
          setFeelsColor('DarkGoldenRod')
        } else if (newLongFeelsLike >= 70 && newLongFeelsLike < 80 ){
          setFeelsColor('SpringGreen')
        } else if (newLongFeelsLike >= 60 && newLongFeelsLike < 70){
          setFeelsColor('forestGreen')
        } else if (newLongFeelsLike >= 50 && newLongFeelsLike < 60){
          setFeelsColor('Teal')
        } else if (newLongFeelsLike >=33 && newLongFeelsLike <50){
          setFeelsColor('DodgerBlue')
        } else if (newLongFeelsLike < 33 && newLongFeelsLike >0){
          setFeelsColor('DeepSkyBlue')
        } else {
          setFeelsColor('Maroon')
        }

        //Get Conditions

        setCondition(res.data.weather[0].description)

        //Get Wind Speed, remove decimal

        let longWindSpeed = res.data.wind.speed;
        let newWindSpeed = Math.trunc(longWindSpeed);
        setWindSpeed(newWindSpeed);

        //Get Humidity

        setHumidity(res.data.main.humidity)

        //Get Forecast

        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=New%20York&appid=17f660a7751acde6c5d52f1b5d810eaf&units=imperial')
          .then(res => {
          
            
            //Get Future times

            let resultOne = getFutureTimeFunc(res.data.list[0].dt_txt)
            let resultTwo = getFutureTimeFunc(res.data.list[1].dt_txt)
            let resultThree = getFutureTimeFunc(res.data.list[2].dt_txt)
            
            //Convert times to standard time and set to state

            setTimeOne(convertTime(resultOne))
            setTimeTwo(convertTime(resultTwo))
            setTimeThree(convertTime(resultThree))

           

            //Get Future Temps

            setFutureTempOne(Math.trunc(res.data.list[0].main.temp))
            setFutureTempTwo(Math.trunc(res.data.list[1].main.temp))
            setFutureTempThree(Math.trunc(res.data.list[2].main.temp))

            //Get Future Icons

            let futureIconLinkOne = `https://openweathermap.org/img/wn/${res.data.list[0].weather[0].icon}@2x.png`
            let futureIconLinkTwo = `https://openweathermap.org/img/wn/${res.data.list[1].weather[0].icon}@2x.png`
            let futureIconLinkThree = `https://openweathermap.org/img/wn/${res.data.list[2].weather[0].icon}@2x.png`

          
           

            setFutureIconOne(futureIconLinkOne)
            setFutureIconTwo(futureIconLinkTwo)
            setFutureIconThree(futureIconLinkThree)
            
          })
          .catch(err => {
            console.log(err)
          })
        


      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleSubmit = e =>{
    e.preventDefault();


    const adjustedCity = AdjustCityInput(city)
    // const stateCountryId = getStateId(state);

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${adjustedCity}&${state}&appid=7f652c4d970564f9e5da72f381335d86&units=imperial`)
      .then(res => {

        //Get Title Display

        setCityDisplay(res.data.name)

        //reset input State
        setCity('')
        setStateID('')

    
        //Get Background
        setBackground(res.data.weather[0].main)
        
        //Get Temp and remove decimal
        let longTemp = res.data.main.temp;
        let newTemp = Math.trunc(longTemp);
        setTemp(newTemp)
        

        //Get Icon
        setIcon(`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`)

        //Get High and Low Temp and remove decimal

        let longHigh = res.data.main.temp_max;
        let newHigh = Math.trunc(longHigh);
        let longLow = res.data.main.temp_min;
        let newLow = Math.trunc(longLow)

        setHighTemp(newHigh);
        setLowTemp(newLow);

        //Get Feels Like Temp

        let longFeelsLike = res.data.main.feels_like;
        let newLongFeelsLike = Math.trunc(longFeelsLike);

        setFeelsLike(newLongFeelsLike)

        //Get Feels Like Temp Color

        if (newLongFeelsLike >= 90){
          setFeelsColor('fireBrick')
        } else if (newLongFeelsLike >= 80 &&  newLongFeelsLike < 90){
          setFeelsColor('DarkGoldenRod')
        } else if (newLongFeelsLike >= 70 && newLongFeelsLike < 80 ){
          setFeelsColor('SpringGreen')
        } else if (newLongFeelsLike >= 60 && newLongFeelsLike < 70){
          setFeelsColor('forestGreen')
        } else if (newLongFeelsLike >= 50 && newLongFeelsLike < 60){
          setFeelsColor('Teal')
        } else if (newLongFeelsLike >=33 && newLongFeelsLike <50){
          setFeelsColor('DodgerBlue')
        } else if (newLongFeelsLike < 33 && newLongFeelsLike >0){
          setFeelsColor('DeepSkyBlue')
        } else {
          setFeelsColor('Maroon')
        }

        //Get Conditions

        setCondition(res.data.weather[0].description)

        //Get Wind Speed, remove decimal

        let longWindSpeed = res.data.wind.speed;
        let newWindSpeed = Math.trunc(longWindSpeed);
        setWindSpeed(newWindSpeed);

        //Get Humidity

        setHumidity(res.data.main.humidity)

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${adjustedCity}&${state}&appid=17f660a7751acde6c5d52f1b5d810eaf&units=imperial`)
          .then(res => {
            
            
            //Get Future times

            let resultOne = getFutureTimeFunc(res.data.list[0].dt_txt)
            let resultTwo = getFutureTimeFunc(res.data.list[1].dt_txt)
            let resultThree = getFutureTimeFunc(res.data.list[2].dt_txt)
            
            //Convert times to standard time and set to state

            setTimeOne(convertTime(resultOne))
            setTimeTwo(convertTime(resultTwo))
            setTimeThree(convertTime(resultThree))

           

            //Get Future Temps

            setFutureTempOne(Math.trunc(res.data.list[0].main.temp))
            setFutureTempTwo(Math.trunc(res.data.list[1].main.temp))
            setFutureTempThree(Math.trunc(res.data.list[2].main.temp))

            //Get Future Icons

            let futureIconLinkOne = `https://openweathermap.org/img/wn/${res.data.list[0].weather[0].icon}@2x.png`
            let futureIconLinkTwo = `https://openweathermap.org/img/wn/${res.data.list[1].weather[0].icon}@2x.png`
            let futureIconLinkThree = `https://openweathermap.org/img/wn/${res.data.list[2].weather[0].icon}@2x.png`

          
            

            setFutureIconOne(futureIconLinkOne)
            setFutureIconTwo(futureIconLinkTwo)
            setFutureIconThree(futureIconLinkThree)


            
          })
  

      })
      .catch(err => {
        console.log(err)
      })
  }

    //Adjusts City input to account for blank spaces

    const AdjustCityInput = (city) => {
        let imputedCity = city;
        let adjustedCity;

        adjustedCity = imputedCity.replace(' ', '%20');

        return adjustedCity;
    }

    const getFutureTimeFunc = (string) => {
        let stringArr = string.split(' ')
        return stringArr[1]
    }



    // Sets the background color relative to the current weather conditions
   const getBackground=() => {
    //  console.log(background + 1)
      if (background === 'Clouds'){
        return 'blue'
      } else {
        return 'blue'
      }
   }

   //Converts to Standard Time
   const convertTime = (inputTime) => {
      let time = inputTime;

      time = time.split(':');

      // fetch
      let hours = Number(time[0]);

      // calculate
      let timeValue;

      if (hours > 0 && hours <= 12) {
        timeValue= "" + hours;
      } else if (hours > 12) {
        timeValue= "" + (hours - 12);
      } else if (hours === 0) {
        timeValue= "12";
      }
      
      return timeValue += (hours >= 12) ? " P.M." : " A.M.";
    }

  

  return (
    <Container backgroundColor={getBackground()}>
        <Main>
          <Form onSubmit={handleSubmit}>
            <Label>
              Enter City:
              <Input type='text' value={city} onChange={e => setCity(e.target.value)} placeholder='City (New York)'></Input>
            </Label>
            <Label>
              Enter State or Country:
              <Input type='text' value={state} onChange={e => setStateID(e.target.value)} placeholder='State ("NY")'></Input>
            </Label>
            <Button type='submit' value='Find Weather' />
          </Form>
          <WeatherDisplay temp={temp}
                          icon={icon}
                          feelsLike={feelsLike}
                          feelsColor={feelsColor}
                          condition={condition}
                          highTemp={highTemp}
                          lowTemp={lowTemp}
                          windSpeed={windSpeed}
                          humidity={humidity}
                          cityDisplay={cityDisplay}
                          timeOne={timeOne}
                          timeTwo={timeTwo}
                          timeThree={timeThree}
                          futureTempOne={futureTempOne}
                          futureTempTwo={futureTempTwo}
                          futureTempThree={futureTempThree}
                          futureIconOne={futureIconOne}
                          futureIconTwo={futureIconTwo}
                          futureIconThree={futureIconThree}
          />
        </Main>
       
    </Container>
  );
}

export default App;


const Container = styled.div`
 
  background: linear-gradient(45deg, ${props => props.backgroundColor}, white);
  color: black;
  height: 100vh;
`
const Main = styled.div`
    width: 40%;
    margin: auto;
    height: 100%;
    max-height: 100%;
    display: flex;
    background-color: rgba(255, 255, 255, 0.4);
    flex-direction: column;
    /* backdrop-filter: blur(35px); */

    @media only screen and (max-width: 1100px){
        width: 70vw;
    }
    

    @media only screen and (max-width: 700px){
        width: 100vw;
    }
`

const Form = styled.form`
  display: flex;
  width: 70%;
  height: 30%;
  margin-left: auto;
  margin-right: auto ;
  margin-bottom: 0;
  margin-top: -3rem;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  @media only screen and (max-width:600px){
    height: 40%;
  }

`

const Button = styled.input`
  display: flex;
  align-self: center;
  justify-content: center;
  margin-top: .5rem;
  border: none;
  width: 10rem;
  height: 2rem;
  background-color: rgba(240,249,247, .5);
  cursor: pointer;

  &:hover{
    background-color: rgba(240,249,247, 1);
    transition: background-color 1s ease-in-out;
  }
`

const Label = styled.label`
  width: 100%;
`

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: rgba(240,249,247, .5);
  

  &:focus{
    background-color: rgba(245, 245, 245, 1);
    transition: background-color 1s ease-in-out;
  }
`
