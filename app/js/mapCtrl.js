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
			$("#character").animate({marginLeft : "-=50px"});
			$("#character").animate({marginTop : "+=120px"});
		}

		/*else if ($scope.level == 3){
			$("#character").animate({'marginLeft' : "40px"});
			$("#character").animate({'marginTop' : "70px"});
		}

		else if ($scope.level == 4){
			$("#character").animate({'marginLeft' : "80px"});
			$("#character").animate({'marginTop' : "100px"});
		}*/
	

		else{
			$("#character").animate({'marginLeft' : "40px"});
			$("#character").animate({'marginTop' : "40px"});
		}
	};
});