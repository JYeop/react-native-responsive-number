# react-native-responsive-number

Helps you to make responsive view by adjusting size of the elements. You can use this package for all devices. Also, can controll letterspacing. Just put the photoshop value with font size!

![Imgur](https://i.imgur.com/nXXbVen.jpg "Galaxy S10+")
![Imgur](https://i.imgur.com/UeQ9jBV.png "iPhone XS")

## Before Start

If you don't want the 'font scaling' function of the smartphone, just add this code in your `index.js`.

```js
import { Text } from "react-native";
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
```

## Components

- `responsiveNumber(function)`: Returns a number based on the size of the iPhone X or XS. Maybe you will use this more than any of the functions below. Mostly, I use this function for reactive `fontsizes`, `width`, `height`.

```js
import { StyleSheet } from "react-native";
import { responsiveNumber } from "react-native-responsive-number";

export default StyleSheet.create({
  title: {
    fontSize: responsiveNumber(15), // On iPhone X : 15, iPhone XS Max: 16.5
    width: responsiveNumber(120), // On iPhone X : 120, iPhone XS Max: 132
    height: responsiveNumber(270) // On iPhone X : 270, iPhone XS Max: 297
  }
});
```

- `responsiveLetterSpacing(function)`: Converts the method of the Photoshop to the react-native unit letter spacing. Parameter type is all numbers, but you can use numberable strings (ex: `102`) . If you want CSS unit, you don't have to use this. Just put pixel unit(ex: `-1.1`). It is what react-native does. **Must provide font size like the example.**

```js
import { StyleSheet } from "react-native";
import { responsiveLetterSpacing } from "react-native-responsive-number";

// responsiveLetterSpacing(letterSpacing, fontsize)
StyleSheet.create({
  title: {
    fontSize: responsiveNumber(15),
    letterSpacing: responsiveLetterSpacing(-30, 15) // MUST PROVIDE THE FONTSIZE TOO!!!
    // responsiveLetterSpacing("-30", "15"); // Same above
  }
});
```

- `letterSpacing(function)`: Converts the method of the Photoshop to the react-native unit letter spacing. Parameter type is all numbers, but you can use numberable strings (ex: `102`) . If you want CSS unit, you don't have to use this. Just put pixel unit(ex: `-1.1`). It is what react-native does. **Its different from responsiveLetterSpacing. It is not for responsive Ui. **

```js
import { StyleSheet } from "react-native";
import { letterSpacing } from "react-native-responsive-number";

// letterSpacing(letterSpacing, fontsize)
StyleSheet.create({
  title: {
    fontSize: 15,
    letterSpacing: letterSpacing(-30, 15) // MUST PROVIDE THE FONTSIZE TOO!!!
    // letterSpacing("-30", "15"); // Same above
  }
});
```

- `widthByPercent(function)`: Returns a number calculated with the percent of the device width.

```js
import { StyleSheet } from "react-native";
import { widthByPercent } from "react-native-responsive-number";

export default StyleSheet.create({
  image: {
    width: widthByPercent(15) // On iPhone X : 56, iPhone XS Max: 62
    // width: widthByPercent('15%')   // Same above
    // width: widthByPercent('15')   // Same above
  }
});
```

- `widthByRatio(function)`: Returns a number calculated with the ratio of the device width.

```js
import { StyleSheet } from "react-native";
import { widthByRatio } from "react-native-responsive-number";

export default StyleSheet.create({
  image: {
    width: widthByRatio(0.15) // On iPhone X : 56, iPhone XS Max: 62
    // width: widthByRatio('0.15')   // Same above
  }
});
```

- `heightByPercent`: Returns a number calculated with the ratio of the device height.

```js
import { StyleSheet } from "react-native";
import { heightByPercent } from "react-native-responsive-number";

export default StyleSheet.create({
  image: {
    height: heightByPercent(15) // On iPhone X : 121, iPhone XS Max: 134
    // height: heightByPercent('15%')   // Same above
    // height: heightByPercent('15')   // Same above
  }
});
```

- `heightByRatio(function)`: Returns a number calculated with the ratio of the device height.

```js
import { StyleSheet } from "react-native";
import { heightByRatio } from "react-native-responsive-number";

export default StyleSheet.create({
  image: {
    height: heightByRatio(0.15) // On iPhone X : 121, iPhone XS Max: 134
    // height: heightByRatio('0.15')   // Same above
  }
});
```

- `deviceHeight(number)`: Returns the screen pixel height of the device

```js
import { StyleSheet } from "react-native";
import { deviceHeight } from "react-native-responsive-number";

export default StyleSheet.create({
  image: {
    height: deviceHeight // returns the device screen height(pixel)
  }
});
```

- `deviceWidth(number)`: Returns the screen pixel height of the device.

```js
import { StyleSheet } from "react-native";
import { deviceWidth } from "react-native-responsive-number";

export default StyleSheet.create({
  image: {
    width: deviceWidth // returns the device screen width(pixel)
  }
});
```

- `screenRatio(function)`: Returns the screen ratio.

```js
import { StyleSheet } from "react-native";
import { screenRatio } from "react-native-responsive-number";

console.log(screenRatio()); // iPhone X : 2.16
```
