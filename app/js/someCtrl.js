// Controller 
projectApp.controller('SomeCtrl', function ($scope, Model) {

  $scope.myVar = Model.getMyVar();
  $scope.sentences = Model.getSentences();

  $scope.setMyVar = function(number){
    Model.setMyVar(number);
  }

  $scope.getMyVar = function() {
    return Model.getMyVar();
  }

});