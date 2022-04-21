import { API_BASE, ERROR_CODE_SUCCESS, typeRequest } from "./Setting";
import axios from "axios";
import { Alert } from "react-native";

//API config with BackEnd:
const instanceAPIBase = axios.create({
    baseURL: API_BASE,
    timeout: 60000,
    headers: {
        Accept: "application/json, text/plain",
    },
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
        let status = response.status;
        let responsesData = response.data;
        if (isSuccess(status)) {
            return responsesData;
        } else {
            showAlertError("Server busy...");
            return response;
        }
    } catch (error) {
        console.log("error", error);
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


//API Party 3:
const urlParty3 = {
    tagGames: "v1/games/tags",
};



export { getAPI, postAPI, putAPI, deleteAPI, requestAllAPI };
