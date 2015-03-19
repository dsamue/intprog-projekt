projectApp.controller('progressbarCtrl', function($scope, Model) {
	$scope.score = Model.getScore();
});