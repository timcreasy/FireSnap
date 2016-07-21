firesnap.controller('LoadingCtrl', function($scope, $localStorage, $state, Auth) {

  $scope.$storage = $localStorage;

  if ($scope.$storage.email !== undefined && $scope.$storage.password !== undefined) {
    Auth.login($scope.$storage.email, $scope.$storage.password);
  } else {
    $state.go('login');
  }

});
