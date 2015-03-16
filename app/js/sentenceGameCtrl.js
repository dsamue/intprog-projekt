// Controller 

projectApp.controller('SentenceGameCtrl', function ($scope, Model, $routeParams, $location, $route) {

  $scope.alerts= true; //sätter hide=true på alerts

  $scope.myVar = Model.getMyVar();
  $scope.sentence= Model.getSentence($routeParams.sentenceId).words.sort(function() { return .5 - Math.random(); }); //någon härlig random-funktion, ordningen blir dock samma varje gång
  $scope.allSentences = Model.getAllSentences();
  $scope.mySentence = [];//Model.getMySentence();
  $scope.testArray = ['1','2','3','4','5'];

  $scope.setMySentence = function(word){
    Model.setMySentence(word);
  };

  $scope.clearMySentence = function(){
    Model.clearMySentence();
    $route.reload();                      //Kanske inte supersnyggt men enkel lösning. Behöver vi ens knappen när man kan flytta orden?
  };

  $scope.checkMySentence = function(){   //Denna funkar ej nu. Modellen returnerar alltid true så länge
    isCorrect=Model.checkMySentence();

    if (isCorrect) {
      $scope.fail = true; //göm fail-alert
      $scope.success = false; //visa success-alert
    } 

    else {
      $scope.success = true;
      $scope.fail = false;
    }

    $scope.alerts = false; //visa alerts 
  };

  $scope.levelUp = function (){
    Model.setLevel(1);                            //plussar en level för varje avklarad mening
    var level = Model.getLevel().toString();
    $location.url('/sentence/'+level); 
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

  /*$scope.dragControlListeners = {
    accept: function (sourceItemHandleScope, destSortableScope) {return boolean}//override to determine drag is allowed or not. default is true.
    itemMoved: function (event) {//Do what you want},
    orderChanged: function(event) {//Do what you want},
    containment: '#board'//optional param.
};*/

});