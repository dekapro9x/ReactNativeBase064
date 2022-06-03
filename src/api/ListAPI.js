
import { APIKeyWeather, API_BASE } from './Setting';
const Api = {
  login: () => {
    return `${API_BASE}login`
  },
  //API Weather:
  getCurrentWeatherLocations: (lat, lon) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKeyWeather}`
  }
};
export { Api };
