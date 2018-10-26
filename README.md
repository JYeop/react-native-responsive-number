# react-native-responsive-percent

It helps you to make responsive view by adjusting size of the elements. You can use this package for all devices.

### Elements

- responsiveNumber: Returns a number based on the size of the 'iPhone X or XS'. Maybe you will use this more than below functions.

```js
import { StyleSheet } from "react-native";
import { responsiveNumber } from "react-native-responsive-percent";

export default StyleSheet.create({
  title: {
    fontSize: responsiveNumber(15), // On iphoneX : 15, iphoneXS Max: 16.5
    width: responsiveNumber(120), // On iphoneX : 120, iphoneXS Max: 132
    height: responsiveNumber(270) // On iphoneX : 270, iphoneXS Max: 297
  }
});
```

- f: Returns a number(font size) based on the size of the 'iPhone X or XS'. You can import this with 'dmFont, responsiveFontSize'.

```js
import { StyleSheet } from "react-native";
import { responsiveFontSize, f, dmFont } from "react-native-responsive-percent";

export default StyleSheet.create({
  title: {
    fontSize: responsiveFontSize(15) // On iphoneX : 15, iphoneXS Max: 16.5
    // fontSize: dmFont(15) // Same above
    // fontSize: f(15) // Same above
  }
});
```

- wp: Returns a number calculated with the percent of the device width. You can import this with 'widthByPercent'.

```js
import { StyleSheet } from "react-native";
import { wp, widthByPercent } from "react-native-responsive-percent";

export default StyleSheet.create({
  image: {
    width: widthByPercent(15) // On iphoneX : 56, iphoneXS Max: 62
    // width: widthByPercent('15%')   // Same above
    // width: wp('15')   // Same above
    // width: wp(15)   // Same above
  }
});
```

- wr: Returns a number calculated with the ratio of the device width. You can import this with 'widthByRatio'.

```js
import { StyleSheet } from "react-native";
import { wr, widthByRatio } from "react-native-responsive-percent";

export default StyleSheet.create({
  image: {
    width: widthByRatio(0.15) // On iphoneX : 56, iphoneXS Max: 62
    // width: widthByRatio('0.15')   // Same above
    // width: wr(15)   // Same above
  }
});
```

- hp: Returns a number calculated with the ratio of the device height. You can import this with 'heightByPercent'.

```js
import { StyleSheet } from "react-native";
import { hp, heightByPercent } from "react-native-responsive-percent";

export default StyleSheet.create({
  image: {
    height: heightByPercent(15) // On iphoneX : 121, iphoneXS Max: 134
    // height: heightByPercent('15%')   // Same above
    // height: hp('15')   // Same above
    // width: hp(15)   // Same above
  }
});
```

- hr: Returns a number calculated with the ratio of the device height. You can import this with 'heightByRatio'.

```js
import { StyleSheet } from "react-native";
import { hr, heightByRatio } from "react-native-responsive-percent";

export default StyleSheet.create({
  image: {
    height: heightByRatio(0.15) // On iphoneX : 121, iphoneXS Max: 134
    // height: heightByRatio('0.15')   // Same above
    // width: hr(15)   // Same above
  }
});
```

- deviceHeight: Returns the screen pixel height of the device

```js
import { StyleSheet } from "react-native";
import { deviceHeight } from "react-native-responsive-percent";

export default StyleSheet.create({
  image: {
    height: deviceHeight // returns the device height
  }
});
```

- deviceWidth: Returns the screen pixel height of the device

```js
import { StyleSheet } from "react-native";
import { deviceWidth } from "react-native-responsive-percent";

export default StyleSheet.create({
  image: {
    width: deviceWidth // returns the device width
  }
});
```

#### Example

```js
import { StyleSheet } from "react-native";
import RNRP from "react-native-responsive-percent";

export default StyleSheet.create({
  title: {
    fontSize: RNRP.f(15)
  }
});
```
