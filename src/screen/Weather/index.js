import { connect } from "react-redux";
import WeatherScreen from "./Weather";
//API Weather: https://home.openweathermap.org/api_keys
//https://openweathermap.org/current
const mapStateToProps = (GlobalState) => {
  const { LanguageReducer } = GlobalState;
  const mainWeather = [
    {
      id: 1,
      main: "clear sky",
      iconDay: "http://openweathermap.org/img/wn/01d@2x.png",
      iconNight: "http://openweathermap.org/img/wn/01n@2x.png"
    },
    {
      id: 2,
      main: "few clouds",
      iconDay: "http://openweathermap.org/img/wn/02d@2x.png",
      iconNight: "http://openweathermap.org/img/wn/02n@2x.png"
    },
    {
      id: 3,
      main: "scattered clouds",
      iconDay: "http://openweathermap.org/img/wn/03d@2x.png",
      iconNight: "http://openweathermap.org/img/wn/03n@2x.png"
    },
    {
      id: 4,
      main: "broken clouds",
      iconDay: "http://openweathermap.org/img/wn/04d@2x.png",
      iconNight: "http://openweathermap.org/img/wn/04n@2x.png"
    },
    {
      id: 5,
      main: "shower rain",
      iconDay: "http://openweathermap.org/img/wn/09d@2x.png",
      iconNight: "http://openweathermap.org/img/wn/09n@2x.png"
    },
    {
      id: 6,
      main: "rain",
      iconDay: "http://openweathermap.org/img/wn/10d@2x.png",
      iconNight: "http://openweathermap.org/img/wn/10n@2x.png"
    },
    {
      id: 7,
      main: "thunderstorm",
      iconDay: "http://openweathermap.org/img/wn/11d@2x.png",
      iconNight: "http://openweathermap.org/img/wn/11n@2x.png"
    },
    {
      id: 7,
      main: "snow",
      iconDay: "http://openweathermap.org/img/wn/13d@2x.png",
      iconNight: "http://openweathermap.org/img/wn/13n@2x.png"
    },
    {
      id: 8,
      main: "mist",
      iconDay: "http://openweathermap.org/img/wn/50d@2x.png",
      iconNight: "http://openweathermap.org/img/wn/50d@2x.png"
    },
    {
      id: 9,
      main: "overcast clouds",
      iconDay: "http://openweathermap.org/img/wn/04d@2x.png",
      iconNight: "http://openweathermap.org/img/wn/04n@2x.png"
    },
  ]
  return {
    languageCurrent: LanguageReducer.language,
    mainWeather: mainWeather
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen);
