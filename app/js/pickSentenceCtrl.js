// SentenceController 
projectApp.controller('PickSentenceCtrl', function ($scope, Model) {

  $scope.allSentences = Model.getAllSentences();


  $scope.setCorrectSentence = function(sentence){
    Model.setCorretSentence(sentence);
  };

});
// Tabcontroller
projectApp.controller('Tabcontroller', function(){
	this.tab = 1;
	
	this.selectTab = function(setTab){
		
		this.tab = setTab;
	};
	this.isSelected = function(checkTab){
		
		return this.tab === checkTab;
	};
});




