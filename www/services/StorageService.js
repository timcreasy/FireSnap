firesnap.service("StorageService", function ($localStorage) {
  var _getAll = function () {
    return $localStorage.savedData;
  };
  var _add = function (item) {
    $localStorage.savedData.push(item);
  }
  var _remove = function (item) {
    $localStorage.savedData.splice($localStorage.savedData.indexOf(item), 1);
  }
  return {
      getAll: _getAll,
      add: _add,
      remove: _remove
    };
})
