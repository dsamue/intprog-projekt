// Controller 
projectApp.controller('SomeCtrl', function ($scope, Model) {

	$scope.myVar = Model.getMyVar();
	//$scope.sentences = Model.getAllSentences();
	$scope.myScore = Model.getScore();

	var level = Model.getLevel();

	$scope.sentence = Model.getSentence(level);

	$scope.myList = [];

	console.log($scope.myList);

	$scope.setMyVar = function(number){
		Model.setMyVar(number);
	}

	$scope.getMyVar = function() {
		return Model.getMyVar();
	}


	$scope.random = function() {
        return 0.5 - Math.random();
    }

});