projectApp.controller('progressbarCtrl', function ($scope, Model) {

  $scope.score = Model.getScore();

  $scope.procent = (Model.getScore() / 120) * 100;

});