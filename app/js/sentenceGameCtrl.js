// Controller 
projectApp.controller('SentenceGameCtrl', function ($scope, Model, $routeParams) {

  $scope.testVar = $routeParams.sentenceId;		
  $scope.myVar = Model.getMyVar();
  $scope.sentence = Model.getSentence($routeParams.sentenceId); 
  $scope.allSentences = Model.getAllSentences();
  $scope.mySentences = Model.getMySentence();

  $scope.setMySentence = function(word){
    Model.setMySentence(word);
  };

  $scope.clearMySentence = function(){
    Model.clearMySentence();
    $scope.mySentences = Model.getMySentence();       //Det här känns som en fullösning. Utan den så uppdateras inte pratbubblan när man rensar mySentence. Oklart varför..
  };

  $scope.checkMySentence = function(){
    isCorrect=Model.checkMySentence();

    if (isCorrect===true){
    	alert("Rätt!");
    }

    else {
    	alert("Fel..")
    }
  };

  $scope.playSound = function(audiofile){
    var audio = new Audio('audio/'+audiofile);
	audio.play();
  };

  $scope.playSentence = function(){
    var audio = new Audio('audio/'+sentence.audiofile);
	audio.play();
  };

  $scope.setMyVar = function(number){
    Model.setMyVar(number);
  };

  $scope.getMyVar = function() {
    return Model.getMyVar();
  };

});