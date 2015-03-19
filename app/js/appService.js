// Model
projectApp.factory('Model', function ($resource) {
 
	// Creating object that will hold application data
	var mySentence = [];  		 			 //Lagra dom valda orden i appens pratbubbla
	var correctSentence = {};	 			 //Behövs eftersom det inte räcker med att bara kolla att ordningsföljden är korrekt i mySentence
	var gameData = {score:0, level:1};   	 //för att kunna binda data mellan modell och flera olika controllers/views


	// Creating functions
	this.resetGameData = function() {   
		gameData.score = 0;
		gameData.level = 1;
	}

	this.getGameData = function() {   
		return gameData;
	}

	// Set gameScore
	this.setScore = function(num) {   
		gameData.score+= num;
	}

	// Get gameScore
	this.getScore = function() {   
		return gameData.score;
	}

	// Set gameLevel
	this.setLevel = function(num) {   
		gameData.level+=num;
	}

	// Get gameLevel
	this.getLevel = function() {   
		return gameData.level;
	}

	// Set correctSentence
	this.setCorrectSentence = function(id) {   
		correctSentence = this.getSentence(id);
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
		numOfWords = correctSentence['length'];       

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

	// Get all sentences	
	this.getAllSentences = function() {
		return sentences;
	}

	// Get specific sentence
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
		'engSentence':'My cat is yellow',
		'audiofile':'mening1.mp3',
		'length': 4,

		'words':[{
			'id':'1',
			'engWord':'my',
			'sweWord': 'min',
			'position':'1', 
		 	'audiofile':'min.mp3',
			},{
			'id':'2',
			'engWord':'cat',
			'sweWord': 'katt',
			'position':'2', 
		 	'audiofile':'katt.mp3',

			},{
			'id':'3',
			'engWord':'is',
			'sweWord': 'är',
			'position':'3', 
		 	'audiofile':'är.mp3',
			},{
			'id':'4',
			'engWord':'yellow',
			'sweWord': 'gul',
			'position':'4', 
		 	'audiofile':'gul.mp3',
			}]
		},{

		'id':'2',
		'sweSentence':'Min hund är svart',
		'engSentence':'My dog is black',
		'audiofile':'mening2.mp3',
		'length': 4,

		'words':[{
			'id':'5',
			'engWord':'my',
			'sweWord': 'min',
			'position':'1',
		 	'audiofile':'min.mp3',

			},{
			'id':'6',
			'engWord':'dog',
			'sweWord': 'hund',
			'position':'2', 
		 	'audiofile':'hund.mp3',
			},{
			'id':'7',
			'engWord':'is',
			'sweWord': 'är',
			'position':'3', 
		 	'audiofile':'är.mp3',
			},{
			'id':'8',
			'engWord':'black',
			'sweWord': 'svart',
			'position':'4', 
		 	'audiofile':'svart.mp3',
			}]
		}
	];


  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});