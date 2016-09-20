myApp.controller('HomeController', ["$scope", "$http", function($scope, $http){
  console.log("in the controller aka clientapp.js");
  $scope.email = "";
  $scope.password = "";
  $scope.heading = "Message: ";
  $scope.updateMessage = function(){
    $scope.message = "Hello " + $scope.email + " " + $scope.password + "!";
  };
}]);
