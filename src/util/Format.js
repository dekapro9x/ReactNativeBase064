const dayString = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

function timeFormatYYMMDD(timeStamp) {
  if (!timeStamp) {
    return "";
  }
  const date = new Date(timeStamp);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

const getCurrentDay = timeStamp => {
  let timeCurrent = timeFormatYYMMDD(timeStamp);
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

export { timeFormatYYMMDD, getCurrentDay };
