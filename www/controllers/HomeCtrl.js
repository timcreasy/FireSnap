firesnap.controller('HomeCtrl', ['$scope', '$ionicPlatform', '$cordovaCamera', '$interval', '$timeout', '$localStorage', '$sessionStorage', 'Auth', 'CurrentUser', 'ViewSnap', '$state', '$ionicLoading', '$ionicGesture',
  function($scope, $ionicPlatform, $cordovaCamera, $interval, $timeout, $localStorage, $sessionStorage, Auth, CurrentUser, ViewSnap, $state, $ionicLoading, $ionicGesture) {

    $scope.logout = function() {
      Auth.logout();
    }

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

    $scope.show = function(image) {
      $ionicLoading.show({
        template: image
      }).then(function(){
        //  console.log("The loading indicator is now displayed");
      });
    };

    $scope.hide = function(){
      $ionicLoading.hide().then(function(){
        //  console.log("The loading indicator is now hidden");
      });
    };

    // $scope.timerFunction = function() {
    //
    //   let counter = 5;
    //   let timer = $interval(function() {
    //     counter--;
    //     if(counter < 0) {
    //       $interval.cancel(timer);
    //       console.log("DONE");
    //       $scope.hide();
    //     } else {
    //       console.log(counter);
    //     }
    //   }, 1000);
    //
    // }

    $scope.imageHeld = function(selected) {
      var sourceString = 'data:image/jpeg;base64,' + selected.image;
      var img = `<div id="overlay">
                    <img id="snapImage" src="${sourceString}">
                   </div>`;

      $scope.show(img);

      $timeout(function() {
        $scope.hide();
      }, 4000);

      // $scope.timerFunction();
    }

    $scope.imageReleased = function() {
      $scope.hide();
    }


}]);
