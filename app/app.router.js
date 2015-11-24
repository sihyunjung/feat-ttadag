var app = angular.module('ttadag-service-app',['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller : 'app.module.js',
			templateUrl : 'index.html'
		})
		.when('/account/signIn', {
			controller : 'signInController',
			templateUrl : '/src/account/signIn/signInView.html'
		})
		.when('/account/signUp', {
			controller : 'signUpController',
			templateUrl : '/src/account/signUp/signUpView.html'
		});
});
