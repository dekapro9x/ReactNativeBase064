//Lấy ảnh hiển thị tiêu đề nội dung:
const getImageWithLinkYouTube = (link) => {
  let video_id = link.split('v=')[1];
  const ampersandPosition = video_id.indexOf('&');
  if (ampersandPosition !== -1) {
    video_id = video_id.substring(0, ampersandPosition);
  }
  return `https://img.youtube.com/vi/${video_id}/sddefault.jpg`;
};

//Lấy id của Youtobe:
const getIDWithLinkYouTube = (link) => {
  let video_id = link.split('v=')[1];
  const ampersandPosition = video_id.indexOf('&');
  if (ampersandPosition != -1) {
    video_id = video_id.substring(0, ampersandPosition);
  }
  return video_id;
};

export {getImageWithLinkYouTube,getIDWithLinkYouTube}