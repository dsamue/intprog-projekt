// Controller 

projectApp.controller('SentenceGameCtrl', function ($scope, Model, $routeParams, $location) {

  $scope.alerts= true; //sätter hide=true på alerts

  $scope.testVar = $routeParams.sentenceId;		
  $scope.myVar = Model.getMyVar();
  $scope.sentence= Model.getSentence($routeParams.sentenceId).words.sort(function() { return .5 - Math.random(); }); //någon härlig random-funktion, ordningen blir dock samma varje gång
  $scope.allSentences = Model.getAllSentences();
  $scope.mySentences = Model.getMySentence();

  $scope.setMySentence = function(word){
    Model.setMySentence(word);
  };

  $scope.clearMySentence = function(){
    Model.clearMySentence();
  };

  $scope.checkMySentence = function(){
    isCorrect=Model.checkMySentence();

    if (isCorrect) {
      $scope.fail = true; //göm fail-alert
      $scope.success = false; //visa success-alert
      //$location.url('/sentence/2');  Använd för att gå till nästa level?? 2an kan ju ersättas med en counter t.ex.
      
    } else {
      $scope.success = true;
      $scope.fail = false;
    }

    $scope.alerts = false; //visa alerts 
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

  $scope.handleDrop = function(item, bin) {
    //alert('Item ' + item + ' has been dropped into ' + bin);
    Model.setMySentence(item);
    console.log(Model.getMySentence.length);
  }

});