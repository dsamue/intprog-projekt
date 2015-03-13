// Map controller 
projectApp.controller('MapCtrl', function ($scope, Model){

$scope.dragControlListeners = {
    accept: function (sourceItemHandleScope, destSortableScope) {return boolean}//override to determine drag is allowed or not. default is true.
    itemMoved: function (event) {//Do what you want},
    orderChanged: function(event) {//Do what you want},
    containment: '#board'//optional param.
};
});