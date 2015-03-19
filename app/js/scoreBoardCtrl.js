// Map controller 
projectApp.controller('ScoreBoardCtrl', function ($scope, Model){

	$scope.gameData = Model.getGameData();

});