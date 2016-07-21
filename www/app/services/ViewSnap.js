firesnap.service("ViewSnap", function($state) {

  var snapToView;

  this.setSnapToView = function(image) {
    snapToView = image;
  };

  this.getSnapToView = function() {
    return snapToView;
  };

});
