firesnap.controller('SendSnapCtrl',
  function($scope, $ionicPlatform, $state, $timeout, FirebaseInteraction, ImageToSend, CurrentUser) {

    $scope.imageToSend = ImageToSend.get();

    $scope.userList;
    $scope.usersToSendTo;

    firebase.database().ref('users').once('value', function(snapshot) {
      $scope.userList = snapshot.val();
    });

    $scope.goHome = function() {
      $state.go('home');
    }

    $scope.onValueChanged = function(value){
      $scope.usersToSendTo = value;

      $scope.usersToSendTo.forEach(function(user) {

        firebase.database().ref().child('users').child(user.uid).child('inbox').push({
          image: $scope.imageToSend.image,
          userId: CurrentUser.getUser().uid,
          fullName: CurrentUser.getUser().fullName
        });

      });

      $state.go('home');

      // firebase.database().ref().child('users').child(uid).set({
      //   uid: uid,
      //   email: email,
      //   fullName: fullName
      // });

    }

    // // Get users then populate userList
    // FirebaseInteraction.getUsers().then(function(userData) {
    //
    //   let users = userData.val();
    //   let counter = 1;
    //   $scope.userList = [];
    //   for (let user in users) {
    //     users[user].id = counter;
    //     counter++;
    //     $scope.userList.push(users[user]);
    //   }
    //
    // });
    //
    //
    // var selected = [];
    //
    // $scope.clicked = function (member) {
    //     var index = selected.indexOf(member);
    //     if (index > -1) {
    //         selected.splice(index, 1);
    //         member.selected = false;
    //     } else {
    //         selected.push(member);
    //         member.selected = true;
    //     }
    // }



    // $scope.userList = [];
    // $scope.usersToSendTo = null;

    // firebase.database().ref('users').on('value', function(snapshot) {
    //   $timeout(function() {
    //     let users = snapshot.val();
    //     let counter = 1;
    //     $scope.userList = [];
    //     for (let user in users) {
    //       users[user].id = counter;
    //       counter++;
    //       $scope.userList.push(users[user]);
    //     }
    //   });
    // });


    // $scope.onValueChanged = function(value){
    //   $scope.usersToSendTo = value;
    // }
    //
    //
    // // Get users then populate userList
    // FirebaseInteraction.getUsers().then(function(userData) {
    //
    //   let users = userData.val();
    //   let counter = 1;
    //   $scope.userList = [];
    //   for (let user in users) {
    //     users[user].id = counter;
    //     counter++;
    //     $scope.userList.push(users[user]);
    //   }
    //
    // });


});
