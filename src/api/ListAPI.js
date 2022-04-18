
import { APIKeyWeather } from './Setting';
import {
  APP_ID1, COMPANY_ID, DEVICE_ID, PRIVATE_KEY_DEVICE_ID, TYPE_PLAFORM, URL_DOMAIN,
} from './System';

const Api = {
  //API test thử:
  registrationDeviceID: () => {
    return `${URL_DOMAIN}/api/v1/app/${APP_ID1}/device/pushDeviceId?companyId=${COMPANY_ID}&deviceId=${DEVICE_ID}&deviceType=${TYPE_PLAFORM}&privateKey=${PRIVATE_KEY_DEVICE_ID}`;
  },
  //API Weather:
  getCurrentWeatherLocations: (lat, lon) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKeyWeather}`
  }
};
export { Api };
