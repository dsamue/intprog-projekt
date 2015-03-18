// Controller 

projectApp.controller('SentenceGameCtrl', function ($scope, Model, $routeParams, $location, $route) {

  $scope.alerts = true; //sätter hide=true på alerts

  $scope.sentence = Model.getSentence($routeParams.sentenceId).words.sort(function() { return .5 - Math.random(); }); //någon härlig random-funktion, ordningen blir dock samma varje gång
  $scope.allSentences = Model.getAllSentences();
  $scope.mySentence = Model.getMySentence();
  $scope.score = Model.getScore();


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
      $scope.success = false; //visa success-alert
      Model.setScore(100);
      Model.clearMySentence();
    } 

    else {
      $scope.success = true;
      $scope.fail = false;
      Model.setScore(-20);
    }

    $scope.alerts = false; //visa alerts*/ 
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

  $scope.hideAlerts = function(){
    $scope.alerts = true;
  };

  $scope.setMyVar = function(number){
    Model.setMyVar(number);
  };

  $scope.getMyVar = function() {
    return Model.getMyVar();
  };

  //Ev.för drag/drop. Kolla mer vid behov. Hur ska dom skrivas? $scope.accept = func...? 
  /*$scope.dragControlListeners = {
    accept: function (sourceItemHandleScope, destSortableScope) {return boolean};//override to determine drag is allowed or not. default is true.
    itemMoved: function (event) {}; //Do what you want}
    orderChanged: function(event) {}; //Do what you want}
    //containment: '#board'//optional param.
  };*/
});