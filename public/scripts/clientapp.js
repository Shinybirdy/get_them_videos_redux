var myApp = angular.module('myApp', []);


myApp.controller('APIController', ['$scope', '$http', "$ngRoute", function($scope, $http, $ngRoute) {
  var token;
  var baseURL = 'http://proofapi.herokuapp.com/';
  $scope.videos = '';


  }]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/views/home.html',
            controller: "HomeController"
        })

        .when('/user', {
            templateUrl: '/views/user.html',
            controller: "UserController"
        })
        .when('/signIn', {
            templateUrl: '/views/signIn.html',
            controller: "SignInController"
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);
