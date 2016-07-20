firesnap.service("FirebaseInteraction", function($state) {

  this.addNewUserToFirebase = function(uid, email, fullName) {
    firebase.database().ref().child('users').child(uid).set({
      uid: uid,
      email: email,
      fullName: fullName
    });
  };

});
