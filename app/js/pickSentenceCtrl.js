// Controller 
projectApp.controller('PickSentenceCtrl', function ($scope, Model) {

  $scope.sentences = Model.getAllSentences();


  $scope.setCorrectSentence = function(sentence){
    Model.setCorretSentence(sentence);
  };

});