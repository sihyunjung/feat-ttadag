app.controller('appModuleController',['$scope','$location',function($scope, $location) {
	$scope.appClickEvent = function() {
		alert('이동해요...');
		$location.url('/account/signIn');
	};

}]);

