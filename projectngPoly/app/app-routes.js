(function () {
  'use strict';

  angular
    .module('projectngPoly')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
