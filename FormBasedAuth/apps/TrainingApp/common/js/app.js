var trainingApp = angular.module('TrainingApp', []);

trainingApp.directive('homePage', function(){
	return {
		restrict: 'E', 
		templateUrl: 'home-page.html'
	};
});

trainingApp.directive('loginPage', function(){
	return {
		restrict: 'E', 
		templateUrl: 'login-page.html'
	};
});

trainingApp.directive('contentPage', function(){
	return {
		restrict: 'E', 
		templateUrl: 'content-page.html'
	};
});