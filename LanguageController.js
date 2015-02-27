public class LanguageController
{
   private LanguageModel model;
   private LanguageView view;

   public LanguageController(LanguageModel model, LanguageView view)
   {
      	this.model = model;
      	this.view = view;
   }
   public int getScore()
   {
		return model.getScore();
   }
   

}