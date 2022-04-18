//Dev:
const API_BASE = "";
const END_POINT = "DEV";
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

export const ERROR_CODE_REQUEST_SUCCESS = 200;
export const ERROR_CODE_UPDATE_SUCCESS = 201;
export const ERROR_CODE_DELETE_SUCCESS = 204;

export const ERROR_CODE_422 = 422;
export const ERROR_CODE_400 = 400;
export const ERROR_CODE_401 = 401;
export const ERROR_CODE_403 = 403;
export const ERROR_CODE_404 = 404;

export const ERROR_CODE_500 = 500;


export { API_BASE, END_POINT, VersionCurrentApp,APIKeyWeather };
