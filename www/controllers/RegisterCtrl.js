firesnap.controller('RegisterCtrl',
  function($scope, $ionicPlatform, Auth, $state) {

    $scope.loginPressed = function() {
      $state.go('login');
    }

    $scope.register = {
      email:  "",
      password: "",
      fullName: "",
    }

    $scope.registerPressed = function() {

      Auth.register($scope.register.email, $scope.register.password, $scope.register.fullName);

    };

});
