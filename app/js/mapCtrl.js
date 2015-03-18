// Map controller 
projectApp.controller('MapCtrl', function ($scope, Model){

	$scope.gameData = Model.getGameData();

});