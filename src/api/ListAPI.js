
import {
    APP_ID,
    URL_DOMAIN,
    DEVICE_ID,
    COMPANY_ID,
    TYPE_PLAFORM,
    PRIVATE_KEY_DEVICE_ID,
    isIos,
    versionApp,
    APP_ID1,
  } from './System';
  
  const Api = {
    //API test thử:
    registrationDeviceID: () => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID1}/device/pushDeviceId?companyId=${COMPANY_ID}&deviceId=${DEVICE_ID}&deviceType=${TYPE_PLAFORM}&privateKey=${PRIVATE_KEY_DEVICE_ID}`;
    },
  };
  export {Api};
  