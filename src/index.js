"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
// const pixelRatio = PixelRatio.getFontScale();
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
    var dvWidth = react_native_1.Dimensions.get("window").width;
    return floorToFloat(getRatio * dvWidth);
};
exports.widthByRatio = function (stringInput) {
    var getRatio;
    if (typeof stringInput === "number") {
        getRatio = stringInput;
    }
    else {
        getRatio = Number(stringInput);
    }
    var dvWidth = react_native_1.Dimensions.get("window").width;
    return floorToFloat(getRatio * dvWidth);
};
exports.heightByPercent = function (stringInput) {
    var getRatio;
    if (typeof stringInput === "number") {
        getRatio = stringInput / 100;
    }
    else {
        getRatio = Number(stringInput.replace("%", "")) / 100;
    }
    var dvHeight = react_native_1.Dimensions.get("window").height;
    return floorToFloat(getRatio * dvHeight);
};
exports.heightByRatio = function (stringInput) {
    var getRatio;
    if (typeof stringInput === "number") {
        getRatio = stringInput;
    }
    else {
        getRatio = Number(stringInput);
    }
    var dvHeight = react_native_1.Dimensions.get("window").height;
    return floorToFloat(getRatio * dvHeight);
};
exports.responsiveLetterSpacing = function (letterTrackingValue, fontPixel) {
    return ((Number(letterTrackingValue) * Number(exports.responsiveNumber(fontPixel))) / 1000);
};
exports.deviceHeight = react_native_1.Dimensions.get("window").height;
exports.deviceWidth = react_native_1.Dimensions.get("window").width;
exports.screenRatio = function () {
    return Math.floor((exports.deviceHeight / exports.deviceWidth) * 100) / 100;
};
exports.responsiveNumber = function (integer) {
    var convertedInteger = Number(integer);
    var widthToUse = 375;
    var dvWidth = react_native_1.Dimensions.get("window").width;
    var ratio = dvWidth / widthToUse;
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
