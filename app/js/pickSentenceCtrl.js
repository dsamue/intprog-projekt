// SentenceController 
projectApp.controller('StartCtrl', function ($scope, Model) {

    $scope.resetGame = function(sentence){
    Model.resetGameData();
  };

});