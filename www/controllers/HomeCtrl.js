firesnap.controller('HomeCtrl', ['$scope', '$ionicPlatform', '$cordovaCamera', '$timeout', '$localStorage', '$sessionStorage', 'Auth',
  function($scope, $ionicPlatform, $cordovaCamera, $timeout, $localStorage, $sessionStorage, Auth) {

    $scope.logout = function() {
      console.log("Log out pressed");
      Auth.logout();
    }

    $scope.$storage = $localStorage;

    firebase.database().ref('images').on('value', function(snapshot) {

      $timeout(function() {
        $scope.collection = snapshot.val();
      });

    });

    $scope.picture = function() {

      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 500,
        targetHeight: 500,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
  	    correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        firebase.database().ref().child('images').push({image: imageData});
      }, function(err) {
        // error
      });

    }
}]);
