# react-native-responsive-number

Helps you to make responsive view by adjusting size of the elements. You can use this package for all devices. Also, can controll letterspacing. Just put the photoshop value with font size!

## Elements

- responsiveNumber: Returns a number based on the size of the 'iPhone X or XS'. Maybe you will use this more than below functions.

```js
import { StyleSheet } from "react-native";
import { responsiveNumber } from "react-native-responsive-number";

export default StyleSheet.create({
  title: {
    fontSize: responsiveNumber(15), // On iphoneX : 15, iphoneXS Max: 16.5
    width: responsiveNumber(120), // On iphoneX : 120, iphoneXS Max: 132
    height: responsiveNumber(270) // On iphoneX : 270, iphoneXS Max: 297
  }
});
```

- responsiveLetterSpacing: converts react-native unit letter spacing to the method of the Photoshop. Parameter type is all numbers, but you can use numberable strings (ex: '102') . If you want css unit, you don`t have to use this. Just put pixel unit(ex: -1.1). It is what react-native does. **Must provide font size like the example.**

```js
import { StyleSheet } from "react-native";
import { responsiveLetterSpacing } from "react-native-responsive-number";

StyleSheet.create({
  title: {
    fontSize: responsiveNumber(15), // MUST
    letterSpacing: responsiveNumber(-30, 15) // MUST PROVIDE THE FONTSIZE TOO!!!
    // responsiveLetterSpacing("-30", "15"); // Same above
  }
});
```

- widthByPercent: Returns a number calculated with the percent of the device width.

```js
import { StyleSheet } from "react-native";
import { wp, widthByPercent } from "react-native-responsive-number";

export default StyleSheet.create({
  image: {
    width: widthByPercent(15) // On iphoneX : 56, iphoneXS Max: 62
    // width: widthByPercent('15%')   // Same above
    // width: widthByPercent('15')   // Same above
  }
});
```

- widthByRatio: Returns a number calculated with the ratio of the device width.

```js
import { StyleSheet } from "react-native";
import { widthByRatio } from "react-native-responsive-number";

export default StyleSheet.create({
  image: {
    width: widthByRatio(0.15) // On iphoneX : 56, iphoneXS Max: 62
    // width: widthByRatio('0.15')   // Same above
  }
});
```

- heightByPercent: Returns a number calculated with the ratio of the device height.

```js
import { StyleSheet } from "react-native";
import { heightByPercent } from "react-native-responsive-number";

export default StyleSheet.create({
  image: {
    height: heightByPercent(15) // On iphoneX : 121, iphoneXS Max: 134
    // height: heightByPercent('15%')   // Same above
    // height: heightByPercent('15')   // Same above
  }
});
```

- heightByRatio: Returns a number calculated with the ratio of the device height.

```js
import { StyleSheet } from "react-native";
import { heightByRatio } from "react-native-responsive-number";

export default StyleSheet.create({
  image: {
    height: heightByRatio(0.15) // On iphoneX : 121, iphoneXS Max: 134
    // height: heightByRatio('0.15')   // Same above
  }
});
```

- deviceHeight: Returns the screen pixel height of the device

```js
import { StyleSheet } from "react-native";
import { deviceHeight } from "react-native-responsive-number";

export default StyleSheet.create({
  image: {
    height: deviceHeight // returns the device screen height(pixel)
  }
});
```

- deviceWidth: Returns the screen pixel height of the device.

```js
import { StyleSheet } from "react-native";
import { deviceWidth } from "react-native-responsive-number";

export default StyleSheet.create({
  image: {
    width: deviceWidth // returns the device screen width(pixel)
  }
});
```

- screenRatio: Returns the screen ratio.

```js
import { StyleSheet } from "react-native";
import { screenRatio } from "react-native-responsive-number";

console.log(screenRatio()); //iPhone X : 2.16
```
