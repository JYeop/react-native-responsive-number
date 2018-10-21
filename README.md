# react-native-responsive-percent

It helps you to make responsive view by adjusting size of the elements. You can use this package for all devices.

### Elements

- f: Returns a number(font size) based on the size of the 'iPhone X or XS'. You can import this with 'dmFont, responsiveFontSize'.

```js
import { StyleSheet } from "react-native";
import { f, dmFont, responsiveFontSize } from "react-native-responsive-percent";

export default StyleSheet.create({
  title: {
    fontSize: f(15) // On iphoneX : 15, iphoneXS Max: 16.5
    // fontSize: dmFont(15) // Same above
    // fontSize: responsiveFontSize(15) // Same above
  }
});
```

- wp: Returns a number calculated with the percent of the device width. You can import this with 'widthByPercent'.

```js
import { StyleSheet } from "react-native";
import { wp, widthByPercent } from "react-native-responsive-percent";

export default StyleSheet.create({
  image: {
    width: wp(15) // On iphoneX : 56, iphoneXS Max: 62
    // width: wp('15%')   // Same above
    // width: wp('15')   // Same above
    // width: widthByPercent(15)   // Same above
  }
});
```

- wr: Returns a number calculated with the ratio of the device width. You can import this with 'widthByRatio'.

```js
import { StyleSheet } from "react-native";
import { wr, widthByRatio } from "react-native-responsive-percent";

export default StyleSheet.create({
  image: {
    width: wr(0.15) // On iphoneX : 56, iphoneXS Max: 62
    // width: wr('0.15')   // Same above
    // width: widthByRatio(15)   // Same above
  }
});
```

- hp: Returns a number calculated with the ratio of the device height. You can import this with 'heightByPercent'.

```js
import { StyleSheet } from "react-native";
import { hp, heightByPercent } from "react-native-responsive-percent";

export default StyleSheet.create({
  image: {
    height: hp(15) // On iphoneX : 121, iphoneXS Max: 134
    // height: hp('15%')   // Same above
    // height: hp('15')   // Same above
    // width: heightByPercent(15)   // Same above
  }
});
```

- hr: Returns a number calculated with the ratio of the device height. You can import this with 'heightByRatio'.

```js
import { StyleSheet } from "react-native";
import { hr, heightByRatio } from "react-native-responsive-percent";

export default StyleSheet.create({
  image: {
    height: hr(0.15) // On iphoneX : 121, iphoneXS Max: 134
    // height: hr('0.15')   // Same above
    // width: heightByRatio(15)   // Same above
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
