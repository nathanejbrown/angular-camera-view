(function() {
  'use strict';

  $('select').material_select();

})();

var app = angular.module('cameraApp', []);

app.filter('stars', function () {
  return function (input) {
    let returnString = '';
    for (x = 0; x < input; x++) {
      returnString += '*';
    }
    return returnString;
  }
});
