firesnap.controller('ViewSnapCtrl', ['$scope', '$ionicPlatform', '$state', 'ViewSnap',
  function($scope, $ionicPlatform, $state, ViewSnap) {

    $scope.snapImage = ViewSnap.getSnapToView();

    $scope.goHome = function() {
      $state.go('home');
    }

  }
]);
