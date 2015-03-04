$(function() {
	//We instantiate our model
	var model = new myModel();

	//And create the needed controllers and views
	var gameView = new GameView($('.gameView'), model);
	var gameViewController = new GameViewController(gameView, model);

});
