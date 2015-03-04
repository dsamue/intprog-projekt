var GameView = function(container, model) {
	this.wordList = container.find('.word-list');
	this.soundButton = container.find('#soundButton');

	var words = model.getSentence().words;

	var text = "";
	for (key in words) {
		//måste ändra ordningen...
		text += "<li id='"+words[key].id+"'>"+words[key].sweWord+"</li>";	
	}

	this.wordList.html(text);
};