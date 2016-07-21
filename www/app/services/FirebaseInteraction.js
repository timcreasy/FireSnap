firesnap.service("FirebaseInteraction", function($state) {

  this.addNewUserToFirebase = function(uid, email, fullName) {
    firebase.database().ref().child('users').child(uid).set({
      uid: uid,
      email: email,
      fullName: fullName
    });
  };

  this.getUsers = function() {

    return firebase.database().ref('users').once('value', function(snapshot) {
      return snapshot.val();
    });

  }

});


//   let users = snapshot.val();
//   let counter = 1;
//   $scope.userList = [];
//   for (let user in users) {
//     users[user].id = counter;
//     counter++;
//     $scope.userList.push(users[user]);
//   }
