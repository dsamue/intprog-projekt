// Controller 
projectApp.controller('SomeCtrl', function ($scope, Model) {

  $scope.myVar = Model.getMyVar();
  $scope.sentences = Model.getSentences();
  $scope.mySentences = Model.getMySentence();

  $scope.setMySentence = function(word){
    Model.setMySentence(word);
  }

  $scope.clearMySentence = function(){
    Model.clearMySentence();
    $scope.mySentences = Model.getMySentence();       //Det här känns som en fullösning. Utan den så uppdateras inte pratbubblan när man rensar mySentence. Oklart varför..
  }

  $scope.checkMySentence = function(){
    Model.checkMySentence();
  }

  $scope.setMyVar = function(number){
    Model.setMyVar(number);
  }

  $scope.getMyVar = function() {
    return Model.getMyVar();
  }

});