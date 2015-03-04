var GameViewController = function(view, model) {

	view.soundButton.click(function() {

		var sound = model.getSentence().audiofile;

		//sound.play();

		console.log(sound);
	});
};