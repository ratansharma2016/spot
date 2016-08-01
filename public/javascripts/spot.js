//Main angular module declaration

var app = angular.module('App', ['ui.router','ngResource','ngStorage','angular.filter'])
.run(['$rootScope','$http','$localStorage',function($rootScope,$http,$localStorage){
	$rootScope.authenticated=$localStorage.authenticated;
	$rootScope.current_user=$localStorage.current_user;
	$rootScope.user_Id=$localStorage.user_Id;
	$rootScope.btn=false;
	$rootScope.uptId='';
	$rootScope.signout=function(){
	$rootScope.authenticated=false;
	$rootScope.current_user='';
	$http.get('/auth/signout').success(function(){
		$localStorage.authenticated=false;
		$localStorage={};
	});
	};
}]);
//For creating pretty URLs

app.config(function($locationProvider) {
  	if(window.history && window.history.pushState){
    $locationProvider.html5Mode(true);
  }
});