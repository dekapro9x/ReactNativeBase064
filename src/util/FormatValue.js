
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

export const formatMoney = (money) => `${money / 1000}K`;

export const formatCopyInUnitK = (number) =>
  `${numeral(number / 1000)
    .format("0,0")
    .replace(/,/g, ",")}k`;

export const formatCurrencyWithoutUnit = (number) =>
  `${numeral(number || 0)
    .format("0,0")
    .replace(/,/g, ",")}`;

export {
  formatNumberZipCode
};
