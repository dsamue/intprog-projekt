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
		gameData.level += num;	   //I arbetsmasterns variant är num level, i min adderas num till nuvarande level
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
		'levelID' : '1',

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
		'length': 4,
		'levelID' : '1',

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
		},{

		'id':'3',
		'sweSentence':'Mina jordgubbar är röda',
		'engSentence':'My strawberries are red',
		'audiofile':'mening4.mp3',
		'length': 4,
		'levelID' : '2',

		'words':[{
			'id':'17',
			'engWord':'my',
			'sweWord': 'mina',
			'position':'1',
		 	'audiofile':'min.mp3',

			},{
			'id':'14',
			'engWord':'strawberries',
			'sweWord': 'jordgubbar',
			'position':'2', 
		 	'audiofile':'tiger.mp3', //ljudfil ska ändras. Jäkla tigerätare!!
			},{
			'id':'19',
			'engWord':'is',
			'sweWord': 'är',
			'position':'3', 
		 	'audiofile':'är.mp3',
			},{
			'id':'16',
			'engWord':'red',
			'sweWord': 'röda',
			'position':'4', 
		 	'audiofile':'mat.mp3',
			}]
		},{

		'id':'4',
		'sweSentence':'Min mat är god',
		'engSentence':'My food is tasty',
		'audiofile':'mening4.mp3',
		'length': 4,
		'levelID' : '2',

		'words':[{
			'id':'21',
			'engWord':'my',
			'sweWord': 'min',
			'position':'1',
		 	'audiofile':'min.mp3',

			},{
			'id':'22',
			'engWord':'food',
			'sweWord': 'mat',
			'position':'2', 
		 	'audiofile':'mat.mp3',
			},{
			'id':'23',
			'engWord':'is',
			'sweWord': 'är',
			'position':'3', 
		 	'audiofile':'är.mp3',
			},{
			'id':'24',
			'engWord':'tasty',
			'sweWord': 'god',
			'position':'4', 
		 	'audiofile':'god.mp3',
			}]
		},{

		'id':'5',
		'sweSentence':'Min båt är gul',
		'engSentence':'My boat is yellow',
		'audiofile':'mening5.mp3',
		'length': 4,
		'levelID' : '2',

		'words':[{
			'id':'25',
			'engWord':'my',
			'sweWord': 'min',
			'position':'1',
		 	'audiofile':'min.mp3',

			},{
			'id':'26',
			'engWord':'boat',
			'sweWord': 'båt',
			'position':'2', 
		 	'audiofile':'båt.mp3',
			},{
			'id':'27',
			'engWord':'is',
			'sweWord': 'är',
			'position':'3', 
		 	'audiofile':'är.mp3',
			},{
			'id':'28',
			'engWord':'yellow',
			'sweWord': 'gul',
			'position':'4', 
		 	'audiofile':'gul.mp3',
			}]
		},{

		'id':'6',
		'sweSentence':'Min bil är blå',
		'engSentence':'My car is blue',
		'audiofile':'mening4.mp3',
		'length': 4,
		'levelID' : '3',

		'words':[{
			'id':'33',
			'engWord':'my',
			'sweWord': 'min',
			'position':'1',
		 	'audiofile':'min.mp3',

			},{

			'id':'34',
			'engWord':'car',
			'sweWord': 'bil',
			'position':'2', 
		 	'audiofile':'car.mp3',
			},{
			'id':'35',
			'engWord':'is',
			'sweWord': 'är',
			'position':'3', 
		 	'audiofile':'är.mp3',
			},{
			'id':'36',
			'engWord':'blue',
			'sweWord': 'blå',
			'position':'4', 
		 	'audiofile':'blå.mp3',
			}]
		}
	];


  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});