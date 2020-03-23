'use strict';

(function () {
  var directives =
    [
      {
        name: 'mkBackground',
        css: 'background-color'
      },
      {
        name: 'mkForeground',
        css: 'color'
      }
    ];

  directives.forEach(function (dir) {
    angular.module('makmacademy')
      .directive(dir.name, function ($mkTheming) {
        return {
          restrict: 'A',
          link: function (scope, elem, attr) {
            attr.$observe(dir.name, function (value) {
              if (value) {
                var parts = value.split('-');
                var intent = parts[0];
                var hue = parts[1] || 500;
                var opacity = parts[2] || 1;
                var color = $mkTheming.getColor(intent, hue);
                elem.css(dir.css, color.css(opacity))
              }
            });
          }
        };
      });
  });
})();