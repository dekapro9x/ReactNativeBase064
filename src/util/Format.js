const dayString = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

//Định dạng thời gian dạng (Năm-Tháng-Ngày):
function formatTimeYYMMDD(timeStamp) {
  if (!timeStamp) {
    return "";
  }
  const date = new Date(timeStamp);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

//Lấy thứ hiện tại:
const getCurrentDay = timeStamp => {
  let timeCurrent = formatTimeYYMMDD(timeStamp);
  let num = new Date(timeCurrent);
  let sum = num.getDay();
  let yead = num.getFullYear();
  if (yead < 9990 && sum) {
    if (dayString[sum]) {
      return dayString[sum];
    }
    return -1;
  }
  return null;
};

//Hiển thị zipCode dạng ***-****:
const formatNumberZipCode = (number) => {
  if (number) {
    return number
      .replace(/\D+/g, '')
      .replace(/([0-9]{1,3})([0-9]{4}$)/gi, '$1$2');
  } else {
    return '';
  }
};

export {
  formatTimeYYMMDD,
  getCurrentDay,
  formatNumberZipCode
};
