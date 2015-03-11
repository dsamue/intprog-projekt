// Controller 

projectApp.controller('SentenceGameCtrl', function ($scope, Model, $routeParams) {

  $(".alert").hide();

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
      $(".alert-success").show();
      $(".alert-success").animate({marginTop : "25%"});
    }

    else {
      $(".alert-danger").show();
      $(".alert-danger").animate({marginTop : "25%"});
    }
  };

  $scope.done = function() {
    $(".alert").hide(); 
    //lägga till gå vidare till next level? 
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