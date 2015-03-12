// We setup the main Angular model that we will use for our application
// Good Angular practice is to organize your code in different modules, 
// for instance, one module per feature. However, since our App is
// simple we will keep all the code in the "dinnerPlanner" module
//
// Notice the 'ngRoute' and 'ngResource' in the module declaration. Those are some of the core Angular
// modules we are going to use in this app. If you check the index.html you will
// also see that we included separate JavaScript files for these modules. Angular
// has other core modules that you might want to use and explore when you go deeper
// into developing Angular applications. For this lab, these two will suffice.
var projectApp = angular.module('projectApp', ['ngRoute','ngResource']);


// Here we configure our application module and more specifically our $routeProvider. 
// Route provider is used to tell angular to load a specific partial (view) for an individual
// specific address that is provided in the browser. This enables us to change the browser address
// even if we are not reloading the page. We can also use back and forward button to navigate between
// our screens. The paths that you use in the conditions of $routeProvider will be shown in the address
// bar after the # sign. So, for instance, the home path will be 'http://localhost:8000/#/home'.
//
// In index.html you will notice the <div ng-view></div> tag. This is where the specific view sill be
// loaded. For instance when you go to http://localhost:8000/, since your path does not match any
// of the when conditions, the otherwise condition is triggered and tells the app to redirect to '/home'.
// The '/home' condition then loads the 'partials/home.html'. 
//
// Apart from specifying the partial HTML that needs to be loaded with your app, you can also specify which
// controller should be responsible for that view. In the controller you will setup the initial data or 
// access the data from the model and create the methods that you will link to events. Remember, controllers 
// can be nested, so you can have one controller responsible for the whole view, but then another one for 
// some sub part of the view. In such way you can reuse your controller on different parts of the view that 
// might have similar logic.
//
// In some cases we want the path to be variable (e.g. contain the dish id). To define the variable part of 
// the path we use the ":" sign. For instance, our '/dish/:dishId' will be triggered when we access 
// 'http://localhost:8000/#/dish/12345'. The 12345 value will be stored in a dishId parameter, which we can
// then access through $routeParams service. More information on this in the dishCtrl.js 
projectApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.

      when('/start', {
        templateUrl: 'partials/pickSentence.html',
        controller: 'PickSentenceCtrl'                      //Varför får jag inte denna att funka med pickSentenceController??
      }).
      when('/sentence/:sentenceId', {
        templateUrl: 'partials/sentenceGame.html',
        controller: 'SentenceGameCtrl'
      }).
      when('/test', {
        templateUrl: 'partials/map.html',           //test.html laddas in i sidan när url:en ändras till /test
        controller: 'MapCtrl'
      }).
      otherwise({
        redirectTo: '/start'

      });
  }]);


projectApp.directive('draggable', function() {
  return function(scope, element) {
    // this gives us the native JS object
    var el = element[0];
    
    el.draggable = true;
    
    el.addEventListener(
      'dragstart',
      function(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('Text', this.id);
        this.classList.add('drag');
        return false;
      },
      false
    );
    
    el.addEventListener(
      'dragend',
      function(e) {
        this.classList.remove('drag');
        return false;
      },
      false
    );
  }
});

projectApp.directive('droppable', function() {
  return {
    scope: {
      drop: '&',
      bin: '='
    },
    link: function(scope, element) {
      // again we need the native object
      var el = element[0];
      
      el.addEventListener(
        'dragover',
        function(e) {
          e.dataTransfer.dropEffect = 'move';
          // allows us to drop
          if (e.preventDefault) e.preventDefault();
          this.classList.add('over');
          return false;
        },
        false
      );
      
      el.addEventListener(
        'dragenter',
        function(e) {
          var item = document.getElementById(e.dataTransfer.getData('Text'));
          this.classList.add('over');
          /*if (this.id!='dropContainer'){
            this.parentNode.insertBefore(this, item);
          }*/   //Bara lite test. skulle kanske kunna användas för att placera objekt till vänster/höger om vi kollar muspositionen.
          return false;
        },
        false
      );
      
      el.addEventListener(
        'dragleave',
        function(e) {
          this.classList.remove('over');
          return false;
        },
        false
      );
      
      el.addEventListener(
        'drop',
        function(e) {
          // Stops some browsers from redirecting.
          if (e.stopPropagation) e.stopPropagation();
          
          this.classList.remove('over');
          
          var binId = this.id;
          var item = document.getElementById(e.dataTransfer.getData('Text'));

          //Funderade på om detta kunde vara något för att returnerna positionen.. men vete sjutton
          /*var position = 0;
          while( (item = item.previousSibling) != null ){
            position++;
          }*/
          
          //Ok, här är lite modifikation av koden för att man ska kunna byta plats på orden. Ordet hamnar då allid framför det man är över.
          if (binId === 'dropContainer') {
            this.appendChild(item);  
          }

          else {
            this.parentNode.insertBefore(item, this);
          }

          // call the passed drop function
          scope.$apply(function(scope) {
            var fn = scope.drop();
            if ('undefined' !== typeof fn) {            
              fn(item.id, binId);
            }
          });
          
          return false;
        },
        false
      );
    }
  }
});