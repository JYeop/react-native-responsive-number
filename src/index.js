"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
// const pixelRatio = PixelRatio.getFontScale();
exports.deviceHeight = react_native_1.Dimensions.get("window").height;
exports.deviceWidth = react_native_1.Dimensions.get("window").width;
var floorToInt = function (integer) {
    return Math.floor(integer * 10) / 10;
};
var floorToFloat = function (integer) {
    return Math.floor(integer);
};
// const floorBelowN = (integer: number, n: number): number => {
//   return floorToFloat(integer * Math.pow(10, n)) / Math.pow(10, n);
// };
exports.widthByPercent = function (stringInput) {
    var getRatio = typeof stringInput === "number"
        ? stringInput / 100
        : Number(stringInput.replace("%", "")) / 100;
    return floorToFloat(getRatio * exports.deviceWidth);
};
exports.widthByRatio = function (stringInput) {
    var getRatio;
    if (typeof stringInput === "number") {
        getRatio = stringInput;
    }
    else {
        getRatio = Number(stringInput);
    }
    return floorToFloat(getRatio * exports.deviceWidth);
};
exports.heightByPercent = function (stringInput) {
    var getRatio;
    if (typeof stringInput === "number") {
        getRatio = stringInput / 100;
    }
    else {
        getRatio = Number(stringInput.replace("%", "")) / 100;
    }
    return floorToFloat(getRatio * exports.deviceHeight);
};
exports.heightByRatio = function (stringInput) {
    var getRatio;
    if (typeof stringInput === "number") {
        getRatio = stringInput;
    }
    else {
        getRatio = Number(stringInput);
    }
    return floorToFloat(getRatio * exports.deviceHeight);
};
exports.responsiveLetterSpacing = function (letterTrackingValue, fontPixel) {
    return ((Number(letterTrackingValue) * Number(exports.responsiveNumber(fontPixel))) / 1000);
};
exports.letterSpacing = function (letterTrackingValue, fontPixel) {
    return (Number(letterTrackingValue) * Number(fontPixel)) / 1000;
};
exports.screenRatio = function () {
    return Math.floor((exports.deviceHeight / exports.deviceWidth) * 100) / 100;
};
exports.responsiveNumber = function (integer) {
    var convertedInteger = Number(integer);
    var widthToUse = 375;
    var ratio = exports.deviceWidth / widthToUse;
    return floorToInt(convertedInteger * ratio);
};
exports.responsiveNumberByHeight = function (integer) {
    var convertedInteger = Number(integer);
    var widthToUse = 375;
    var ratio = exports.deviceWidth / widthToUse;
    return floorToInt(convertedInteger * ratio);
};
exports.default = {
    responsiveNumber: exports.responsiveNumber,
    widthByRatio: exports.widthByRatio,
    heightByRatio: exports.heightByRatio,
    widthByPercent: exports.widthByPercent,
    heightByPercent: exports.heightByPercent,
    deviceHeight: exports.deviceHeight,
    deviceWidth: exports.deviceWidth,
    screenRatio: exports.screenRatio,
    responsiveLetterSpacing: exports.responsiveLetterSpacing
};
