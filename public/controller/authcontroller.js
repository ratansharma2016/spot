app.controller('authController',['$scope','$http','$location','$rootScope','$localStorage',
	function($scope,$http,$location,$rootScope,$localStorage){

	$scope.user={username:'',password:''};
	$scope.error_message='Please Enter Username and Password';

	$scope.login=function(){
		
		$http.post('/auth/login',$scope.user).success(function(data){
			$localStorage.authenticated=true;
			$rootScope.authenticated=$localStorage.authenticated;
			$localStorage.current_user=data.user.username;
			$location.path('/');
		});
	};
	$scope.signup=function(){
			$http.post('/auth/signup',$scope.user).success(function(data){
				console.log(data);
			$localStorage.authenticated=true;
			$rootScope.authenticated=$localStorage.authenticated;
			$localStorage.current_user=data.user.username;
			$location.path('/');
		});
	};

	$scope.signout=function(){
			$http.get('/auth/signout').success(function(){
			$localStorage.authenticated=false;
			$rootScope.authenticated=$localStorage.authenticated;
			$location.path('/');
		});
	};
}]);