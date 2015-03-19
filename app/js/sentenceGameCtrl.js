// Controller for sentence game
projectApp.controller('SentenceGameCtrl', function ($scope, Model, $routeParams, $location, $route) {

  $scope.alerts = true; //sätter hide=true på alerts
  $scope.engSentence = Model.getSentence($routeParams.sentenceId).engSentence;
  $scope.sentence = Model.getSentence($routeParams.sentenceId).words.sort(function() { return .5 - Math.random(); }); //någon härlig random-funktion, ordningen blir dock samma varje gång
  $scope.mySentence = Model.getMySentence();

  $scope.setMySentence = function(word){
    Model.setMySentence(word);
  };

  $scope.clearMySentence = function(){
    $scope.sentence = $scope.sentence.concat($scope.mySentence);  //lägger till valda ord i wordbox igen om man rensar orden
    Model.clearMySentence();
  };


  $scope.checkMySentence = function(){ 
    Model.setCorrectSentence($routeParams.sentenceId);    
    isCorrect = Model.checkMySentence();

    if (isCorrect) {
      $scope.fail = true; //göm fail-alert
      $scope.finish = true; //göm finish-alert
      $scope.success = false; //visa success-alert
      Model.setScore(100);
    } 

    else {
      $scope.fail = false;
      $scope.success = true;
      $scope.finish = true;
      Model.setScore(-20);
    }

    $scope.alerts = false; //visa alerts
  };

  $scope.levelUp = function (){

    Model.clearMySentence();                      // clearMySenctence() körs när du väljer att gå till nästa level..
    Model.setLevel(1);                            //plussar en level för varje avklarad mening
    var level = Model.getLevel()
    
    if (level = 7){
      Model.setLevel(-1); 
      $scope.finish = false; //visa finish-alert
      $scope.fail = true; //göm fail-alert
      $scope.success = true; //göm fail-alert
    }

    else{
      var level = Model.getLevel().toString();
      $location.url('/sentence/'+level);
      $scope.finish = true; //göm finish-alert
    }

  };

  $scope.backToStart = function (){
      $location.url('/start');
      $route.reload();
      Model.resetGameData();
  };

  $scope.playSound = function(audiofile){
    var audio = new Audio('audio/'+audiofile);
	  audio.play();
  };

  $scope.playSentence = function(){
    var audio = new Audio('audio/'+sentence.audiofile);
    audio.play();
  };

  $scope.hideAlerts = function(){
    $scope.alerts = true;
  };

});