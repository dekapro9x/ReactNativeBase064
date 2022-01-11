import rgbaColor from "hex-to-rgba";
const colorRgbaConvert = hexColor => {
  return rgbaColor(hexColor, "1");
};
export { colorRgbaConvert };
