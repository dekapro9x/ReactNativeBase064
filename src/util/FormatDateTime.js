import { default as moment, default as Moment } from "moment";
import numeral from "numeral";
import ColorConvert from "@css/ColorConvert";
const zone = moment().utcOffset();
export const FORMAT_SERVER = "YYYY/MM/DD HH:mm:ss";
export const FORMAT_TO_SERVER = "yyyy-MM-DDTHH:mm:ss.SSS";
export const FORMAT_TO_CLIENT = "yyyy-MM-DD HH:mm";
export const FORMAT_DD_MM_YYY_HH_MM_SS = "DD/MM/YYYY HH:mm:ss";
export const FORMAT_HH_MM_SS_DD_MM_YYY = "HH:mm:ss DD/MM/YYYY";
export const FORMAT_HH_MM_DD_MM_YYY = "HH:mm DD/MM/YYYY";
export const FORMAT_DD_MM_YYYY = "DD/MM/YYYY";
export const FORMAT_HH_MM = "HH:mm";
export const FORMAT_YYYY_MM_DD = "yyyy-MM-DD";
export const FORMAT_YYYYMMDDhhmm = "yyyy-MM-DD HH:mm";
export const FORMAT_YYYYMMDDhhmmss = "yyyy-MM-DD HH:mm:ss";
export const FORMAT_YYYYMMDDhhmmssZ = "yyyy-MM-DDTHH:mm:ss.SSSZ";

//Lấy ngày nghỉ của Năm:
export const dataHoliday = ["01-01", "04-30", "05-01", "09-02"]
export const getDateHolidayOfYear = () => {
  var data = []
  let dataYear = ["2019", "2020", "2021", "2022", "2023",]
  for (let i = 0; i < dataHoliday.length; i++) {
    for (let index = 0; index < dataYear.length; index++) {
      data = {
        ...data,
        ...{
          [dataYear[index] + '-' + dataHoliday[i]]: {
            disabled: false,
            customStyles: {
              text: { color: dayOffCalendarColor },
            },
          }
        }
      }
    }
  }
  return data
}

const dayString = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

//Định dạng thời gian dạng (Năm-Tháng-Ngày):
export function formatTimeYYMMDD(timeStamp) {
  if (!timeStamp) {
    return "";
  }
  const date = new Date(timeStamp);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

//Lấy thứ hiện tại bằng timeStamp:
export const getCurrentDayByTimeStamp = (timeStamp) => {
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

//Lấy thứ hiện tại :
export function convertToDay(date) {
  let indexDay = moment(date).day()
  let weekday = [
    "Chủ Nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7"];
  return weekday[indexDay];
}

const dayOffCalendarColor = ColorConvert.dayOffCalendar;
const disabledDateCalendar = ColorConvert.disabledDateCalendar;

export const formatCurrency = (number) =>
  `${numeral(number || 0)
    .format("0,0")
    .replace(/,/g, ",")} ₫`;

export const fromDateFormat = (date1, date2 = moment()) => {
  moment.locale(deviceLanguage.substring(0, 2));
  date1 = moment(new Date(date1));
  let diffDays = getDiffDays(date1);
  let dateFormat = date1.subtract(diffDays, "days").calendar();
  return dateFormat;
};

export const getDiffDays = (date1, date2 = moment()) => {
  date1 = moment(new Date(date1));
  let diffDays = date2.diff(date1, "days");
  return diffDays;
};

export const convertTimeDate1 = (valueDate, format) => {
  return moment(valueDate).format(format);
}

export const convertTimeDate = (valueDate, format) => {
  if (!valueDate) return "";
  return moment(valueDate, FORMAT_SERVER)
    .utcOffset(zone * 2)
    .format(format);
};

export const convertTimeDateFormatVN = (valueDate) => {
  if (!valueDate) return "";
  return convertTimeDate(valueDate, FORMAT_DD_MM_YYY_HH_MM_SS);
};

export const convertDateFormatVN = (valueDate) => {
  if (!valueDate) return "";
  return Moment(valueDate).format(FORMAT_YYYY_MM_DD);
};

export const convertStringToFormatServer = (valueDate) => {
  if (!valueDate) return "";
  return moment(valueDate, FORMAT_TO_CLIENT).format(FORMAT_TO_SERVER);
};

export const convertGetDateTime = (valueDateTime, fomart) => {
  if (!valueDateTime) return "";
  return moment(valueDateTime, FORMAT_TO_SERVER).format(fomart);
};

export const convertTimeDateVN = (valueDate, format) => {
  if (!valueDate) return "";
  return moment(valueDate, FORMAT_SERVER).format(format);
};

export const convertTimeZone = (valueDate, format) => {
  if (!valueDate) return "";
  return moment(valueDate, FORMAT_SERVER).format(format);
};

export const convertTimeServerToDateVN = (valueDate, format) => {
  if (!valueDate) return "";
  return (
    moment(valueDate, FORMAT_SERVER)
      // .utcOffset(zone * 2)
      .format(format)
  );
};

export const convertTimeServerTimeZoneToDateVN = (valueDate, format) => {
  if (!valueDate) return "";
  return moment(valueDate, FORMAT_SERVER)
    .utcOffset(zone * 2)
    .format(format);
};

export const convertNewDateToServer = (valueDate, format) => {
  if (!valueDate) return "";
  return moment(valueDate, FORMAT_SERVER)
    .utcOffset(-zone / 2)
    .format(format);
};

//Lấy ngày nghỉ của tháng:
export const getHolidaysDatesOfMonth = (
  startDate,
  endDate,
  daysToDisable = [0.7]
) => {
  const disabledDates = {};
  const start = moment(startDate);
  const end = moment(endDate);
  for (let m = moment(start); m.diff(end, "days") <= 0; m.add(1, "days")) {
    var isPast = moment(convertTimeDate(new Date(), FORMAT_YYYY_MM_DD)).isAfter(
      convertTimeDate(m, FORMAT_YYYY_MM_DD)
    );
    if (isPast) {
      disabledDates[m.format("YYYY-MM-DD")] = {
        disabled: true,
        customStyles: {
          text: { color: disabledDateCalendar },
        },
      };
    }
    if (_.includes(daysToDisable, m.weekday())) {
      disabledDates[m.format("YYYY-MM-DD")] = {
        disabled: true,
        dayOffCalendarColor,
        customStyles: {
          text: { color: dayOffCalendarColor },
        },
      };
    }
    let dayMoment = moment(m.format("YYYY-MM-DD")).day()
    if (dayMoment === 0) {
      disabledDates[m.format("YYYY-MM-DD")] = {
        disabled: true,
        disabledDateCalendar,
        customStyles: {
          text: { color: disabledDateCalendar },
        },
      };
    }
  }
  return disabledDates;
};

//Lấy ngày nghỉ của tháng tiếp theo:
export const getHolidaysDatesOfMonthNow = (month) => {
  let monthConv = month;
  if (!month) {
    monthConv = convertTimeDate(new Date(), FORMAT_YYYY_MM_DD);
  }
  const startDate = moment(monthConv).startOf("month").format("YYYY-MM-DD");
  const endDate = moment(monthConv).endOf("month").format("YYYY-MM-DD");
  return getHolidaysDatesOfMonth(startDate, endDate, [0, 7]);
};

export const isPastWithCurrentDate = (date, fomartDate = FORMAT_YYYY_MM_DD) => {
  var isPast = moment(
    convertTimeServerToDateVN(new Date(), fomartDate)
  ).isAfter(convertTimeServerToDateVN(date, fomartDate));
  return isPast;
};

export const isCompareTime = (time1, time2, fomart = FORMAT_TO_SERVER) => {
  var isPast = moment(convertTimeServerToDateVN(time1, fomart)).isAfter(
    convertTimeServerToDateVN(time2, fomart)
  );
  return isPast;
};

export const isCompareTime1 = (time1, time2, fomart = FORMAT_TO_SERVER) => {
  console.log("moment(convertDateFormatVN(time1, fomart)):    ", convertDateFormatVN(moment(time1)))
  console.log("moment(convertDateFormatVN(time2, fomart)):    ", moment(time2))
  var isPast = moment(time1).startOf('day').isSame(
    moment(time2).startOf('day')
  );
  return isPast;
};

export const isYesterday = (momentDate, momentDate1) => {
  let YESTERDAY = moment(momentDate1).subtract(1, 'days').startOf('day');
  return moment(momentDate).isSame(YESTERDAY, 'd');
};

export const getAddDay = (momentDate1, day) => {
  let YESTERDAY = moment(momentDate1).add(day, 'days')
  return YESTERDAY
};

export const getAdd30Days = (momentDate1, day) => {
  let data = moment(momentDate1).add(day, 'd')
  return convertDateFormatVN(data)
};

export const getAddMonth = (momentDate1, month) => {
  let data = moment(momentDate1).add(month, 'M')
  return convertDateFormatVN(data)
};

export const getDate16h30 = (date) => {
  let date16h30 = convertDateFormatVN(date) + 'T16:30:00'
  return moment(date16h30);
};

export const convertDate16h30 = (date) => {
  let date16h30 = date + 'T16:30:00'
  return moment(date16h30);
};

export const getHourseWork = (startTime, endTime, distance) => {
  let result = [];
  if (startTime && endTime && distance) {
    let startMinutes = hmsToSecondsOnly(startTime);
    let endMinutes = hmsToSecondsOnly(endTime);
    let index = 1;
    while (parseInt(startMinutes) < parseInt(endMinutes)) {
      let endPeriod = parseInt(startMinutes) + parseInt(distance);
      result.push(itemHourse(index, startMinutes, endPeriod));
      startMinutes = endPeriod;
      index++;
    }
  }
  return result;
};

const itemHourse = (index, start, end) => {
  let stStart = start / 60 + ":" + (start % 60);
  let stEnd = end / 60 + ":" + (end % 60);
  return {
    id: index,
    title: `${stStart} - ${stEnd}`,
    startTime: stStart,
    endTime: stEnd,
  };
};

export const hmsToSecondsOnly = (str) => {
  var p = str.split(":"),
    s = 0,
    m = 1;
  while (p.length > 0) {
    s += m * parseInt(p.pop(), 10);
    m *= 60;
  }
  return s;
};
