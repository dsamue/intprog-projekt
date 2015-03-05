// Model
projectApp.factory('Model', function ($resource) {
 
	// Creating object that will hold application data
	var mySentence = [];  		  //Lagra dom valda orden i appens pratbubble
	var boxWords = [];			  //All words to choose from
	var gameScore = 0;
	var gameLevel = 2;			//testning borde iof börja på 1
	var myVar = 1; 				 //För test


	// Creating functions
	// För test
	this.setMyVar = function(num) {   
		myVar = num;
	}

	// För test
	this.getMyVar = function() {   
		return myVar;
	}


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
		mySentence.push(wordId);
		this.checkMySentence();
	}

	// Compare mySentence with correctSentence
	this.checkMySentence = function() {   
		// check if words position is in order
		var sentence = this.getSentence(gameLevel).words;

		for (key in mySentence) {
			if (mySentence[key] != sentence[key].position) {
				return false;
			}
		}
		return true;
	}

	this.getAllSentences = function() {
		return sentences;
	}

	//Return sentence for the level you're on
	this.getSentence = function(id) {
	  	for(key in sentences){
			if(sentences[key].id == id) {
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


  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});