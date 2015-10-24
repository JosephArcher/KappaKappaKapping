webpackHotUpdate(0,{

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(3), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
  
  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  var React = __webpack_require__(2);
  var TextField = __webpack_require__(867);
  
  var MyAwesomeReactComponent = React.createClass({
    displayName: 'MyAwesomeReactComponent',
  
    render: function render() {
      return React.createElement(TextField, {
        hintText: 'Hint Text' });
    }
  });
  
  module.exports = MyAwesomeReactComponent;
  
  /* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ContactPage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ },

/***/ 828:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var React = __webpack_require__(2);
  var ImmutabilityHelper = __webpack_require__(836);
  var Styles = __webpack_require__(857);
  
  // This mixin isn't necessary and will be removed in v0.11
  
  /**
   *	@params:
   *	styles = Current styles.
   *  props = New style properties that will override the current style.
   */
  module.exports = {
  
    propTypes: {
      style: React.PropTypes.object
    },
  
    //Moved this function to ImmutabilityHelper.merge
    mergeStyles: function mergeStyles() {
      return ImmutabilityHelper.merge.apply(this, arguments);
    },
  
    //Moved this function to /utils/styles.js
    mergeAndPrefix: function mergeAndPrefix() {
      return Styles.mergeAndPrefix.apply(this, arguments);
    },
  
    // prepareStyles is used to merge multiple styles, make sure they are flipped to rtl
    // if needed, and then autoprefix them. It should probably always be used instead of
    // mergeAndPrefix.
    //
    // Never call this on the same style object twice. As a rule of thumb,
    //   only call it when passing style attribute to html elements.
    // If you call it twice you'll get a warning anyway.
    prepareStyles: function prepareStyles() {
      return Styles.prepareStyles.apply(Styles, [this.state && this.state.muiTheme || this.context.muiTheme].concat([].slice.apply(arguments)));
    }
  };

/***/ },

/***/ 830:
/***/ function(module, exports) {

  // To include this file in your project:
  // let mui = require('mui');
  // let Colors = mui.Styles.Colors;
  
  'use strict';
  
  module.exports = {
  
    red50: '#ffebee',
    red100: '#ffcdd2',
    red200: '#ef9a9a',
    red300: '#e57373',
    red400: '#ef5350',
    red500: '#f44336',
    red600: '#e53935',
    red700: '#d32f2f',
    red800: '#c62828',
    red900: '#b71c1c',
    redA100: '#ff8a80',
    redA200: '#ff5252',
    redA400: '#ff1744',
    redA700: '#d50000',
  
    pink50: '#fce4ec',
    pink100: '#f8bbd0',
    pink200: '#f48fb1',
    pink300: '#f06292',
    pink400: '#ec407a',
    pink500: '#e91e63',
    pink600: '#d81b60',
    pink700: '#c2185b',
    pink800: '#ad1457',
    pink900: '#880e4f',
    pinkA100: '#ff80ab',
    pinkA200: '#ff4081',
    pinkA400: '#f50057',
    pinkA700: '#c51162',
  
    purple50: '#f3e5f5',
    purple100: '#e1bee7',
    purple200: '#ce93d8',
    purple300: '#ba68c8',
    purple400: '#ab47bc',
    purple500: '#9c27b0',
    purple600: '#8e24aa',
    purple700: '#7b1fa2',
    purple800: '#6a1b9a',
    purple900: '#4a148c',
    purpleA100: '#ea80fc',
    purpleA200: '#e040fb',
    purpleA400: '#d500f9',
    purpleA700: '#aa00ff',
  
    deepPurple50: '#ede7f6',
    deepPurple100: '#d1c4e9',
    deepPurple200: '#b39ddb',
    deepPurple300: '#9575cd',
    deepPurple400: '#7e57c2',
    deepPurple500: '#673ab7',
    deepPurple600: '#5e35b1',
    deepPurple700: '#512da8',
    deepPurple800: '#4527a0',
    deepPurple900: '#311b92',
    deepPurpleA100: '#b388ff',
    deepPurpleA200: '#7c4dff',
    deepPurpleA400: '#651fff',
    deepPurpleA700: '#6200ea',
  
    indigo50: '#e8eaf6',
    indigo100: '#c5cae9',
    indigo200: '#9fa8da',
    indigo300: '#7986cb',
    indigo400: '#5c6bc0',
    indigo500: '#3f51b5',
    indigo600: '#3949ab',
    indigo700: '#303f9f',
    indigo800: '#283593',
    indigo900: '#1a237e',
    indigoA100: '#8c9eff',
    indigoA200: '#536dfe',
    indigoA400: '#3d5afe',
    indigoA700: '#304ffe',
  
    blue50: '#e3f2fd',
    blue100: '#bbdefb',
    blue200: '#90caf9',
    blue300: '#64b5f6',
    blue400: '#42a5f5',
    blue500: '#2196f3',
    blue600: '#1e88e5',
    blue700: '#1976d2',
    blue800: '#1565c0',
    blue900: '#0d47a1',
    blueA100: '#82b1ff',
    blueA200: '#448aff',
    blueA400: '#2979ff',
    blueA700: '#2962ff',
  
    lightBlue50: '#e1f5fe',
    lightBlue100: '#b3e5fc',
    lightBlue200: '#81d4fa',
    lightBlue300: '#4fc3f7',
    lightBlue400: '#29b6f6',
    lightBlue500: '#03a9f4',
    lightBlue600: '#039be5',
    lightBlue700: '#0288d1',
    lightBlue800: '#0277bd',
    lightBlue900: '#01579b',
    lightBlueA100: '#80d8ff',
    lightBlueA200: '#40c4ff',
    lightBlueA400: '#00b0ff',
    lightBlueA700: '#0091ea',
  
    cyan50: '#e0f7fa',
    cyan100: '#b2ebf2',
    cyan200: '#80deea',
    cyan300: '#4dd0e1',
    cyan400: '#26c6da',
    cyan500: '#00bcd4',
    cyan600: '#00acc1',
    cyan700: '#0097a7',
    cyan800: '#00838f',
    cyan900: '#006064',
    cyanA100: '#84ffff',
    cyanA200: '#18ffff',
    cyanA400: '#00e5ff',
    cyanA700: '#00b8d4',
  
    teal50: '#e0f2f1',
    teal100: '#b2dfdb',
    teal200: '#80cbc4',
    teal300: '#4db6ac',
    teal400: '#26a69a',
    teal500: '#009688',
    teal600: '#00897b',
    teal700: '#00796b',
    teal800: '#00695c',
    teal900: '#004d40',
    tealA100: '#a7ffeb',
    tealA200: '#64ffda',
    tealA400: '#1de9b6',
    tealA700: '#00bfa5',
  
    green50: '#e8f5e9',
    green100: '#c8e6c9',
    green200: '#a5d6a7',
    green300: '#81c784',
    green400: '#66bb6a',
    green500: '#4caf50',
    green600: '#43a047',
    green700: '#388e3c',
    green800: '#2e7d32',
    green900: '#1b5e20',
    greenA100: '#b9f6ca',
    greenA200: '#69f0ae',
    greenA400: '#00e676',
    greenA700: '#00c853',
  
    lightGreen50: '#f1f8e9',
    lightGreen100: '#dcedc8',
    lightGreen200: '#c5e1a5',
    lightGreen300: '#aed581',
    lightGreen400: '#9ccc65',
    lightGreen500: '#8bc34a',
    lightGreen600: '#7cb342',
    lightGreen700: '#689f38',
    lightGreen800: '#558b2f',
    lightGreen900: '#33691e',
    lightGreenA100: '#ccff90',
    lightGreenA200: '#b2ff59',
    lightGreenA400: '#76ff03',
    lightGreenA700: '#64dd17',
  
    lime50: '#f9fbe7',
    lime100: '#f0f4c3',
    lime200: '#e6ee9c',
    lime300: '#dce775',
    lime400: '#d4e157',
    lime500: '#cddc39',
    lime600: '#c0ca33',
    lime700: '#afb42b',
    lime800: '#9e9d24',
    lime900: '#827717',
    limeA100: '#f4ff81',
    limeA200: '#eeff41',
    limeA400: '#c6ff00',
    limeA700: '#aeea00',
  
    yellow50: '#fffde7',
    yellow100: '#fff9c4',
    yellow200: '#fff59d',
    yellow300: '#fff176',
    yellow400: '#ffee58',
    yellow500: '#ffeb3b',
    yellow600: '#fdd835',
    yellow700: '#fbc02d',
    yellow800: '#f9a825',
    yellow900: '#f57f17',
    yellowA100: '#ffff8d',
    yellowA200: '#ffff00',
    yellowA400: '#ffea00',
    yellowA700: '#ffd600',
  
    amber50: '#fff8e1',
    amber100: '#ffecb3',
    amber200: '#ffe082',
    amber300: '#ffd54f',
    amber400: '#ffca28',
    amber500: '#ffc107',
    amber600: '#ffb300',
    amber700: '#ffa000',
    amber800: '#ff8f00',
    amber900: '#ff6f00',
    amberA100: '#ffe57f',
    amberA200: '#ffd740',
    amberA400: '#ffc400',
    amberA700: '#ffab00',
  
    orange50: '#fff3e0',
    orange100: '#ffe0b2',
    orange200: '#ffcc80',
    orange300: '#ffb74d',
    orange400: '#ffa726',
    orange500: '#ff9800',
    orange600: '#fb8c00',
    orange700: '#f57c00',
    orange800: '#ef6c00',
    orange900: '#e65100',
    orangeA100: '#ffd180',
    orangeA200: '#ffab40',
    orangeA400: '#ff9100',
    orangeA700: '#ff6d00',
  
    deepOrange50: '#fbe9e7',
    deepOrange100: '#ffccbc',
    deepOrange200: '#ffab91',
    deepOrange300: '#ff8a65',
    deepOrange400: '#ff7043',
    deepOrange500: '#ff5722',
    deepOrange600: '#f4511e',
    deepOrange700: '#e64a19',
    deepOrange800: '#d84315',
    deepOrange900: '#bf360c',
    deepOrangeA100: '#ff9e80',
    deepOrangeA200: '#ff6e40',
    deepOrangeA400: '#ff3d00',
    deepOrangeA700: '#dd2c00',
  
    brown50: '#efebe9',
    brown100: '#d7ccc8',
    brown200: '#bcaaa4',
    brown300: '#a1887f',
    brown400: '#8d6e63',
    brown500: '#795548',
    brown600: '#6d4c41',
    brown700: '#5d4037',
    brown800: '#4e342e',
    brown900: '#3e2723',
  
    blueGrey50: '#eceff1',
    blueGrey100: '#cfd8dc',
    blueGrey200: '#b0bec5',
    blueGrey300: '#90a4ae',
    blueGrey400: '#78909c',
    blueGrey500: '#607d8b',
    blueGrey600: '#546e7a',
    blueGrey700: '#455a64',
    blueGrey800: '#37474f',
    blueGrey900: '#263238',
  
    grey50: '#fafafa',
    grey100: '#f5f5f5',
    grey200: '#eeeeee',
    grey300: '#e0e0e0',
    grey400: '#bdbdbd',
    grey500: '#9e9e9e',
    grey600: '#757575',
    grey700: '#616161',
    grey800: '#424242',
    grey900: '#212121',
  
    black: '#000000',
    white: '#ffffff',
  
    transparent: 'rgba(0, 0, 0, 0)',
    fullBlack: 'rgba(0, 0, 0, 1)',
    darkBlack: 'rgba(0, 0, 0, 0.87)',
    lightBlack: 'rgba(0, 0, 0, 0.54)',
    minBlack: 'rgba(0, 0, 0, 0.26)',
    faintBlack: 'rgba(0, 0, 0, 0.12)',
    fullWhite: 'rgba(255, 255, 255, 1)',
    darkWhite: 'rgba(255, 255, 255, 0.87)',
    lightWhite: 'rgba(255, 255, 255, 0.54)'
  
  };

/***/ },

/***/ 831:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var isBrowser = __webpack_require__(853);
  
  var Modernizr = isBrowser ? __webpack_require__(855) : undefined;
  
  //Keep track of already prefixed keys so we can skip Modernizr prefixing
  var prefixedKeys = {};
  
  module.exports = {
  
    all: function all(styles) {
      var prefixedStyle = {};
      for (var key in styles) {
        prefixedStyle[this.single(key)] = styles[key];
      }
      return prefixedStyle;
    },
  
    set: function set(style, key, value) {
      style[this.single(key)] = value;
    },
  
    single: function single(key) {
  
      //If a browser doesn't exist, we can't prefix with Modernizr so
      //just return the key
      if (!isBrowser) return key;
  
      //Check if we've prefixed this key before, just return it
      if (prefixedKeys.hasOwnProperty(key)) return prefixedKeys[key];
  
      //Key hasn't been prefixed yet, prefix with Modernizr
      var prefKey = Modernizr.prefixed(key);
  
      // Windows 7 Firefox has an issue with the implementation of Modernizr.prefixed
      // and is capturing 'false' as the CSS property name instead of the non-prefixed version.
      if (prefKey === false) return key;
  
      //Save the key off for the future and return the prefixed key
      prefixedKeys[key] = prefKey;
      return prefKey;
    },
  
    singleHyphened: function singleHyphened(key) {
      var str = this.single(key);
  
      return !str ? key : str.replace(/([A-Z])/g, function (str, m1) {
        return '-' + m1.toLowerCase();
      }).replace(/^ms-/, '-ms-');
    }
  
  };

/***/ },

/***/ 832:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var Colors = __webpack_require__(830);
  var ColorManipulator = __webpack_require__(835);
  var Spacing = __webpack_require__(845);
  
  /*
   *  Light Theme is the default theme used in material-ui. It is guaranteed to
   *  have all theme variables needed for every component. Variables not defined
   *  in a custom theme will default to these values.
   */
  
  module.exports = {
    spacing: Spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
      primary1Color: Colors.cyan500,
      primary2Color: Colors.cyan700,
      primary3Color: Colors.lightBlack,
      accent1Color: Colors.pinkA200,
      accent2Color: Colors.grey100,
      accent3Color: Colors.grey500,
      textColor: Colors.darkBlack,
      alternateTextColor: Colors.white,
      canvasColor: Colors.white,
      borderColor: Colors.grey300,
      disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3)
    }
  };

/***/ },

/***/ 833:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var Colors = __webpack_require__(830);
  var ColorManipulator = __webpack_require__(835);
  var Extend = __webpack_require__(852);
  var update = __webpack_require__(838);
  
  module.exports = {
  
    //get the MUI theme corresponding to a raw theme
    getMuiTheme: function getMuiTheme(rawTheme) {
      var returnObj = {
        appBar: {
          color: rawTheme.palette.primary1Color,
          textColor: rawTheme.palette.alternateTextColor,
          height: rawTheme.spacing.desktopKeylineIncrement
        },
        avatar: {
          borderColor: 'rgba(0, 0, 0, 0.08)'
        },
        button: {
          height: 36,
          minWidth: 88,
          iconButtonSize: rawTheme.spacing.iconSize * 2
        },
        checkbox: {
          boxColor: rawTheme.palette.textColor,
          checkedColor: rawTheme.palette.primary1Color,
          requiredColor: rawTheme.palette.primary1Color,
          disabledColor: rawTheme.palette.disabledColor,
          labelColor: rawTheme.palette.textColor,
          labelDisabledColor: rawTheme.palette.disabledColor
        },
        datePicker: {
          color: rawTheme.palette.primary1Color,
          textColor: rawTheme.palette.alternateTextColor,
          calendarTextColor: rawTheme.palette.textColor,
          selectColor: rawTheme.palette.primary2Color,
          selectTextColor: rawTheme.palette.alternateTextColor
        },
        dropDownMenu: {
          accentColor: rawTheme.palette.borderColor
        },
        flatButton: {
          color: rawTheme.palette.alternateTextColor,
          textColor: rawTheme.palette.textColor,
          primaryTextColor: rawTheme.palette.accent1Color,
          secondaryTextColor: rawTheme.palette.primary1Color
        },
        floatingActionButton: {
          buttonSize: 56,
          miniSize: 40,
          color: rawTheme.palette.accent1Color,
          iconColor: rawTheme.palette.alternateTextColor,
          secondaryColor: rawTheme.palette.primary1Color,
          secondaryIconColor: rawTheme.palette.alternateTextColor,
          disabledTextColor: rawTheme.palette.disabledColor
        },
        gridTile: {
          textColor: Colors.white
        },
        inkBar: {
          backgroundColor: rawTheme.palette.accent1Color
        },
        leftNav: {
          width: rawTheme.spacing.desktopKeylineIncrement * 4,
          color: rawTheme.palette.canvasColor
        },
        listItem: {
          nestedLevelDepth: 18
        },
        menu: {
          backgroundColor: rawTheme.palette.canvasColor,
          containerBackgroundColor: rawTheme.palette.canvasColor
        },
        menuItem: {
          dataHeight: 32,
          height: 48,
          hoverColor: 'rgba(0, 0, 0, .035)',
          padding: rawTheme.spacing.desktopGutter,
          selectedTextColor: rawTheme.palette.accent1Color
        },
        menuSubheader: {
          padding: rawTheme.spacing.desktopGutter,
          borderColor: rawTheme.palette.borderColor,
          textColor: rawTheme.palette.primary1Color
        },
        paper: {
          backgroundColor: rawTheme.palette.canvasColor
        },
        radioButton: {
          borderColor: rawTheme.palette.textColor,
          backgroundColor: rawTheme.palette.alternateTextColor,
          checkedColor: rawTheme.palette.primary1Color,
          requiredColor: rawTheme.palette.primary1Color,
          disabledColor: rawTheme.palette.disabledColor,
          size: 24,
          labelColor: rawTheme.palette.textColor,
          labelDisabledColor: rawTheme.palette.disabledColor
        },
        raisedButton: {
          color: rawTheme.palette.alternateTextColor,
          textColor: rawTheme.palette.textColor,
          primaryColor: rawTheme.palette.accent1Color,
          primaryTextColor: rawTheme.palette.alternateTextColor,
          secondaryColor: rawTheme.palette.primary1Color,
          secondaryTextColor: rawTheme.palette.alternateTextColor
        },
        refreshIndicator: {
          strokeColor: rawTheme.palette.borderColor,
          loadingStrokeColor: rawTheme.palette.primary1Color
        },
        slider: {
          trackSize: 2,
          trackColor: rawTheme.palette.primary3Color,
          trackColorSelected: rawTheme.palette.accent3Color,
          handleSize: 12,
          handleSizeDisabled: 8,
          handleSizeActive: 18,
          handleColorZero: rawTheme.palette.borderColor,
          handleFillColor: rawTheme.palette.alternateTextColor,
          selectionColor: rawTheme.palette.primary1Color,
          rippleColor: rawTheme.palette.primary1Color
        },
        snackbar: {
          textColor: rawTheme.palette.alternateTextColor,
          backgroundColor: rawTheme.palette.textColor,
          actionColor: rawTheme.palette.accent1Color
        },
        table: {
          backgroundColor: rawTheme.palette.canvasColor
        },
        tableHeader: {
          borderColor: rawTheme.palette.borderColor
        },
        tableHeaderColumn: {
          textColor: rawTheme.palette.primary3Color,
          height: 56,
          spacing: 24
        },
        tableFooter: {
          borderColor: rawTheme.palette.borderColor,
          textColor: rawTheme.palette.primary3Color
        },
        tableRow: {
          hoverColor: rawTheme.palette.accent2Color,
          stripeColor: ColorManipulator.lighten(rawTheme.palette.primary1Color, 0.55),
          selectedColor: rawTheme.palette.borderColor,
          textColor: rawTheme.palette.textColor,
          borderColor: rawTheme.palette.borderColor
        },
        tableRowColumn: {
          height: 48,
          spacing: 24
        },
        timePicker: {
          color: rawTheme.palette.alternateTextColor,
          textColor: rawTheme.palette.accent3Color,
          accentColor: rawTheme.palette.primary1Color,
          clockColor: rawTheme.palette.primary3Color,
          selectColor: rawTheme.palette.primary2Color,
          selectTextColor: rawTheme.palette.alternateTextColor
        },
        toggle: {
          thumbOnColor: rawTheme.palette.primary1Color,
          thumbOffColor: rawTheme.palette.accent2Color,
          thumbDisabledColor: rawTheme.palette.borderColor,
          thumbRequiredColor: rawTheme.palette.primary1Color,
          trackOnColor: ColorManipulator.fade(rawTheme.palette.primary1Color, 0.5),
          trackOffColor: rawTheme.palette.primary3Color,
          trackDisabledColor: rawTheme.palette.primary3Color,
          labelColor: rawTheme.palette.textColor,
          labelDisabledColor: rawTheme.palette.disabledColor
        },
        toolbar: {
          backgroundColor: ColorManipulator.darken(rawTheme.palette.accent2Color, 0.05),
          height: 56,
          titleFontSize: 20,
          iconColor: 'rgba(0, 0, 0, .40)',
          separatorColor: 'rgba(0, 0, 0, .175)',
          menuHoverColor: 'rgba(0, 0, 0, .10)'
        },
        tabs: {
          backgroundColor: rawTheme.palette.primary1Color
        },
        textField: {
          textColor: rawTheme.palette.textColor,
          hintColor: rawTheme.palette.disabledColor,
          floatingLabelColor: rawTheme.palette.textColor,
          disabledTextColor: rawTheme.palette.disabledColor,
          errorColor: Colors.red500,
          focusColor: rawTheme.palette.primary1Color,
          backgroundColor: 'transparent',
          borderColor: rawTheme.palette.borderColor
        },
        isRtl: false
      };
  
      //add properties to objects inside 'returnObj' that depend on existing properties
      returnObj.flatButton.disabledTextColor = ColorManipulator.fade(returnObj.flatButton.textColor, 0.3);
      returnObj.raisedButton.disabledColor = ColorManipulator.darken(returnObj.raisedButton.color, 0.1);
      returnObj.raisedButton.disabledTextColor = ColorManipulator.fade(returnObj.raisedButton.textColor, 0.3);
      returnObj.toggle.trackRequiredColor = ColorManipulator.fade(returnObj.toggle.thumbRequiredColor, 0.5);
  
      //append the raw theme object to 'returnObj'
      returnObj.rawTheme = rawTheme;
  
      //set 'static' key as true (by default) on return object. This is to support the ContextPure mixin.
      returnObj['static'] = true;
  
      return returnObj;
    },
  
    //functions to modify properties of raw theme, namely spacing, palette
    //and font family. These functions use the React update immutability helper
    //to create a new object for the raw theme, and return a new MUI theme object
  
    //function to modify the spacing of the raw theme. This function recomputes
    //the MUI theme and returns it based on the new theme.
    modifyRawThemeSpacing: function modifyRawThemeSpacing(muiTheme, newSpacing) {
      var newRawTheme = update(muiTheme.rawTheme, { spacing: { $set: newSpacing } });
      return this.getMuiTheme(newRawTheme);
    },
  
    //function to modify the palette of the raw theme. This function recomputes
    //the MUI theme and returns it based on the new raw theme.
    //keys inside 'newPalette' override values for existing keys in palette
    modifyRawThemePalette: function modifyRawThemePalette(muiTheme, newPaletteKeys) {
      var newPalette = Extend(muiTheme.rawTheme.palette, newPaletteKeys);
      var newRawTheme = update(muiTheme.rawTheme, { palette: { $set: newPalette } });
      return this.getMuiTheme(newRawTheme);
    },
  
    //function to modify the font family of the raw theme. This function recomputes
    //the MUI theme and returns it based on the new raw theme.
    modifyRawThemeFontFamily: function modifyRawThemeFontFamily(muiTheme, newFontFamily) {
      var newRawTheme = update(muiTheme.rawTheme, { fontFamily: { $set: newFontFamily } });
      return this.getMuiTheme(newRawTheme);
    }
  
  };

/***/ },

/***/ 834:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var AutoPrefix = __webpack_require__(831);
  
  module.exports = {
  
    easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
    easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
  
    easeOut: function easeOut(duration, property, delay, easeFunction) {
  
      easeFunction = easeFunction || this.easeOutFunction;
  
      if (property && Object.prototype.toString.call(property) === '[object Array]') {
  
        var transitions = '';
        for (var i = 0; i < property.length; i++) {
          if (transitions) transitions += ',';
          transitions += this.create(duration, property[i], delay, easeFunction);
        }
        return transitions;
      } else {
        return this.create(duration, property, delay, easeFunction);
      }
    },
  
    create: function create(duration, property, delay, easeFunction) {
      duration = duration || '450ms';
      property = property || 'all';
      delay = delay || '0ms';
      easeFunction = easeFunction || "linear";
  
      return AutoPrefix.singleHyphened(property) + ' ' + duration + ' ' + easeFunction + ' ' + delay;
    }
  };

/***/ },

/***/ 835:
/***/ function(module, exports) {

  'use strict';
  
  module.exports = {
  
    /**
     * The relative brightness of any point in a colorspace, normalized to 0 for
     * darkest black and 1 for lightest white. RGB colors only. Does not take
     * into account alpha values.
     *
     * TODO:
     * - Take into account alpha values.
     * - Identify why there are minor discrepancies for some use cases
     *   (i.e. #F0F & #FFF). Note that these cases rarely occur.
     *
     * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
     */
    _luminance: function _luminance(color) {
      color = this._decomposeColor(color);
  
      if (color.type.indexOf('rgb') > -1) {
        var rgb = color.values.map(function (val) {
          val /= 255; // normalized
          return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
        });
  
        return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
      } else {
        var message = 'Calculating the relative luminance is not available for ' + 'HSL and HSLA.';
        console.error(message);
        return -1;
      }
    },
  
    /**
     * @params:
     * additionalValue = An extra value that has been calculated but not included
     *                   with the original color object, such as an alpha value.
     */
    _convertColorToString: function _convertColorToString(color, additonalValue) {
      var str = color.type + '(' + parseInt(color.values[0]) + ',' + parseInt(color.values[1]) + ',' + parseInt(color.values[2]);
  
      if (additonalValue !== undefined) {
        str += ',' + additonalValue + ')';
      } else if (color.values.length === 4) {
        str += ',' + color.values[3] + ')';
      } else {
        str += ')';
      }
  
      return str;
    },
  
    // Converts a color from hex format to rgb format.
    _convertHexToRGB: function _convertHexToRGB(color) {
      if (color.length === 4) {
        var extendedColor = '#';
        for (var i = 1; i < color.length; i++) {
          extendedColor += color.charAt(i) + color.charAt(i);
        }
        color = extendedColor;
      }
  
      var values = {
        r: parseInt(color.substr(1, 2), 16),
        g: parseInt(color.substr(3, 2), 16),
        b: parseInt(color.substr(5, 2), 16)
      };
  
      return 'rgb(' + values.r + ',' + values.g + ',' + values.b + ')';
    },
  
    // Returns the type and values of a color of any given type.
    _decomposeColor: function _decomposeColor(color) {
      if (color.charAt(0) === '#') {
        return this._decomposeColor(this._convertHexToRGB(color));
      }
  
      var marker = color.indexOf('(');
      var type = color.substring(0, marker);
      var values = color.substring(marker + 1, color.length - 1).split(',');
  
      return { type: type, values: values };
    },
  
    // Set the absolute transparency of a color.
    // Any existing alpha values are overwritten.
    fade: function fade(color, amount) {
      color = this._decomposeColor(color);
      if (color.type === 'rgb' || color.type === 'hsl') color.type += 'a';
      return this._convertColorToString(color, amount);
    },
  
    // Desaturates rgb and sets opacity to 0.15
    lighten: function lighten(color, amount) {
      color = this._decomposeColor(color);
  
      if (color.type.indexOf('hsl') > -1) {
        color.values[2] += amount;
        return this._decomposeColor(this._convertColorToString(color));
      } else if (color.type.indexOf('rgb') > -1) {
        for (var i = 0; i < 3; i++) {
          color.values[i] *= 1 + amount;
          if (color.values[i] > 255) color.values[i] = 255;
        }
      }
  
      if (color.type.indexOf('a') <= -1) color.type += 'a';
  
      return this._convertColorToString(color, '0.15');
    },
  
    darken: function darken(color, amount) {
      color = this._decomposeColor(color);
  
      if (color.type.indexOf('hsl') > -1) {
        color.values[2] += amount;
        return this._decomposeColor(this._convertColorToString(color));
      } else if (color.type.indexOf('rgb') > -1) {
        for (var i = 0; i < 3; i++) {
          color.values[i] *= 1 - amount;
          if (color.values[i] < 0) color.values[i] = 0;
        }
      }
  
      return this._convertColorToString(color);
    },
  
    // Calculates the contrast ratio between two colors.
    //
    // Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
    contrastRatio: function contrastRatio(background, foreground) {
      var lumA = this._luminance(background);
      var lumB = this._luminance(foreground);
  
      if (lumA >= lumB) {
        return ((lumA + 0.05) / (lumB + 0.05)).toFixed(2);
      } else {
        return ((lumB + 0.05) / (lumA + 0.05)).toFixed(2);
      }
    },
  
    /**
     * Determines how readable a color combination is based on its level.
     * Levels are defined from @LeaVerou:
     * https://github.com/LeaVerou/contrast-ratio/blob/gh-pages/contrast-ratio.js
     */
    contrastRatioLevel: function contrastRatioLevel(background, foreground) {
      var levels = {
        'fail': {
          range: [0, 3],
          color: 'hsl(0, 100%, 40%)'
        },
        'aa-large': {
          range: [3, 4.5],
          color: 'hsl(40, 100%, 45%)'
        },
        'aa': {
          range: [4.5, 7],
          color: 'hsl(80, 60%, 45%)'
        },
        'aaa': {
          range: [7, 22],
          color: 'hsl(95, 60%, 41%)'
        }
      };
  
      var ratio = this.contrastRatio(background, foreground);
  
      for (var level in levels) {
        var range = levels[level].range;
        if (ratio >= range[0] && ratio <= range[1]) return level;
      }
    }
  };

/***/ },

/***/ 836:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var React = __webpack_require__(2);
  var update = __webpack_require__(838);
  
  function mergeSingle(objA, objB) {
    if (!objA) return objB;
    if (!objB) return objA;
    return update(objA, { $merge: objB });
  }
  
  module.exports = {
  
    merge: function merge() {
      var args = Array.prototype.slice.call(arguments, 0);
      var base = args[0];
  
      for (var i = 1; i < args.length; i++) {
        if (args[i]) {
          base = mergeSingle(base, args[i]);
        }
      }
      return base;
    },
  
    mergeItem: function mergeItem(obj, key, newValueObject) {
      var command = {};
      command[key] = { $merge: newValueObject };
      return update(obj, command);
    },
  
    push: function push(array, obj) {
      var newObj = Array.isArray(obj) ? obj : [obj];
      return update(array, { $push: newObj });
    },
  
    shift: function shift(array) {
      return update(array, { $splice: [[0, 1]] });
    }
  
  };

/***/ },

/***/ 838:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__(864);

/***/ },

/***/ 845:
/***/ function(module, exports) {

  "use strict";
  
  module.exports = {
    iconSize: 24,
  
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopLeftNavMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56
  };

/***/ },

/***/ 852:
/***/ function(module, exports) {

  'use strict';
  
  function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
  }
  
  /**
  *  A recursive merge between two objects.
  *
  *  @param base     - the object whose properties are to be overwritten. It
  *                    should be either the root level or some nested level.
  *  @param override - an object containing properties to be overwritten. It
  *                    should have the same structure as the object object.
  */
  var extend = function extend(base, override) {
  
    var mergedObject = {};
  
    //Loop through each key in the base object
    Object.keys(base).forEach(function (key) {
  
      var baseProp = base[key];
      var overrideProp = undefined;
  
      if (isObject(override)) overrideProp = override[key];
  
      //Recursive call extend if the prop is another object, else just copy it over
      mergedObject[key] = isObject(baseProp) && !Array.isArray(baseProp) ? extend(baseProp, overrideProp) : baseProp;
    });
  
    //Loop through each override key and override the props in the
    //base object
    if (isObject(override)) {
  
      Object.keys(override).forEach(function (overrideKey) {
  
        var overrideProp = override[overrideKey];
  
        //Only copy over props that are not objects
        if (!isObject(overrideProp) || Array.isArray(overrideProp)) {
          mergedObject[overrideKey] = overrideProp;
        }
      });
    }
  
    return mergedObject;
  };
  
  module.exports = extend;

/***/ },

/***/ 853:
/***/ function(module, exports) {

  'use strict';
  
  module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },

/***/ 855:
/***/ function(module, exports) {

  /* Modernizr 2.8.3 (Custom Build) | MIT & BSD
   * Build: http://modernizr.com/download/#-borderradius-boxshadow-opacity-csstransforms-csstransforms3d-csstransitions-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
   */
  
  'use strict';
  
  module.exports = (function (window, document, undefined) {
  
      var version = '2.8.3',
          Modernizr = {},
          docElement = document.documentElement,
          mod = 'modernizr',
          modElem = document.createElement(mod),
          mStyle = modElem.style,
          prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
          omPrefixes = 'Webkit Moz O ms',
          cssomPrefixes = omPrefixes.split(' '),
          domPrefixes = omPrefixes.toLowerCase().split(' '),
          tests = {},
          classes = [],
          slice = classes.slice,
          featureName = undefined,
          injectElementWithStyles = function injectElementWithStyles(rule, callback, nodes, testnames) {
  
          var style = undefined,
              ret = undefined,
              node = undefined,
              docOverflow = undefined,
              div = document.createElement('div'),
              body = document.body,
              fakeBody = body || document.createElement('body');
  
          if (parseInt(nodes, 10)) {
              while (nodes--) {
                  node = document.createElement('div');
                  node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
                  div.appendChild(node);
              }
          }
  
          style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
          div.id = mod;
          (body ? div : fakeBody).innerHTML += style;
          fakeBody.appendChild(div);
          if (!body) {
              fakeBody.style.background = '';
              fakeBody.style.overflow = 'hidden';
              docOverflow = docElement.style.overflow;
              docElement.style.overflow = 'hidden';
              docElement.appendChild(fakeBody);
          }
  
          ret = callback(div, rule);
          if (!body) {
              fakeBody.parentNode.removeChild(fakeBody);
              docElement.style.overflow = docOverflow;
          } else {
              div.parentNode.removeChild(div);
          }
  
          return !!ret;
      },
          _hasOwnProperty = ({}).hasOwnProperty,
          hasOwnProp = undefined;
  
      function is(obj, type) {
          return typeof obj === type;
      }
  
      if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
          hasOwnProp = function (object, property) {
              return _hasOwnProperty.call(object, property);
          };
      } else {
          hasOwnProp = function (object, property) {
              return property in object && is(object.constructor.prototype[property], 'undefined');
          };
      }
  
      if (!Function.prototype.bind) {
          Function.prototype.bind = function bind(that) {
  
              var target = this;
  
              if (typeof target != "function") {
                  throw new TypeError();
              }
  
              var args = slice.call(arguments, 1),
                  bound = function bound() {
  
                  if (this instanceof bound) {
  
                      var F = function F() {};
                      F.prototype = target.prototype;
                      var _self = new F();
  
                      var result = target.apply(_self, args.concat(slice.call(arguments)));
                      if (Object(result) === result) {
                          return result;
                      }
                      return _self;
                  } else {
  
                      return target.apply(that, args.concat(slice.call(arguments)));
                  }
              };
  
              return bound;
          };
      }
  
      function setCss(str) {
          mStyle.cssText = str;
      }
  
      function setCssAll(str1, str2) {
          return setCss(prefixes.join(str1 + ';') + (str2 || ''));
      }
  
      function contains(str, substr) {
          return !! ~('' + str).indexOf(substr);
      }
  
      function testProps(props, prefixed) {
          for (var i in props) {
              var prop = props[i];
              if (!contains(prop, "-") && mStyle[prop] !== undefined) {
                  return prefixed == 'pfx' ? prop : true;
              }
          }
          return false;
      }
  
      function testDOMProps(props, obj, elem) {
          for (var i in props) {
              var item = obj[props[i]];
              if (item !== undefined) {
  
                  if (elem === false) return props[i];
  
                  if (is(item, 'function')) {
                      return item.bind(elem || obj);
                  }
  
                  return item;
              }
          }
          return false;
      }
  
      function testPropsAll(prop, prefixed, elem) {
  
          var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
              props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');
  
          if (is(prefixed, "string") || is(prefixed, "undefined")) {
              return testProps(props, prefixed);
          } else {
              props = (prop + ' ' + domPrefixes.join(ucProp + ' ') + ucProp).split(' ');
              return testDOMProps(props, prefixed, elem);
          }
      }
  
      tests.borderradius = function () {
          return testPropsAll('borderRadius');
      };
  
      tests.boxshadow = function () {
          return testPropsAll('boxShadow');
      };
  
      tests.opacity = function () {
          setCssAll('opacity:.55');
  
          return (/^0.55$/.test(mStyle.opacity)
          );
      };
      tests.csstransforms = function () {
          return !!testPropsAll('transform');
      };
  
      tests.csstransforms3d = function () {
  
          var ret = !!testPropsAll('perspective');
  
          if (ret && 'webkitPerspective' in docElement.style) {
  
              injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function (node) {
                  ret = node.offsetLeft === 9 && node.offsetHeight === 3;
              });
          }
          return ret;
      };
  
      tests.csstransitions = function () {
          return testPropsAll('transition');
      };
  
      for (var feature in tests) {
          if (hasOwnProp(tests, feature)) {
              featureName = feature.toLowerCase();
              Modernizr[featureName] = tests[feature]();
  
              classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
          }
      }
  
      Modernizr.addTest = function (feature, test) {
          if (typeof feature == 'object') {
              for (var key in feature) {
                  if (hasOwnProp(feature, key)) {
                      Modernizr.addTest(key, feature[key]);
                  }
              }
          } else {
  
              feature = feature.toLowerCase();
  
              if (Modernizr[feature] !== undefined) {
                  return Modernizr;
              }
  
              test = typeof test == 'function' ? test() : test;
  
              if (typeof enableClasses !== "undefined" && enableClasses) {
                  docElement.className += ' ' + (test ? '' : 'no-') + feature;
              }
              Modernizr[feature] = test;
          }
  
          return Modernizr;
      };
  
      setCss('');
  
      Modernizr._version = version;
  
      Modernizr._prefixes = prefixes;
      Modernizr._domPrefixes = domPrefixes;
      Modernizr._cssomPrefixes = cssomPrefixes;
  
      Modernizr.testProp = function (prop) {
          return testProps([prop]);
      };
  
      Modernizr.testAllProps = testPropsAll;
  
      Modernizr.testStyles = injectElementWithStyles;
      Modernizr.prefixed = function (prop, obj, elem) {
          if (!obj) {
              return testPropsAll(prop, 'pfx');
          } else {
              return testPropsAll(prop, obj, elem);
          }
      };
  
      return Modernizr;
  })(window, window.document);

/***/ },

/***/ 857:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var AutoPrefix = __webpack_require__(831);
  var ImmutabilityHelper = __webpack_require__(836);
  
  var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;
  
  var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;
  
  module.exports = {
  
    mergeAndPrefix: function mergeAndPrefix() {
      var mergedStyles = ImmutabilityHelper.merge.apply(this, arguments);
      return AutoPrefix.all(mergedStyles);
    },
  
    // This function ensures that `style` supports both ltr and rtl directions by checking
    //   `styleConstants` in `muiTheme` and replacing attribute keys if necessary.
    ensureDirection: function ensureDirection(muiTheme, style) {
      if (true) {
        if (style.didFlip) {
          console.warn(new Error('You\'re calling `ensureDirection` on the same style object twice.'));
        }
        style = ImmutabilityHelper.merge({
          didFlip: 'true'
        }, style);
      }
  
      // Left to right is the default. No need to flip anything.
      if (!muiTheme.isRtl) return style;
  
      var flippedAttributes = {
        // Keys and their replacements.
        right: 'left',
        left: 'right',
        marginRight: 'marginLeft',
        marginLeft: 'marginRight',
        paddingRight: 'paddingLeft',
        paddingLeft: 'paddingRight',
        borderRight: 'borderLeft',
        borderLeft: 'borderRight'
      };
  
      var newStyle = {};
  
      Object.keys(style).forEach(function (attribute) {
        var value = style[attribute];
        var key = attribute;
  
        if (flippedAttributes.hasOwnProperty(attribute)) {
          key = flippedAttributes[attribute];
        }
  
        switch (attribute) {
          case 'float':
          case 'textAlign':
            if (value === 'right') {
              value = 'left';
            } else if (value === 'left') {
              value = 'right';
            }
            break;
          case 'direction':
            if (value === 'ltr') {
              value = 'rtl';
            } else if (value === 'rtl') {
              value = 'ltr';
            }
            break;
          case 'transform':
            var matches = undefined;
            if (matches = value.match(reTranslate)) {
              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
            }
            if (matches = value.match(reSkew)) {
              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ',' + -parseFloat(matches[7]) + matches[8] : '');
            }
            break;
          case 'transformOrigin':
            if (value.indexOf('right') > -1) {
              value = value.replace('right', 'left');
            } else if (value.indexOf('left') > -1) {
              value = value.replace('left', 'right');
            }
            break;
        }
  
        newStyle[key] = value;
      });
  
      return newStyle;
    },
  
    prepareStyles: function prepareStyles(muiTheme) {
      for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        styles[_key - 1] = arguments[_key];
      }
  
      styles = styles.length > 1 ? ImmutabilityHelper.merge.apply(this, styles) : styles[0] || {};
      var flipped = this.ensureDirection(muiTheme, styles);
      return AutoPrefix.all(flipped);
    }
  };

/***/ },

/***/ 864:
/***/ function(module, exports, __webpack_require__) {

  /**
   * Copyright 2013-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule update
   */
  
  /* global hasOwnProperty:true */
  
  'use strict';
  
  var assign = __webpack_require__(6);
  var keyOf = __webpack_require__(38);
  var invariant = __webpack_require__(4);
  var hasOwnProperty = ({}).hasOwnProperty;
  
  function shallowCopy(x) {
    if (Array.isArray(x)) {
      return x.concat();
    } else if (x && typeof x === 'object') {
      return assign(new x.constructor(), x);
    } else {
      return x;
    }
  }
  
  var COMMAND_PUSH = keyOf({ $push: null });
  var COMMAND_UNSHIFT = keyOf({ $unshift: null });
  var COMMAND_SPLICE = keyOf({ $splice: null });
  var COMMAND_SET = keyOf({ $set: null });
  var COMMAND_MERGE = keyOf({ $merge: null });
  var COMMAND_APPLY = keyOf({ $apply: null });
  
  var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];
  
  var ALL_COMMANDS_SET = {};
  
  ALL_COMMANDS_LIST.forEach(function (command) {
    ALL_COMMANDS_SET[command] = true;
  });
  
  function invariantArrayCase(value, spec, command) {
    !Array.isArray(value) ?  true ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : invariant(false) : undefined;
    var specValue = spec[command];
    !Array.isArray(specValue) ?  true ? invariant(false, 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, specValue) : invariant(false) : undefined;
  }
  
  function update(value, spec) {
    !(typeof spec === 'object') ?  true ? invariant(false, 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(false) : undefined;
  
    if (hasOwnProperty.call(spec, COMMAND_SET)) {
      !(Object.keys(spec).length === 1) ?  true ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(false) : undefined;
  
      return spec[COMMAND_SET];
    }
  
    var nextValue = shallowCopy(value);
  
    if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
      var mergeObj = spec[COMMAND_MERGE];
      !(mergeObj && typeof mergeObj === 'object') ?  true ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(false) : undefined;
      !(nextValue && typeof nextValue === 'object') ?  true ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(false) : undefined;
      assign(nextValue, spec[COMMAND_MERGE]);
    }
  
    if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
      invariantArrayCase(value, spec, COMMAND_PUSH);
      spec[COMMAND_PUSH].forEach(function (item) {
        nextValue.push(item);
      });
    }
  
    if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
      invariantArrayCase(value, spec, COMMAND_UNSHIFT);
      spec[COMMAND_UNSHIFT].forEach(function (item) {
        nextValue.unshift(item);
      });
    }
  
    if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
      !Array.isArray(value) ?  true ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(false) : undefined;
      !Array.isArray(spec[COMMAND_SPLICE]) ?  true ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
      spec[COMMAND_SPLICE].forEach(function (args) {
        !Array.isArray(args) ?  true ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
        nextValue.splice.apply(nextValue, args);
      });
    }
  
    if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
      !(typeof spec[COMMAND_APPLY] === 'function') ?  true ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(false) : undefined;
      nextValue = spec[COMMAND_APPLY](nextValue);
    }
  
    for (var k in spec) {
      if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
        nextValue[k] = update(value[k], spec[k]);
      }
    }
  
    return nextValue;
  }
  
  module.exports = update;

/***/ },

/***/ 865:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  
  var React = __webpack_require__(2);
  var ReactDOM = __webpack_require__(325);
  var StylePropable = __webpack_require__(828);
  var DefaultRawTheme = __webpack_require__(832);
  var ThemeManager = __webpack_require__(833);
  
  var rowsHeight = 24;
  
  var styles = {
    textarea: {
      width: '100%',
      resize: 'none',
      font: 'inherit',
      padding: 0
    },
    shadow: {
      width: '100%',
      resize: 'none',
      // Overflow also needed to here to remove the extra row
      // added to textareas in Firefox.
      overflow: 'hidden',
      font: 'inherit',
      padding: 0,
      position: 'absolute',
      opacity: 0
    }
  };
  
  var EnhancedTextarea = React.createClass({
    displayName: 'EnhancedTextarea',
  
    mixins: [StylePropable],
  
    contextTypes: {
      muiTheme: React.PropTypes.object
    },
  
    //for passing default theme context to children
    childContextTypes: {
      muiTheme: React.PropTypes.object
    },
  
    getChildContext: function getChildContext() {
      return {
        muiTheme: this.state.muiTheme
      };
    },
  
    propTypes: {
      onChange: React.PropTypes.func,
      onHeightChange: React.PropTypes.func,
      textareaStyle: React.PropTypes.object,
      rows: React.PropTypes.number,
      rowsMax: React.PropTypes.number
    },
  
    getDefaultProps: function getDefaultProps() {
      return {
        rows: 1
      };
    },
  
    getInitialState: function getInitialState() {
      return {
        height: this.props.rows * rowsHeight,
        muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
      };
    },
  
    componentDidMount: function componentDidMount() {
      this._syncHeightWithShadow();
    },
  
    render: function render() {
      var _props = this.props;
      var onChange = _props.onChange;
      var onHeightChange = _props.onHeightChange;
      var rows = _props.rows;
      var style = _props.style;
      var textareaStyle = _props.textareaStyle;
      var valueLink = _props.valueLink;
  
      var other = _objectWithoutProperties(_props, ['onChange', 'onHeightChange', 'rows', 'style', 'textareaStyle', 'valueLink']);
  
      var textareaStyles = this.mergeStyles(styles.textarea, textareaStyle, {
        height: this.state.height
      });
  
      var shadowStyles = styles.shadow;
  
      if (this.props.hasOwnProperty('valueLink')) {
        other.value = this.props.valueLink.value;
      }
  
      if (this.props.disabled) {
        style.cursor = 'default';
      }
  
      return React.createElement(
        'div',
        { style: this.prepareStyles(this.props.style) },
        React.createElement('textarea', {
          ref: 'shadow',
          style: this.prepareStyles(shadowStyles),
          tabIndex: '-1',
          rows: this.props.rows,
          defaultValue: this.props.defaultValue,
          readOnly: true,
          value: this.props.value,
          valueLink: this.props.valueLink }),
        React.createElement('textarea', _extends({}, other, {
          ref: 'input',
          rows: this.props.rows,
          style: this.prepareStyles(textareaStyles),
          onChange: this._handleChange }))
      );
    },
  
    getInputNode: function getInputNode() {
      return ReactDOM.findDOMNode(this.refs.input);
    },
  
    setValue: function setValue(value) {
      this.getInputNode().value = value;
      this._syncHeightWithShadow(value);
    },
  
    _syncHeightWithShadow: function _syncHeightWithShadow(newValue, e) {
      var shadow = ReactDOM.findDOMNode(this.refs.shadow);
  
      if (newValue !== undefined) {
        shadow.value = newValue;
      }
  
      var newHeight = shadow.scrollHeight;
  
      if (this.props.rowsMax > this.props.rows) {
        newHeight = Math.min(this.props.rowsMax * rowsHeight, newHeight);
      }
  
      if (this.state.height !== newHeight) {
        this.setState({
          height: newHeight
        });
  
        if (this.props.onHeightChange) {
          this.props.onHeightChange(e, newHeight);
        }
      }
    },
  
    _handleChange: function _handleChange(e) {
      this._syncHeightWithShadow(e.target.value);
  
      if (this.props.hasOwnProperty('valueLink')) {
        this.props.valueLink.requestChange(e.target.value);
      }
  
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    },
  
    componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
      if (nextProps.value !== this.props.value) {
        this._syncHeightWithShadow(nextProps.value);
      }
      var newState = {};
      newState.muiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    }
  });
  
  module.exports = EnhancedTextarea;

/***/ },

/***/ 866:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var shallowEqual = __webpack_require__(868);
  
  function relevantContextKeysEqual(classObject, currentContext, nextContext) {
  
    //Get those keys from current object's context that we care
    //about and check whether those keys have changed or not
    if (classObject.getRelevantContextKeys) {
      var currentContextKeys = classObject.getRelevantContextKeys(currentContext);
      var nextContextKeys = classObject.getRelevantContextKeys(nextContext);
  
      if (!shallowEqual(currentContextKeys, nextContextKeys)) {
        return false;
      }
    }
  
    //Check if children context keys changed
    if (classObject.getChildrenClasses) {
      var childrenArray = classObject.getChildrenClasses();
      for (var i = 0; i < childrenArray.length; i++) {
        if (!relevantContextKeysEqual(childrenArray[i], currentContext, nextContext)) {
          return false;
        }
      }
    }
  
    //context keys are equal
    return true;
  }
  
  module.exports = {
  
    //Don't update if state, prop, and context are equal
    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState, nextContext) {
  
      //If either the props or state have changed, component should update
      if (!shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)) {
        return true;
      }
  
      //If current theme and next theme are both undefined, do not update
      if (!this.context.muiTheme && !nextContext.muiTheme) {
        return false;
      }
  
      //If both themes exist, compare keys only if current theme is not static
      if (this.context.muiTheme && nextContext.muiTheme) {
        return !this.context.muiTheme['static'] && !relevantContextKeysEqual(this.constructor, this.context.muiTheme, nextContext.muiTheme);
      }
  
      //At this point it is guaranteed that exactly one theme is undefined so simply update
      return true;
    }
  
  };

/***/ },

/***/ 867:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  
  var React = __webpack_require__(2);
  var ReactDOM = __webpack_require__(325);
  var ColorManipulator = __webpack_require__(835);
  var StylePropable = __webpack_require__(828);
  var Transitions = __webpack_require__(834);
  var UniqueId = __webpack_require__(869);
  var EnhancedTextarea = __webpack_require__(865);
  var DefaultRawTheme = __webpack_require__(832);
  var ThemeManager = __webpack_require__(833);
  var ContextPure = __webpack_require__(866);
  
  /**
   * Check if a value is valid to be displayed inside an input.
   *
   * @param The value to check.
   * @returns True if the string provided is valid, false otherwise.
   */
  function isValid(value) {
    return value || value === 0;
  }
  
  var TextField = React.createClass({
    displayName: 'TextField',
  
    mixins: [ContextPure, StylePropable],
  
    contextTypes: {
      muiTheme: React.PropTypes.object
    },
  
    propTypes: {
      errorStyle: React.PropTypes.object,
      errorText: React.PropTypes.string,
      floatingLabelStyle: React.PropTypes.object,
      floatingLabelText: React.PropTypes.string,
      fullWidth: React.PropTypes.bool,
      hintText: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
      hintStyle: React.PropTypes.object,
      id: React.PropTypes.string,
      inputStyle: React.PropTypes.object,
      multiLine: React.PropTypes.bool,
      onBlur: React.PropTypes.func,
      onChange: React.PropTypes.func,
      onEnterKeyDown: React.PropTypes.func,
      onFocus: React.PropTypes.func,
      onKeyDown: React.PropTypes.func,
      rows: React.PropTypes.number,
      rowsMax: React.PropTypes.number,
      type: React.PropTypes.string,
      underlineStyle: React.PropTypes.object,
      underlineFocusStyle: React.PropTypes.object,
      underlineDisabledStyle: React.PropTypes.object
    },
  
    //for passing default theme context to children
    childContextTypes: {
      muiTheme: React.PropTypes.object
    },
  
    getChildContext: function getChildContext() {
      return {
        muiTheme: this.state.muiTheme
      };
    },
  
    getDefaultProps: function getDefaultProps() {
      return {
        fullWidth: false,
        type: 'text',
        rows: 1
      };
    },
  
    statics: {
      getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
        var textFieldTheme = muiTheme.textField;
  
        return {
          floatingLabelColor: textFieldTheme.floatingLabelColor,
          focusColor: textFieldTheme.focusColor,
          borderColor: textFieldTheme.borderColor,
          textColor: textFieldTheme.textColor,
          disabledTextColor: textFieldTheme.disabledTextColor,
          backgroundColor: textFieldTheme.backgroundColor,
          hintColor: textFieldTheme.hintColor,
          errorColor: textFieldTheme.errorColor
        };
      },
      getChildrenClasses: function getChildrenClasses() {
        return [EnhancedTextarea];
      }
    },
  
    getInitialState: function getInitialState() {
      var props = this.props.children ? this.props.children.props : this.props;
  
      return {
        errorText: this.props.errorText,
        hasValue: isValid(props.value) || isValid(props.defaultValue) || props.valueLink && isValid(props.valueLink.value),
        muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
      };
    },
  
    componentDidMount: function componentDidMount() {
      this._uniqueId = UniqueId.generate();
    },
  
    componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
      var newState = {};
      newState.muiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
  
      newState.errorText = nextProps.errorText;
      if (nextProps.children && nextProps.children.props) {
        nextProps = nextProps.children.props;
      }
  
      var hasValueLinkProp = nextProps.hasOwnProperty('valueLink');
      var hasValueProp = nextProps.hasOwnProperty('value');
      var hasNewDefaultValue = nextProps.defaultValue !== this.props.defaultValue;
  
      if (hasValueLinkProp) {
        newState.hasValue = isValid(nextProps.valueLink.value);
      } else if (hasValueProp) {
        newState.hasValue = isValid(nextProps.value);
      } else if (hasNewDefaultValue) {
        newState.hasValue = isValid(nextProps.defaultValue);
      }
  
      if (newState) this.setState(newState);
    },
  
    getStyles: function getStyles() {
      var props = this.props;
  
      var _constructor$getRelevantContextKeys = this.constructor.getRelevantContextKeys(this.state.muiTheme);
  
      var floatingLabelColor = _constructor$getRelevantContextKeys.floatingLabelColor;
      var focusColor = _constructor$getRelevantContextKeys.focusColor;
      var borderColor = _constructor$getRelevantContextKeys.borderColor;
      var textColor = _constructor$getRelevantContextKeys.textColor;
      var disabledTextColor = _constructor$getRelevantContextKeys.disabledTextColor;
      var backgroundColor = _constructor$getRelevantContextKeys.backgroundColor;
      var hintColor = _constructor$getRelevantContextKeys.hintColor;
      var errorColor = _constructor$getRelevantContextKeys.errorColor;
  
      var styles = {
        root: {
          fontSize: 16,
          lineHeight: '24px',
          width: props.fullWidth ? '100%' : 256,
          height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
          display: 'inline-block',
          position: 'relative',
          fontFamily: this.state.muiTheme.rawTheme.fontFamily,
          transition: Transitions.easeOut('200ms', 'height')
        },
        error: {
          position: 'relative',
          bottom: 5,
          fontSize: 12,
          lineHeight: '12px',
          color: errorColor,
          transition: Transitions.easeOut()
        },
        hint: {
          position: 'absolute',
          lineHeight: '22px',
          opacity: 1,
          color: hintColor,
          transition: Transitions.easeOut(),
          bottom: 12
        },
        input: {
          tapHighlightColor: 'rgba(0,0,0,0)',
          padding: 0,
          position: 'relative',
          width: '100%',
          height: '100%',
          border: 'none',
          outline: 'none',
          backgroundColor: backgroundColor,
          color: props.disabled ? disabledTextColor : textColor,
          font: 'inherit'
        },
        underline: {
          border: 'none',
          borderBottom: 'solid 1px ' + borderColor,
          position: 'absolute',
          width: '100%',
          bottom: 8,
          margin: 0,
          MozBoxSizing: 'content-box',
          boxSizing: 'content-box',
          height: 0
        },
        underlineAfter: {
          position: 'absolute',
          width: '100%',
          overflow: 'hidden',
          userSelect: 'none',
          cursor: 'default',
          bottom: 8,
          borderBottom: 'dotted 2px ' + disabledTextColor
        },
        underlineFocus: {
          borderBottom: 'solid 2px',
          borderColor: focusColor,
          transform: 'scaleX(0)',
          transition: Transitions.easeOut()
        }
      };
  
      styles.error = this.mergeAndPrefix(styles.error, props.errorStyle);
      styles.underline = this.mergeAndPrefix(styles.underline, props.underlineStyle);
      styles.underlineAfter = this.mergeAndPrefix(styles.underlineAfter, props.underlineDisabledStyle);
  
      styles.floatingLabel = this.mergeStyles(styles.hint, {
        lineHeight: '22px',
        top: 38,
        bottom: 'none',
        opacity: 1,
        transform: 'scale(1) translate3d(0, 0, 0)',
        transformOrigin: 'left top'
      });
  
      styles.textarea = this.mergeStyles(styles.input, {
        marginTop: props.floatingLabelText ? 36 : 12,
        marginBottom: props.floatingLabelText ? -36 : -12,
        boxSizing: 'border-box',
        font: 'inherit'
      });
  
      styles.focusUnderline = this.mergeStyles(styles.underline, styles.underlineFocus, props.underlineFocusStyle);
  
      if (this.state.isFocused) {
        styles.floatingLabel.color = focusColor;
        styles.floatingLabel.transform = 'perspective(1px) scale(0.75) translate3d(2px, -28px, 0)';
        styles.focusUnderline.transform = 'scaleX(1)';
      }
  
      if (this.state.hasValue) {
        styles.floatingLabel.color = ColorManipulator.fade(props.disabled ? disabledTextColor : floatingLabelColor, 0.5);
        styles.floatingLabel.transform = 'perspective(1px) scale(0.75) translate3d(2px, -28px, 0)';
        styles.hint.opacity = 0;
      }
  
      if (props.floatingLabelText) {
        styles.hint.opacity = 0;
        styles.input.boxSizing = 'border-box';
        if (this.state.isFocused && !this.state.hasValue) styles.hint.opacity = 1;
      }
  
      if (props.style && props.style.height) {
        styles.hint.lineHeight = props.style.height;
      }
  
      if (this.state.errorText && this.state.isFocused) styles.floatingLabel.color = styles.error.color;
      if (props.floatingLabelText && !props.multiLine) styles.input.marginTop = 14;
  
      if (this.state.errorText) {
        styles.focusUnderline.borderColor = styles.error.color;
        styles.focusUnderline.transform = 'scaleX(1)';
      }
  
      return styles;
    },
  
    render: function render() {
      var _props = this.props;
      var className = _props.className;
      var errorStyle = _props.errorStyle;
      var errorText = _props.errorText;
      var floatingLabelText = _props.floatingLabelText;
      var fullWidth = _props.fullWidth;
      var hintText = _props.hintText;
      var hintStyle = _props.hintStyle;
      var id = _props.id;
      var multiLine = _props.multiLine;
      var onBlur = _props.onBlur;
      var onChange = _props.onChange;
      var onFocus = _props.onFocus;
      var type = _props.type;
      var rows = _props.rows;
      var rowsMax = _props.rowsMax;
  
      var other = _objectWithoutProperties(_props, ['className', 'errorStyle', 'errorText', 'floatingLabelText', 'fullWidth', 'hintText', 'hintStyle', 'id', 'multiLine', 'onBlur', 'onChange', 'onFocus', 'type', 'rows', 'rowsMax']);
  
      var styles = this.getStyles();
  
      var inputId = id || this._uniqueId;
  
      var errorTextElement = this.state.errorText ? React.createElement(
        'div',
        { style: this.prepareStyles(styles.error) },
        this.state.errorText
      ) : null;
  
      var hintTextElement = hintText ? React.createElement(
        'div',
        { style: this.prepareStyles(styles.hint, hintStyle) },
        hintText
      ) : null;
  
      var floatingLabelTextElement = floatingLabelText ? React.createElement(
        'label',
        {
          style: this.prepareStyles(styles.floatingLabel, this.props.floatingLabelStyle),
          htmlFor: inputId },
        floatingLabelText
      ) : null;
  
      var inputProps = undefined;
      var inputElement = undefined;
  
      inputProps = {
        id: inputId,
        ref: this._getRef(),
        onBlur: this._handleInputBlur,
        onFocus: this._handleInputFocus,
        disabled: this.props.disabled,
        onKeyDown: this._handleInputKeyDown
      };
      var inputStyle = this.mergeStyles(styles.input, this.props.inputStyle);
  
      if (!this.props.hasOwnProperty('valueLink')) {
        inputProps.onChange = this._handleInputChange;
      }
      if (this.props.children) {
        inputElement = React.cloneElement(this.props.children, _extends({}, inputProps, this.props.children.props));
      } else {
        inputElement = multiLine ? React.createElement(EnhancedTextarea, _extends({}, other, inputProps, {
          style: inputStyle,
          rows: rows,
          rowsMax: rowsMax,
          onHeightChange: this._handleTextAreaHeightChange,
          textareaStyle: this.mergeAndPrefix(styles.textarea) })) : React.createElement('input', _extends({}, other, inputProps, {
          style: this.prepareStyles(inputStyle),
          type: type }));
      }
  
      var underlineElement = this.props.disabled ? React.createElement('div', { style: this.prepareStyles(styles.underlineAfter) }) : React.createElement('hr', { style: this.prepareStyles(styles.underline) });
      var focusUnderlineElement = React.createElement('hr', { style: this.prepareStyles(styles.focusUnderline) });
  
      return React.createElement(
        'div',
        { className: className, style: this.prepareStyles(styles.root, this.props.style) },
        floatingLabelTextElement,
        hintTextElement,
        inputElement,
        underlineElement,
        focusUnderlineElement,
        errorTextElement
      );
    },
  
    blur: function blur() {
      if (this.isMounted()) this._getInputNode().blur();
    },
  
    clearValue: function clearValue() {
      this.setValue('');
    },
  
    focus: function focus() {
      if (this.isMounted()) this._getInputNode().focus();
    },
  
    getValue: function getValue() {
      return this.isMounted() ? this._getInputNode().value : undefined;
    },
  
    setErrorText: function setErrorText(newErrorText) {
      if (("development") !== 'production' && this.props.hasOwnProperty('errorText')) {
        console.error('Cannot call TextField.setErrorText when errorText is defined as a property.');
      } else if (this.isMounted()) {
        this.setState({ errorText: newErrorText });
      }
    },
  
    setValue: function setValue(newValue) {
      if (("development") !== 'production' && this._isControlled()) {
        console.error('Cannot call TextField.setValue when value or valueLink is defined as a property.');
      } else if (this.isMounted()) {
        if (this.props.multiLine) {
          this.refs[this._getRef()].setValue(newValue);
        } else {
          this._getInputNode().value = newValue;
        }
  
        this.setState({ hasValue: isValid(newValue) });
      }
    },
  
    _getRef: function _getRef() {
      return this.props.ref ? this.props.ref : 'input';
    },
  
    _getInputNode: function _getInputNode() {
      return this.props.children || this.props.multiLine ? this.refs[this._getRef()].getInputNode() : ReactDOM.findDOMNode(this.refs[this._getRef()]);
    },
  
    _handleInputBlur: function _handleInputBlur(e) {
      this.setState({ isFocused: false });
      if (this.props.onBlur) this.props.onBlur(e);
    },
  
    _handleInputChange: function _handleInputChange(e) {
      this.setState({ hasValue: isValid(e.target.value) });
      if (this.props.onChange) this.props.onChange(e);
    },
  
    _handleInputFocus: function _handleInputFocus(e) {
      if (this.props.disabled) return;
      this.setState({ isFocused: true });
      if (this.props.onFocus) this.props.onFocus(e);
    },
  
    _handleInputKeyDown: function _handleInputKeyDown(e) {
      if (e.keyCode === 13 && this.props.onEnterKeyDown) this.props.onEnterKeyDown(e);
      if (this.props.onKeyDown) this.props.onKeyDown(e);
    },
  
    _handleTextAreaHeightChange: function _handleTextAreaHeightChange(e, height) {
      var newHeight = height + 24;
      if (this.props.floatingLabelText) newHeight += 24;
      ReactDOM.findDOMNode(this).style.height = newHeight + 'px';
    },
  
    _isControlled: function _isControlled() {
      return this.props.hasOwnProperty('value') || this.props.hasOwnProperty('valueLink');
    }
  
  });
  
  module.exports = TextField;

/***/ },

/***/ 868:
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = shallowEqual;
  
  function shallowEqual(objA, objB) {
    if (objA === objB) {
      return true;
    }
  
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
      return false;
    }
  
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
  
    if (keysA.length !== keysB.length) {
      return false;
    }
  
    // Test for A's keys different from B.
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var i = 0; i < keysA.length; i++) {
      if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
        return false;
      }
    }
  
    return true;
  }
  
  module.exports = exports['default'];

/***/ },

/***/ 869:
/***/ function(module, exports) {

  "use strict";
  
  var index = 0;
  
  module.exports = {
    generate: function generate() {
      return "mui-id-" + index++;
    }
  };

/***/ }

})
//# sourceMappingURL=0.12cdcbc9e062fc566d04.hot-update.js.map