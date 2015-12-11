var app = angular.module('ttadag-service-app',['app', 'ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller : 'appModuleController',
			templateUrl : '/src/introLoading/introLoadingView.html'
		});
});
