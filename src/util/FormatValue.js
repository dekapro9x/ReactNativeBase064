
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
  formatNumberZipCode
};
