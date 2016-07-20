firesnap.controller('HomeCtrl', ['$scope', '$ionicPlatform', '$cordovaCamera', '$interval', '$timeout', '$localStorage', '$sessionStorage', 'Auth', 'CurrentUser', 'ViewSnap', '$state', '$ionicLoading', '$ionicGesture',
  function($scope, $ionicPlatform, $cordovaCamera, $interval, $timeout, $localStorage, $sessionStorage, Auth, CurrentUser, ViewSnap, $state, $ionicLoading, $ionicGesture) {

    $scope.timerActive = false;

    // Listen for any changes for new images
    firebase.database().ref('images').on('value', function(snapshot) {
      $timeout(function() {
        $scope.collection = snapshot.val();
      });
    });

    // Logout button pressed in nav bar
    $scope.logout = function() {
      Auth.logout();
    }

    // Snap button pressed in nav bar
    $scope.picture = function() {

      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: false,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 1080,
        targetHeight: 1920,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
  	    correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        firebase.database().ref().child('images').push({
          image: imageData,
          userId: CurrentUser.getUser().uid,
          fullName: CurrentUser.getUser().fullName
        });
      }, function(err) {
        // error
      });

    }

    // Shows image overlay on hold
    $scope.show = function(image) {
      $ionicLoading.show({
        template: image
      }).then(function(){
        //  console.log("The loading indicator is now displayed");
      });
    };

    // Hides image overlay on release
    $scope.hide = function(){
      $ionicLoading.hide().then(function(){
        //  console.log("The loading indicator is now hidden");
      });
    };


    // Logic for when image is held
    $scope.imageHeld = function(selected) {
      var sourceString = 'data:image/jpeg;base64,' + selected.image;
      var img = `<div id="overlay">
                    <img id="snapImage" src="${sourceString}">
                   </div>`;

      $scope.show(img);

      // Timer logic
      if (!$scope.timerActive) {
        $scope.timerActive = true;
        $timeout(function() {
          console.log("Timer Done");
          $scope.timerActive = false;
          $scope.hide();
        }, 5000);
      }

    }

    // Logic for when image released
    $scope.imageReleased = function() {
      $scope.hide();
    }


}]);
