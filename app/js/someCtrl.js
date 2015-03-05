// Controller 
projectApp.controller('SomeCtrl', function ($scope, Model) {

	$scope.myVar = Model.getMyVar();
	//$scope.sentences = Model.getAllSentences();
	$scope.myScore = Model.getScore();

	var level = Model.getLevel();

	$scope.sentence = Model.getSentence(level).words;

	$scope.myList = {
		words: [$scope.sentence[1]]
		};

	//  det jag försöker göra http://vitalets.github.io/checklist-model/

	console.log($scope.myList);

	/*$scope.ondrop = function (li) {
		var wordId = li.attr('id');
		Model.setMySentence(wordId);
	} */

	/*$scope.click = function(word) {
		$scope.myList.push(word);
		console.log($scope.myList);
	}*/

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