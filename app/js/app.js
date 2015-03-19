// Set up the main app module
var projectApp = angular.module('projectApp', ['ngRoute','ngResource','ui.sortable']);

// Connecting partial views and controllers to specific URL
projectApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.

      when('/start', {
        templateUrl: 'partials/start.html',
        controller: 'StartCtrl'                
      }).
      when('/sentence/:sentenceId', {
        templateUrl: 'partials/sentenceGame.html',
        controller: 'SentenceGameCtrl'
      }).
      when('/test', {
        templateUrl: 'partials/progressbar.html',          
        controller: 'progressbarCtrl'
      }).
      when('/finish', {
        templateUrl: 'partials/finish.html',          
        controller: 'progressbarCtrl' //behövs ingen
      }).
      otherwise({
        redirectTo: '/start'
      });
  }]);