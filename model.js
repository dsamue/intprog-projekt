//Object constructor
var myModel = function() {
 
	// Creating object that will hold application data
	var mySentence = [];  		  //Lagra dom valda orden i appens pratbubble
	var boxWords = [];			  //All words to choose from
	var gameScore = 0;
	var gameLevel = 1;


	// Creating functions
	// Set gameScore
	this.setScore = function(num) {   
		gameScore = gameScore+num;
		notifyObservers();
	}

	// Get gameScore
	this.getScore = function() {   
		return gameScore;
	}

	// Set gameLevel
	this.setLevel = function(num) {   
		gameScore = num;
		notifyObservers();
	}

	// Get gameLevel
	this.getLevel = function() {   
		return gameLevel;
	}

	// Add choosen words from app to mySentence
	this.setMySentence = function(wordId) {   

	}

	// Compare mySentence with correctSentence
	this.checkMySentence = function() {   
		// check if words position is in order
		return true
	}

	this.getSentence = function() {
	  	for(key in sentences){
			if(sentences[key].id == gameLevel) {
				return sentences[key];
			}
		}
	}



	// 'Database' for all sentences, corresponding words and audiofiles 
	var sentences = [{

		'id':'1',
		'sweSentence':'Min katt är gul',
		'engSentence':'My cat is yellow',
		'audiofile':'ljud.wav',
		'words':[{
			'id':'1',
			'engWord':'my',
			'sweWord': 'min',
			'position':'1' ,
		 	'audiofile':'min.wav'
			},{
			'id':'2',
			'engWord':'cat',
			'sweWord': 'katt',
			'position':'2' ,
		 	'audiofile':'katt.wav'
			},{
			'id':'3',
			'engWord':'is',
			'sweWord': 'är',
			'position':'3' ,
		 	'audiofile':'är.wav'
			},{
			'id':'4',
			'engWord':'yellow',
			'sweWord': 'gul',
			'position':'4' ,
		 	'audiofile':'gul.wav'
			}]
		},{

		'id':'2',
		'sweSentence':'Min hund är svart',
		'engSentence':'My dog is black',
		'audiofile':'ljud2.wav',
		'words':[{
			'id':'5',
			'engWord':'my',
			'sweWord': 'min',
			'position':'1',
		 	'audiofile':'min.wav'
			},{
			'id':'6',
			'engWord':'dog',
			'sweWord': 'hund',
			'position':'2' ,
		 	'audiofile':'hund.wav'
			},{
			'id':'7',
			'engWord':'is',
			'sweWord': 'är',
			'position':'3', 
		 	'audiofile':'är.wav'
			},{
			'id':'8',
			'engWord':'black',
			'sweWord': 'svart',
			'position':'4' ,
		 	'audiofile':'svart.wav'
			}]
		}
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