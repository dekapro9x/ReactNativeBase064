function isEmail(text: string): boolean {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(text);
}

function isVideo(url: string) {
  let ext = url.split('.').pop()?.split(/\#|\?/)[0];
  if (!!ext) {
    let videoExt = [
      'MOV',
      'AVI',
      'MP4',
      'M4P',
      'M4V',
      'MPG',
      'MPEG',
      'MPE',
      'MPV',
      'WEBM',
    ];
    if (`${videoExt}`.includes(ext.toLocaleUpperCase())) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};


function isPhoneNumber(numberPhone: string) {

}

function isBarCode(barCode: string) {

}

export { isEmail, isVideo, isPhoneNumber };

