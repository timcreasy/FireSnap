firesnap.controller('HomeCtrl', function($scope, $ionicPlatform, $cordovaCamera, $interval, $timeout, $localStorage, $sessionStorage, Auth, CurrentUser, ViewSnap, $state, $ionicLoading, $ionicGesture, ImageToSend) {

  firebase.auth().onAuthStateChanged(function(theUser) {
    // If logged in go to home, otherwise, back to login
    if (theUser) {
  //     CurrentUser.setUser(user.uid);
  //     $state.go('home');
  //   } else {
  //     CurrentUser.setUser(null);
  //     $state.go('login');
  //   }
  // });



    $scope.timerActive = false;
    $scope.counter = 5;
    $scope.timer = null;

    // // Listen for any changes for new images
    // firebase.database().ref('images').on('value', function(snapshot) {
    //   $timeout(function() {
    //     $scope.collection = snapshot.val();
    //   });
    // });


    //
    // // Listen for any changes for new images
    firebase.database().ref('users').child(theUser.uid).child('inbox').on('value', function(snapshot) {
      $timeout(function() {
        $scope.collection = snapshot.val();
      });
    });

    // Logout button pressed in nav bar
    $scope.logout = function() {
      Auth.logout();
      $state.go('login');
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
        ImageToSend.set({
          image: imageData,
          userId: CurrentUser.getUser().uid,
          fullName: CurrentUser.getUser().fullName
        });
        // firebase.database().ref().child('images').push({
        //   image: imageData,
        //   userId: CurrentUser.getUser().uid,
        //   fullName: CurrentUser.getUser().fullName
        // });
        $state.go('sendpage');
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

      console.log(selected);

      var sourceString = 'data:image/jpeg;base64,' + selected.image;
      var img = `<div id="overlay">
                    <h1 id="counterOutput">${$scope.counter}</h1>
                    <img id="snapImage" src="${sourceString}">
                   </div>`;

      $scope.show(img);

      // // Timer logic
      // if (!$scope.timerActive) {
      //   $scope.timerActive = true;
      //   $timeout(function() {
      //     console.log("Timer Done");
      //     $scope.timerActive = false;
      //     $scope.hide();
      //   }, 5000);
      // }


      if(!$scope.timerActive) {

        $scope.timerActive = true;

        $scope.timer = $interval(function () {

          if($scope.counter == 1) {
            $interval.cancel($scope.timer);
            $scope.hide();
            $scope.counter = 5;
            $scope.timerActive = false;
          } else {
            $scope.counter--;
            console.log($scope.counter);
            document.getElementById('counterOutput').innerHTML = $scope.counter;
          }

        }, 1000);


      }


      //
      // if (!$scope.timerActive) {
      //   $scope.timerActive = true;
      //
      //   let countdown = $interval(function() {
      //     $scope.counter--;
      //     console.log($scope.counter);
      //     document.getElementById('counterOutput').innerHTML = $scope.counter;
      //   }, 1000);
      //
      //   $timeout(function() {
      //     console.log("Timer Done");
      //     $scope.timerActive = false;
      //     $interval.cancel(countdown);
      //     $scope.counter = 5;
      //     $scope.hide();
      //   }, 5000);
      // }

      // let countdown = $interval(function() {
      //   if($scope.counter === 0) {
      //     $interval.cancel(countdown);
      //     $scope.hide();
      //     $scope.counter = 5;
      //   } else {
      //     $scope.counter--;
      //     console.log($scope.counter);
      //     document.getElementById('counterOutput').innerHTML = $scope.counter;
      //   }
      // }, 1000);

    }

    // Logic for when image released
    $scope.imageReleased = function() {
      $scope.hide();
    }

}});
});
