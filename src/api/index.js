
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
    //API đăng kí ID thiết bị:
    registrationDeviceID: () => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID1}/device/pushDeviceId?companyId=${COMPANY_ID}&deviceId=${DEVICE_ID}&deviceType=${TYPE_PLAFORM}&privateKey=${PRIVATE_KEY_DEVICE_ID}`;
    },
  
    //API đăng kí token Push:
    registrationDeviceToken: (deviceToken) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID1}/device/pushDeviceToken?deviceId=${DEVICE_ID}&deviceToken=${deviceToken}&privateKey=${PRIVATE_KEY_DEVICE_ID}`;
    },
  
    //API lấy cấu hình App:
    getAppData: (appVersion) => {
      const OS = isIos ? 'ios' : 'android';
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/app/getAppData/${appVersion}?typeOs=${OS}&versionApp=${versionApp}&deviceId=${DEVICE_ID}`;
    },
  
    //API lấy danh sách slider Home :
    getHomeSlider: () => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/sliderImage/list?deviceId=${DEVICE_ID}`;
    },
  
    //API lấy danh sách ảnh Slide home:
    openHomeSlide: (slideId) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/sliderImage/countView?deviceId=${DEVICE_ID}&sliderId=${slideId}`;
    },
  
    //API lấy danh sách notice Home :
    getHomeNotice: (typeScreen) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/notification/getLatestNotification?deviceId=${DEVICE_ID}&typeScreen=${typeScreen}`;
    },
  
    //API lấy điều khoản sử dụng (Cái này hiện tại không dùng mà lấy policy ở API getAppData):
    getPolicy: () => {
      return `${URL_DOMAIN}/api/v1/web/${APP_ID}/term/detail`;
    },
  
    //Kiểm tra server đang có bảo trì không:
    checkVersion: () => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID1}/app/checkVersionApp`;
    },
  
    //Lấy danh sách push:
    getPushNotification: (page, size = 20) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/pushNotification/list-mobile?size=${size}&deviceId=${DEVICE_ID}&page=${page}&typeScreen=LIST_PUSH`;
    },
  
    //Lấy detail Push:
    openPushNotiItem: (pushNotiId) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/pushNotification/detail/${pushNotiId}?deviceId=${DEVICE_ID}`;
    },
  
    //(Chưa dùng)
    getDataCoupon: () => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/coupon/listForMobile?deviceId=${DEVICE_ID}`;
    },
    //Kiểm tra màn hình Home có item MenuNoti có chữ New không?
    checkStatusNotiHome: () => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/notification/checkStatus?deviceId=${DEVICE_ID}`;
    },
  
    //Lấy danh sách DropDown Store:
    getListCityAndDistrictAPI: () => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/store/getListCityAndDistrict`;
    },
  
    //(Chưa dùng)
    useCoupon: () => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/coupon/use`;
    },
    //Kiểm tra xem có coupon mới không:
    hasNewCoupon: () => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/coupon/checkHasNewCoupon?deviceId=${DEVICE_ID}`;
    },
    //(Chưa dùng)
    useCouponInDetail: (couponId) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/coupon/detail/${couponId}?deviceId=${DEVICE_ID}`;
    },
  
    //Kiểm tra số lượng push noti mới hiển thị trên icon menu:
    countNumberPushOnMenu: () => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/pushNotification/checkStatusPushNotification?deviceId=${DEVICE_ID}`;
    },
  
    //API Đăng kí tài khoản:
    register: () => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID1}/member/register`;
    },
  
    //API kiểm tra số điện thoại đã tồn tại hay chưa:
    isExistPhoneNumberAPI: (phone) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/member/validatePhoneNumber?phoneNumber=${phone}`;
    },
  
    //API kiểm tra validate Zipcode:
    validateZipCodeAPI: (zipCode) => {
      return `${URL_DOMAIN}/api/v1/zipCode/validate?zipCode=${zipCode}`;
    },
  
    //Đăng nhập tài khoản:
    login: () => `${URL_DOMAIN}/login`,
  
    //Lấy token mới khi hết hạn token:
    getAccessToken: (refreshToken) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID1}/member/getAccessToken?refreshToken=${refreshToken}`;
    },
  
    //Lấy danh mục checkbox sở thích:
    listFavoriteCategoryRegistrationUser: () => {
      return `${URL_DOMAIN}/api/v1/app/favoriteCategory/listMobile`;
    },
  
    //Đọc thông báo thường:
    readNotiAPI: (notificationId) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/notification/detail/${notificationId}?deviceId=${DEVICE_ID}`;
    },
  
    //API kích hoạt mã OTP:
    activeOTP: (OTP, phoneNumber, otpType) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID1}/member/confirmOTPCode?otpCode=${OTP}&otpType=${otpType}&phone=${phoneNumber}`;
    },
  
    //Đổi mật khẩu:
    setNewPasswordApp: (newPass, phoneNumber, OTP) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/member/setPasswordForApp?otpCode=${OTP}&phoneNumber=${phoneNumber}&newPassword=${newPass}`;
    },
  
    //Lấy thông tin người dùng trong MyPage:
    getInfoMyPage: () => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/member/getInformationMyPage`;
    },
  
    //API chứng nhận thành viên:
    getCertification: () => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID1}/member/certification`;
    },
  
    //API lấy danh sách cửa hàng:
    getListStore: (size, page, latitude, longitude, cityID, districtID) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/store/getListStore?size=${size}&page=${page}${
        latitude ? `&latitude=${latitude}` : ''
      }${longitude ? `&longitude=${longitude}` : ''}${
        cityID ? `&cityId=${cityID}` : ''
      }${districtID ? `&districtId=${districtID}` : ''}`;
    },
  
    //Lấy danh sách thông báo thường:
    getListNotificationAll: (size, page) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/notification/all?page=${page}&size=${size}&deviceId=${DEVICE_ID}&typeScreen=LIST_NOTIFICATION`;
    },
  
    //Lấy danh sách video:
    getListVideo: (page, size) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/video/list?page=${page}&size=${size}`;
    },
  
    //Lấy chi tiết thông báo thường:
    detailNoti: (notificationId) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/notification/detail/${notificationId}?deviceId=${DEVICE_ID}`;
    },
  
    //Lấy danh sách câu hỏi tường gặp:
    getListQuestions: () => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/appQuestion/list`;
    },
  
    //API quên mật khẩu:
    forgotPasswordApp: (phoneNumber, date) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID1}/member/forgotPasswordForApp?phoneNumber=${phoneNumber}&birthday=${date}`;
    },
  
    //Gửi lại API đăng kí tài khoản :
    reSentOTP: (otpType, phone, memberId) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID1}/member/reSendOTPMessage?otpType=${otpType}&phone=${phone}&memberId=${memberId}`;
    },
  
    //API theo dõi cửa hàng.
    setFollowStore: (storeCode, memberCode) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/store/setBookmarked?storeCode=${storeCode}&memberCode=${memberCode}`;
    },
  
    //Lấy danh sách cửa hàng đã theo dõi:
    getListBookMarkAPI: (size, page) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/store/getListStoreBookmarked?size=${size}&page=${page}`;
    },
  
    //API Đổi số điện thoại:
    changePhoneNumberAPI: (oldPhoneNumber, newPhoneNumber) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID1}/member/changePhoneNumber?oldPhoneNumber=${oldPhoneNumber}&newPhoneNumber=${newPhoneNumber}`;
    },
  
    //Đếm số lượng người xem video:
    countSeenVideoAPI: (idVideo) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID}/video/countView?deviceId=${DEVICE_ID}&videoId=${idVideo}`;
    },
  
    //Kiểm tra mật khẩu thay đổi lần cuối cùng khi vào App ở nhiều máy:
    checkPassWordAppChangeLate: (passWordLate) => {
      return `${URL_DOMAIN}/api/v1/app/${APP_ID1}/member/validatePassword?password=${passWordLate}`;
    },
  
  };
  export {Api};
  