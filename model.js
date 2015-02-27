Object constructor
var myModel = function() {
 
	// Creating object that will hold application data
	var correctSentence = [];     //Skulle kunna vara en lista med varje ljuds id i rätt ordning
	var mySentence = [];  		  //Kan matchas mot "correct sentence"
	var gameScore = 0;


	// Creating functions
	this.setScore = function(num) {   
		gameScore=gameScore+num;
		notifyObservers();
	}

	//Get number of guests
	this.getScore = function() {    //funkar
		return numberOfGuests;


	// 'database' for all words and corresponding sound (Kanske bättre med hela meningar och dess tillhörande ord?)
	var words = [{
		'id':1,
		'word':'Katt',
		'audiofile':'ljud.wav',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",

		},{
		'id':2,
		'word':'Hund',
		'audiofile':'ljud2.wav',
		},
	];



	// Creating observer
	var observers = [];

	// Add views as observers
	this.addObserver = function(observer)  
	{
		observers.push(observer);
	}

	// Call update function in each view when changes has been made in model
	var notifyObservers = function(arg) {
		for(var i=0; i<observers.length; i++) 
		{
			observers[i].update(arg);
		}	
	}
}