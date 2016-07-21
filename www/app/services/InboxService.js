// firesnap.service("InboxService", function($state) {
//
//     var snapToView;
//
//     this.listenToInbox = function(userID) {
//       firebase.database().ref('users').child($scope.user.uid).child('inbox').on('value', function(snapshot) {
//         $timeout(function() {
//           $scope.collection = snapshot.val();
//         });
//       });
//     };
//
//     this.getSnapToView = function() {
//       return snapToView;
//     };
//
// });
