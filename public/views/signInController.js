myApp.controller('SignInController', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {
    $scope.user = {
      email: '',
      password: ''
    };
    $scope.message = '';

    $scope.login = function() {
      if($scope.user.email == '' || $scope.user.password == '') {
        $scope.message = " enter both your email and password ";
      } else {
        console.log('sending to server...', $scope.user);
        $http.post('/', $scope.user).then(function(response) {
          if(response.data.email) {
            console.log('success: ', response.data);
            // location works with SPA (ng-route)
            $location.path('/home');
          } else {
            console.log('failure: ', response.data);
            $scope.message = "Sign in failed. Failed!";
          }
        });
      }
    };

    

    // $scope.registerUser = function() {
    //   if($scope.user.email == '' || $scope.user.password == '') {
    //     $scope.message = "Choose a username and password!";
    //   } else {
    //     console.log('sending to server...', $scope.user);
    //     $http.post('/register', $scope.user).then(function(response) {
    //       console.log('success');
    //       $location.path('/login');
    //     },
    //     function(response) {
    //       console.log('error');
    //       $scope.message = "Please try again."
    //     });
    //   }
    // }


      $scope.logout = function() {
        $http.get('/user/logout').then(function(response) {
          console.log('logged out');
          $location.path("/home");
        });
      };
}]);
