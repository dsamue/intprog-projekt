// Model
projectApp.factory('Model', function ($resource) {
 
	// Creating object that will hold application data
	var mySentence = [];  		  //Lagra dom valda orden i appens pratbubble
	var correctSentence = [];	  //Behlvs eftersom det inte räcker med att bara kolla att ordningsföljden är korrekt i mySentence
	var boxWords = [];			  //All words to choose from
	var gameScore = 0;
	var gameLevel = 1;
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

	// Set correctSentence
	this.setCorretSentence = function(sentence) {   
		correctSentence = [sentence];
	}

	// Add choosen word from app to mySentence
	this.setMySentence = function(word) {   
		mySentence.push(word);
	}

	// Get mySentence
	this.getMySentence = function() {   
		return mySentence;
	}

	// Clear mySentence
	this.clearMySentence = function() {   
		mySentence.splice(0,mySentence.length);
	}

	// Compare mySentence with correctSentence
	this.checkMySentence = function() {   

		//numOfWords = correctSentence.words.length;       //Än så länge har vi inte lagt till någon mening i correctSentence
		numOfWords = 4;

		if (mySentence.length != numOfWords){
			return false
		}

		else {
			for (i=0; i<mySentence.length; i++){
				if(mySentence[i].position != i+1){
					return false
				}
			}
			return true
		}
	}

	this.getAllSentences = function() {
		return sentences;
	}

	this.getSentence = function(id) {
		for (i=0; i<sentences.length; i++){
			if(sentences[i].id == id){
				sentence = sentences[i];
				return sentence
			}
		}
	}



	// 'Database' for all sentences, corresponding words and audiofiles 
	var sentences = [{

		'id':'1',
		'sweSentence':'Min katt är gul',
		'audiofile':'mening1.mp3',
		'words':[{
			'id':'1',
			'engWord':'my',
			'sweWord': 'min',
			'position':'1', 
		 	'audiofile':'my.mp3',
			},{
			'id':'2',
			'engWord':'cat',
			'sweWord': 'katt',
			'position':'2', 
		 	'audiofile':'cat.mp3',

			},{
			'id':'3',
			'engWord':'is',
			'sweWord': 'är',

			'position':'3', 
		 	'audiofile':'is.mp3',
			},{
			'id':'4',
			'engWord':'yellow',
			'sweWord': 'gul',
			'position':'4', 
		 	'audiofile':'yellow.mp3',
			}]
		},{

		'id':'2',
		'sweSentence':'Min hund är svart',
		'engSentence':'My dog is black',
		'audiofile':'mening2.mp3',

		'words':[{
			'id':'5',
			'engWord':'my',
			'sweWord': 'min',
			'position':'1',
		 	'audiofile':'my.mp3',

			},{
			'id':'6',
			'engWord':'dog',
			'sweWord': 'hund',
			'position':'2', 
		 	'audiofile':'dog.mp3',
			},{
			'id':'7',
			'engWord':'is',
			'sweWord': 'är',
			'position':'3', 
		 	'audiofile':'is.mp3',
			},{
			'id':'8',
			'engWord':'black',
			'sweWord': 'svart',
			'position':'4', 
		 	'audiofile':'black.mp3',
			}]
		}
	];


  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});