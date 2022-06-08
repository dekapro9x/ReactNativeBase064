import { isAndroid } from "@const/Setting";
import { isJSON } from "@util/FuncConvert";
import axios from "axios";
import { Alert } from "react-native";
import { ERROR_CODE_SUCCESS, PRIVATE_KEY_SERVER, typeRequest } from "./Setting";

//API config with BackEnd - Server:
const instanceAPIBase = axios.create({
    headers: {
        Accept: 'application/json',
    }
});
const accessToken = "0xb88c676139323B29E13dc9a5679D57b0A8f062B6";
instanceAPIBase.defaults.timeout = 5000;
instanceAPIBase.defaults.mode = "cors";
instanceAPIBase.defaults.headers.common['Accept'] = 'application/json';



async function requestAPI(url, params, type, axiosRequestConfig) {
    console.log("Url:", url);
    console.log("Params:", params);
    try {
        let response = null;
        switch (type) {
            case typeRequest.GET: {
                response = await instanceAPIBase.get(url, { params: params });
                break;
            }
            case typeRequest.POST: {
                if (axiosRequestConfig) {
                    instanceAPIBase.defaults.headers.common['secret'] = 'namtran_auth';
                    instanceAPIBase.defaults.headers.common['appname'] = 'react-native-base-064';
                    instanceAPIBase.defaults.headers.common['typeos'] = isAndroid ? "ANDROID" : "IOS",
                        instanceAPIBase.defaults.headers.common['Authorization'] = "Bearer " + accessToken;
                    instanceAPIBase.defaults.headers.common['keyprivate'] = PRIVATE_KEY_SERVER;
                    instanceAPIBase.defaults.headers.common['token'] = accessToken;
                };
                response = await instanceAPIBase.post(url, params, axiosRequestConfig);
                break;
            }
            case typeRequest.PUT: {
                if (axiosRequestConfig) {
                    instanceAPIBase.defaults.headers.common['secret'] = 'namtran_auth';
                    instanceAPIBase.defaults.headers.common['appname'] = 'react-native-base-064';
                    instanceAPIBase.defaults.headers.common['typeos'] = isAndroid ? "ANDROID" : "IOS",
                        instanceAPIBase.defaults.headers.common['Authorization'] = "Bearer " + accessToken;
                    instanceAPIBase.defaults.headers.common['keyprivate'] = PRIVATE_KEY_SERVER;
                    instanceAPIBase.defaults.headers.common['token'] = accessToken;
                }
                response = await instanceAPIBase.put(url, params, axiosRequestConfig);
                break;
            }
            case typeRequest.DELETE: {
                response = await instanceAPIBase.delete(url, { params: params });
                break;
            }
            default: {
                return null;
            }
        }
        let status = response.status;
        let responsesData = response.data;
        console.log("Response", response);
        if (isSuccess(status)) {
            if (isJSON(response.data)) {
                console.log("Response.data:", isJSON(response.data) && JSON.parse(response.data));
                return JSON.parse(response.data)
            }
            return responsesData;
        } else {
            return response;
        }
    } catch (error) {
        console.log("Có lỗi sảy ra:", error);
        showAlertError("Thông báo", "Đã sảy ra lỗi trong quá trình xử lý. Vui lòng thử lại sau!");
    }
}

export function isSuccess(statusResponse) {
    return ERROR_CODE_SUCCESS.indexOf(statusResponse) > -1;
}

export async function showAlertError(title, contentAlert) {
    setTimeout(() => {
        Alert.alert(title, contentAlert, [{ text: "Đồng ý" }]);
    }, 700);
}

//Get API:
async function getAPI(url, params, axiosRequestConfig) {
    const responseMethodGet = await requestAPI(
        url,
        params,
        typeRequest.GET,
        axiosRequestConfig
    );
    return responseMethodGet;
}

//Post API:
async function postAPI(url, params, axiosRequestConfig) {
    let responseMethodPost = await requestAPI(
        url,
        params,
        typeRequest.POST,
        axiosRequestConfig
    );
    return responseMethodPost;
}

//Put API:
async function putAPI(url, params, axiosRequestConfig) {
    let responseMethodPut = await requestAPI(
        url,
        params,
        typeRequest.PUT,
        axiosRequestConfig
    );
    return responseMethodPut;
}

//Delete API:
async function deleteAPI(url, params) {
    const responseMethodDelete = await requestAPI(
        url,
        params,
        typeRequest.DELETE
    );
    return responseMethodDelete;
}

//Request all API:
async function requestAllAPI([...requestAPI]) {
    let responsesResult = [];
    await axios.all(requestAPI)
        .then(
            axios.spread((...responses) => {
                responsesResult = responses;
            })
        )
        .catch((errors) => {
            return errors;
        });
    return responsesResult;
}

//API method Get có sử dụng accessToken:
const requestGetAccessToken = (url) => {
    const axiosRequestConfig = {
        headers: {
            Authorization: "Bearer " + accessToken,
        },
    };
    return new Promise((resolve, reject) => {
        axios
            .get(url, axiosRequestConfig)
            .then((response) => {
                const data = response.data;
                console.log("List response:", data);
            })
            .catch((error) => {
                console.log("refreshAccessToken error", error);
            });
    });
};

export { getAPI, postAPI, putAPI, deleteAPI, requestAllAPI, requestGetAccessToken };

