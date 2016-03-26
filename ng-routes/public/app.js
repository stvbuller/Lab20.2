angular.module('RoutingApp', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/javascript', {
      templateUrl: 'javascript.html'
    })
    .when('/jquery', {
      templateUrl: 'jquery.html'
    })
    .when('/angular', {
      templateUrl: 'angular.html'
    })
    .when('/nodejs', {
      templateUrl: 'nodejs.html'
    })
    .when('/mongodb', {
      templateUrl: 'mongodb.html'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  }]);
