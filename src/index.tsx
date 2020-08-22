import * as React from 'react';
import { Dimensions, PixelRatio } from "react-native";

// const pixelRatio = PixelRatio.getFontScale();

export let deviceHeight: number = Dimensions.get("window").height;
export let deviceWidth: number = Dimensions.get("window").width;

const floorToInt = (integer: number): number => {
  return Math.floor(integer * 10) / 10;
};
const floorToFloat = (integer: number): number => {
  return Math.floor(integer);
};
// const floorBelowN = (integer: number, n: number): number => {
//   return floorToFloat(integer * Math.pow(10, n)) / Math.pow(10, n);
// };

export const widthByPercent = (stringInput: number | string): number => {
  const getRatio =
    typeof stringInput === "number"
      ? stringInput / 100
      : Number(stringInput.replace("%", "")) / 100;
  return floorToFloat(getRatio * deviceWidth);
};

export const widthByRatio = (stringInput: number | string): number => {
  let getRatio;
  if (typeof stringInput === "number") {
    getRatio = stringInput;
  } else {
    getRatio = Number(stringInput);
  }
  return floorToFloat(getRatio * deviceWidth);
};

export const heightByPercent = (stringInput: number | string): number => {
  let getRatio;
  if (typeof stringInput === "number") {
    getRatio = stringInput / 100;
  } else {
    getRatio = Number(stringInput.replace("%", "")) / 100;
  }
  return floorToFloat(getRatio * deviceHeight);
};

export const heightByRatio = (stringInput: number | string): number => {
  let getRatio;
  if (typeof stringInput === "number") {
    getRatio = stringInput;
  } else {
    getRatio = Number(stringInput);
  }
  return floorToFloat(getRatio * deviceHeight);
};

export const responsiveLetterSpacing = (
  letterTrackingValue: number,
  fontPixel: number
): number => {
  return (
    (Number(letterTrackingValue) * Number(responsiveNumber(fontPixel))) / 1000
  );
};

export const letterSpacing = (
  letterTrackingValue: number,
  fontPixel: number
): number => {
  return (Number(letterTrackingValue) * Number(fontPixel)) / 1000;
};

export const screenRatio = (): number => {
  return Math.floor((deviceHeight / deviceWidth) * 100) / 100;
};

export const responsiveNumber = (integer: number): number => {
  const [width, setWidth] = React.useState(375);
  const convertedInteger = Number(integer);
  const widthToUse = 375;
  const ratio = width / widthToUse;
  React.useEffect(() => {
    setWidth(Dimensions.get("window").width);
  })
  return floorToInt(convertedInteger * ratio);
};

export const responsiveNumberByHeight = (integer: number): number => {
  const convertedInteger = Number(integer);
  const widthToUse = 375;
  const ratio = deviceWidth / widthToUse;
  return floorToInt(convertedInteger * ratio);
};

export default {
  responsiveNumber,
  widthByRatio,
  heightByRatio,
  widthByPercent,
  heightByPercent,
  deviceHeight,
  deviceWidth,
  screenRatio,
  responsiveLetterSpacing
};
