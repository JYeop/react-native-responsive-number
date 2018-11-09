import { Dimensions } from "react-native";

const floorToInt = integer => {
  return Math.floor(integer * 10) / 10;
};
const floorToFloat = integer => {
  return Math.floor(integer);
};

export const dmFont = integer => {
  const convertedInteger = Number(integer);
  const widthToUse = 375;
  const dvWidth = Dimensions.get("window").width;
  const ratio = dvWidth / widthToUse;
  return floorToInt(convertedInteger * ratio);
};

export const widthByPercent = stringInput => {
  const getRatio =
    typeof stringInput === "number"
      ? stringInput / 100
      : Number(stringInput.replace("%", "")) / 100;
  const dvWidth = Dimensions.get("window").width;
  return floorToFloat(getRatio * dvWidth);
};

export const widthByRatio = stringInput => {
  let getRatio;
  if (typeof stringInput === "number") {
    getRatio = stringInput;
  } else {
    getRatio = Number(stringInput);
  }
  const dvWidth = Dimensions.get("window").width;
  return floorToFloat(getRatio * dvWidth);
};

export const heightByPercent = stringInput => {
  let getRatio;
  if (typeof stringInput === "number") {
    getRatio = stringInput / 100;
  } else {
    getRatio = Number(stringInput.replace("%", "")) / 100;
  }
  const dvHeight = Dimensions.get("window").height;
  return floorToFloat(getRatio * dvHeight);
};

export const heightByRatio = stringInput => {
  let getRatio;
  if (typeof stringInput === "number") {
    getRatio = stringInput;
  } else {
    getRatio = Number(stringInput);
  }
  const dvHeight = Dimensions.get("window").height;
  return floorToFloat(getRatio * dvHeight);
};

export const responsiveLetterSpacing = (letterTrackingValue, fontPixel) => {
  return Number(letterTrackingValue) * Number(fontPixel);
};

export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;

export const screenRatio = () => {
  return Math.floor((deviceHeight / deviceWidth) * 100) / 100;
};

export const responsiveNumber = dmFont;
export const f = dmFont;
export const responsiveFontSize = dmFont;
export const wp = widthByPercent;
export const wr = widthByRatio;
export const hp = heightByPercent;
export const hr = heightByRatio;

export default {
  responsiveNumber,
  dmFont,
  widthByRatio,
  heightByRatio,
  widthByPercent,
  heightByPercent,
  responsiveFontSize: dmFont,
  f: dmFont,
  wp: widthByPercent,
  wr: widthByRatio,
  hp: heightByPercent,
  hr: heightByRatio,
  deviceHeight,
  deviceWidth,
  screenRatio
};
