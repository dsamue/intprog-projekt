// Map controller 
projectApp.controller('MapCtrl', function ($scope, Model){

	$scope.level = Model.getLevel();
	
	//Den här tycker jag känns oklar? Borde inte uppdateringen kunna ske automatiskt när man använder angular?  /David
	$scope.$watch('level', function(newValue, oldValue)
		{ if (newValue != oldValue)
			{
			moveCharacter();
			}
		});


//metod som uppdaterar figurens position 
	$scope.moveCharacter = function(){
		console.log($scope.level);

		if ($scope.level == 2){
			$("#character").animate({'left' : "70px"});
			$("#character").animate({'top' : "200px"});
		}

		else if ($scope.level == 3){
			$("#character").animate({'left' : "60px"});
			$("#character").animate({'top' : "220px"});
		}

		else if ($scope.level == 4){
			$("#character").animate({'left' : "40px"});
			$("#character").animate({'top' : "270px"});
		}	

		else{
			$("#character").animate({'left' : "180px"});
			$("#character").animate({'top' : "80px"});
		}	
	};
});