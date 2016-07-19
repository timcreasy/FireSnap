firesnap.service("Auth", function($ionicPopup, $state) {

  this.login = function(userEmail, userPassword) {

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {

        // Show login error
        $ionicPopup.show({
          title: "Login Error",
          template: error.message,
          buttons: [{
            text: 'Dismiss',
            type: 'button-default'
          }]
        });

    });

  }

  // Logs user out
  this.logout = function() {
    firebase.auth().signOut();
  }

  firebase.auth().onAuthStateChanged(function(user) {
    // If logged in go to home, otherwise, back to login
    if (user) {
      console.log(user);
      $state.go('home');
    } else {
      $state.go('index');
    }
  });

});
