// SentenceController 
projectApp.controller('PickSentenceCtrl', function ($scope, Model) {

  $scope.allSentences = Model.getAllSentences();


  $scope.setCorrectSentence = function(sentence){
    Model.setCorretSentence(sentence);
  };

    $scope.resetGame = function(sentence){
    Model.resetGameData();
  };

});