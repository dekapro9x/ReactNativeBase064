//Dev:
const IP_CONFIG = "192.168.0.76";
const API_BASE = `http://${IP_CONFIG}:3000/`;
const END_POINT = "DEV";
const PRIVATE_KEY_SERVER = "d94991ad39bfb31b809da1435c1d1a4c3434";

//Product:
// const API_PRODUCES = "";
// const END_POINT = "PRODUCT";
const VersionCurrentApp = "1.0.0";

//API Weather: https://home.openweathermap.org/api_keys
//https://openweathermap.org/current
const APIKeyWeather = "d94991ad39bfb31b809da1435c1d1a4c";

export const typeRequest = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
};


//API Success:
export const ERROR_CODE_REQUEST_SUCCESS = 200;
export const ERROR_CODE_UPDATE_SUCCESS = 201;
export const ERROR_CODE_DELETE_SUCCESS = 204;
//API Error:
export const ERROR_CODE_422 = 422;
export const ERROR_CODE_400 = 400;
export const ERROR_CODE_401 = 401;
export const ERROR_CODE_403 = 403;
export const ERROR_CODE_404 = 404;
//API Deploy:
export const ERROR_CODE_500 = 500;
export const ERROR_CODE_SUCCESS = [
    ERROR_CODE_REQUEST_SUCCESS,
    ERROR_CODE_UPDATE_SUCCESS,
    ERROR_CODE_DELETE_SUCCESS,
];

export { API_BASE, END_POINT, VersionCurrentApp, APIKeyWeather, IP_CONFIG ,PRIVATE_KEY_SERVER};
