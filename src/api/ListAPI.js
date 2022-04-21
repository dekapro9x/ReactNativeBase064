
import { APIKeyWeather } from './Setting';
const Api = {
  //API Weather:
  getCurrentWeatherLocations: (lat, lon) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKeyWeather}`
  }
};
export { Api };
