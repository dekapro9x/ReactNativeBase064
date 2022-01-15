//Valdiate số điện thoại đăng kí:
const validatePhone = (phone) => {
    const regEx = /^0[0-9]{9}$/;
    return regEx.test(phone);
};

//Validate theo đầu số nhà mạng:
function validateHeadPhoneNumber(phoneNumber) {
    if (phoneNumber && phoneNumber.charAt(0) !== "0") {
        phoneNumber = "0".concat(phoneNumber);
    }
    var phoneNo = /(09|08|07|05|03|02)+([0-9]{8,9})\b/g;
    if (phoneNumber) {
        var phone = phoneNumber.trim();
        if (phone != "") {
            if (phone.match(phoneNo)) {
                return true;
            }
        }
    }
    return false;
}
//Validate mail:
const validateEmail = (email) => {
    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase());
};

//Validate Pass:
const validatePassword = (password) => {
    const re = /([(a-zA-Z)?(0-9)?]{6,})/;
    return re.test(password.trim());
};


export { validatePhone, validateHeadPhoneNumber, validateEmail, validatePassword }