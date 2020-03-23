'use strict';

angular.module('makmacademy')
  .provider('$mkTheming', function ($mdThemingProvider) {
    var _PRIMARY = {
      'operational': 'red',
      'exercise': 'blue',
      'management': 'teal',
      'login': 'red'
    };
    // var definePallete = {
    //   'operational': function() {

    //   },
    //   ''
    // }
    $mdThemingProvider.definePalette('inverted-grey', {
      '50': '#000000',
      '100': '#212121',
      '200': '#424242',
      '300': '#616161',
      '400': '#757575',
      '500': '#9e9e9e',
      '600': '#bdbdbd',
      '700': '#e0e0e0',
      '800': '#eeeeee',
      '900': '#f5f5f5',
      '1000': '#fafafa',
      'A100': '#616161',
      'A200': '#bdbdbd',
      'A400': '#eeeeee',
      'A700': '#ffffff',
      'contrastDefaultColor': 'dark',
      'contrastLightColors': '600 700 800 900'
    });
    $mdThemingProvider.definePalette('dark', $mdThemingProvider._PALETTES['grey']);
    function rgba(rgbArray, opacity) {
      if (!rgbArray) return "rgb('0,0,0')";

      if (rgbArray.length == 4) {
        rgbArray = angular.copy(rgbArray);
        opacity ? rgbArray.pop() : opacity = rgbArray.pop();
      }
      return opacity && (typeof opacity == 'number' || (typeof opacity == 'string' && opacity.length)) ?
      'rgba(' + rgbArray.join(',') + ',' + opacity + ')' :
      'rgb(' + rgbArray.join(',') + ')';
    }

    var getPalette = function (intent) {
      var paletteName = intent;
      var specialIntents = ['primary', 'accent', 'background', 'warn'];
      if (specialIntents.indexOf(intent.toLowerCase()) !== -1) {
        var theme = $mdThemingProvider._THEMES['default'];
        if (intent === 'background') {
          paletteName = theme.isDark ? 'grey' : 'inverted-grey';
        }
        else {
          paletteName = theme.colors[intent].name;
        }
      }
      ;
      return $mdThemingProvider._PALETTES[paletteName];
    }

    var themingService = function () {
      var getColor = function (intent, hue) {
        hue = hue || 500;
        var palette = getPalette(intent);
        if (!palette) {
          throw new Error('Unknown pallete "' + intent + '"')
        }
        var color = palette[hue];
        var result = {
          R: color.value[0],
          G: color.value[1],
          B: color.value[2],
          css: function (opacity) {
            if (typeof opacity === 'undefined') {
              opacity = 1;
            }
            return rgba([result.R, result.G, result.B], opacity);
          }
        };
        return result;
      };
      return {
        getColor: getColor
      };
    };
    this.$get = function () {
      return themingService();
    };
    return this;
    // var style = angular.element('<style type="text/css"></style>');
    //     angular.element('head').append(style);
    // var lightPalette = {
    //   shellBackground: '#f1f1f1',
    //   itemBackground: 'white',
    //   navigationBackground: 'white'
    // };
    // var darkPalette = {
    //   shellBackground: '#303030',
    //   itemBackground: '#dadada',
    //   navigationBackground: '#202020'
    // };
    // var selectedPalette = lightPalette;
    // this.setThemes = function (dark) {
    //   $mdThemingProvider.theme('operational-light')
    //     .primaryPalette('red')
    //     .accentPalette('light-blue');
    //   $mdThemingProvider.theme('operational-dark')
    //     .primaryPalette('red')
    //     .accentPalette('amber', {
    //         'default': '800'
    //     })
    //       .warnPalette('grey', {
    //           'default': '700'
    //       })
    //     .dark();
    //   $mdThemingProvider.theme('exercise-light')
    //     .primaryPalette('blue')
    //     .accentPalette('teal');
    //   $mdThemingProvider.theme('exercise-dark')
    //     .primaryPalette('blue')
    //     .accentPalette('teal')
    //     .dark();
    //   $mdThemingProvider.theme('management-light')
    //     .primaryPalette('blue-grey')
    //     .accentPalette('light-blue');
    //   $mdThemingProvider.theme('management-dark')
    //     .primaryPalette('teal')
    //     .accentPalette('light-blue')
    //     .dark();
    //   $mdThemingProvider.alwaysWatchTheme(true);
    //   selectedPalette = dark ? darkPalette : lightPalette;
    //   setStyle();
    // };
    // this.$get = [function () {
    //   return {
    //     setDark: function (dark) {
    //       if ((selectedPalette === darkPalette) === dark) {
    //         return;
    //       }
    //       selectedPalette = dark ? darkPalette : lightPalette;
    //       setStyle();
    //     }
    //   };
    // }];
    // function setStyle() {
    //   var css = '.shell {' +
    //     'background-color: ' + selectedPalette.shellBackground + ';' +
    //     '} ' +
    //     'flame-item {' +
    //     '   background-color: ' + selectedPalette.itemBackground +
    //     '}' +
    //     ' item-header {' +
    //     '   background-color: ' + selectedPalette.itemBackground +
    //     '} ' +
    //     '.flame-sidebar {' +
    //     '   background-color: ' + selectedPalette.navigationBackground +
    //     '}';
    //   style.html(css);
    // }

    // return this;
  }
);