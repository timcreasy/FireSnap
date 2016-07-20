firesnap.service("CurrentUser", function($state) {

  var currentUser = null;

  this.getUser = function() {
    return currentUser;
  };

  this.setUser = function(userID) {

    if(userID !== null) {
      firebase.database().ref().child('users').child(userID).once('value', function(snapshot) {
        currentUser = snapshot.val();
      });
    }

  };

});
