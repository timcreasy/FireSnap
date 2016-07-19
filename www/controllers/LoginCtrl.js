firesnap.controller('LoginCtrl', ['$scope', '$ionicPlatform', 'Auth', '$localStorage',
  function($scope, $ionicPlatform, Auth, $localStorage) {

    $scope.login = {
      email:  "",
      password: ""
    }

    $scope.$storage = $localStorage;

    $scope.loginPressed = function() {

      Auth.login($scope.login.email, $scope.login.password);
      $scope.$storage.email = $scope.login.email;
      $scope.$storage.password = $scope.login.password;
      $scope.login.email = "";
      $scope.login.password = "";

    };

  }
]);
