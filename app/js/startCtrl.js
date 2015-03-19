// SentenceController 
projectApp.controller('StartCtrl', function ($scope, Model) {

    $scope.resetGame = function(sentence){
    Model.resetGameData();
  };
});


/* tidigare kod

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


*/

