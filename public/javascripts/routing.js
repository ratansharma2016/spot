//ui routing is being used to route the urls
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("");
	$stateProvider
.state('spot', {
      url: "/",
      templateUrl: "htmls/main.html",
      controller:'authController'
    })
    .state('login', {
      url: "/login",
      templateUrl: "htmls/login.html",
      controller:'authController' 
      })
    .state('signup', {
      url: "/signup",
      templateUrl: "htmls/register.html",
      controller:'authController' 
      })
    .state('table', {
      url: "/table",
      templateUrl: "htmls/table.html",
      controller:'empController' 
      })
    
}]);