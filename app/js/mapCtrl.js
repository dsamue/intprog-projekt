// Map controller 
projectApp.controller('MapCtrl', function ($scope, Model){

	$scope.level = Model.getLevel();
	
	//Den här tycker jag känns oklar? Borde inte uppdateringen kunna ske automatiskt när man använder angular?  /David
	/*$scope.$watch('level', function(newValue, oldValue)
		{ if (newValue != oldValue)
			{
			moveCharacter();
			}
		});*/


//metod som uppdaterar figurens position 
	$scope.moveCharacter = function(){
		if ($scope.level == 2){
			$("#character").animate({'marginLeft' : "120px"});
			$("#character").animate({'marginTop' : "150px"});
		}

		else if ($scope.level == 3){
			$("#character").animate({'marginLeft' : "220px"});
			$("#character").animate({'marginTop' : "100px"});
		}

		else if ($scope.level == 4){
			$("#character").animate({'marginLeft' : "220px"});
			$("#character").animate({'marginTop' : "35px"});
		}

		else if ($scope.level == 5){
			$("#character").animate({'marginLeft' : "390px"});
			$("#character").animate({'marginTop' : "35px"});
		}

		else if ($scope.level == 6){
			$("#character").animate({'marginLeft' : "390px"});
			$("#character").animate({'marginTop' : "170px"});
		}		

		else{
			$("#character").animate({'marginLeft' : "40px"});
			$("#character").animate({'marginTop' : "40px"});
		}	
	};
});