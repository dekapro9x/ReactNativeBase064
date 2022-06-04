import { ERROR_CODE_SUCCESS, PRIVATE_KEY_SERVER, typeRequest } from "./Setting";
import axios from "axios";
import { Alert } from "react-native";
import { isAndroid } from "@const/Setting";

//API config with BackEnd:
const instanceAPIBase = axios.create({
    timeout: 60000,
    mode: 'cors',
    headers: {
        Accept: 'application/json',
        secret: "namtran_auth",
        appname: "react-native-base-064",
        typeos: isAndroid ? "Android" : "IOS",
        keyprivate: PRIVATE_KEY_SERVER,
        Authorization: "Bearer" + "0xb88c676139323B29E13dc9a5679D57b0A8f062B6",
        token: "0xb88c676139323B29E13dc9a5679D57b0A8f062B6"
    }
});

export async function showAlert(titleAlert, contentAlert) {
    setTimeout(() => {
        Alert.alert(titleAlert, contentAlert, [{ text: "Đồng ý" }]);
    }, 700);
}

export async function showAlertError(
    contentAlert,
    title = "ReactNativeBase" + " - Error API"
) {
    showAlert(title, contentAlert);
}

export function isSuccess(statusResponse) {
    return ERROR_CODE_SUCCESS.indexOf(statusResponse) > -1;
}

async function request(url, params, type, configs) {
    try {
        let response = null;
        switch (type) {
            case typeRequest.GET: {
                response = await instanceAPIBase.get(url, { params: params });
                break;
            }
            case typeRequest.POST: {
                response = await instanceAPIBase.post(url, params, configs);
                break;
            }
            case typeRequest.PUT: {
                response = await instanceAPIBase.put(url, params, configs);
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
        console.log("Response API:", response);
        let status = response.status;
        let responsesData = response.data;
        if (isSuccess(status)) {
            return responsesData;
        } else {
            showAlertError("Server busy...");
            return response;
        }
    } catch (error) {
        console.log("Có lỗi sảy ra:", error);
        showAlertError("Have Exceptions when call API...");
    }
}

//GET:
async function getAPI(url, params, configs) {
    const responseMethodGet = await request(
        url,
        params,
        typeRequest.GET,
        configs
    );
    return responseMethodGet;
}

//POST:
async function postAPI(url, params, configs) {
    console.log("url", url);
    console.log("params", params);
    let responseMethodPost = await request(
        url,
        params,
        typeRequest.POST,
        configs
    );
    return responseMethodPost;
}

//PUT:
async function putAPI(url, params, configs) {
    let responseMethodPut = await request(
        url,
        params,
        typeRequest.PUT,
        configs
    );
    return responseMethodPut;
}

//DELETE:
async function deleteAPI(url, params) {
    const responseMethodDelete = await request(
        url,
        params,
        typeRequest.DELETE
    );
    return responseMethodDelete;
}

//ALL API:
async function requestAllAPI([...requestAPI]) {
    let responsesRresult = [];
    await axios
        .all(requestAPI)
        .then(
            axios.spread((...responses) => {
                responsesRresult = responses;
            })
        )
        .catch((errors) => {
            return errors;
        });
    return responsesRresult;
}

export { getAPI, postAPI, putAPI, deleteAPI, requestAllAPI };
