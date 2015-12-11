app.controller('accountController', ['$scope', function($scope) {


}]).directive('header', function(){
	return {
		link : function(scope, el, attrs) {
			//console.log('scope : ', scope, 'el : ', el, 'attr : ', attrs);
		},
		templateUrl : function() {
			return '/src/header.html';
		}
	}
});



//.directive('loginToolbar', ['security', function(security) {
//	var directive = {
//		templateUrl: 'security/login/toolbar.tpl.html',
//		restrict: 'E',
//		replace: true,
//		scope: true,
//		link: function($scope, $element, $attrs, $controller) {
//			$scope.isAuthenticated = security.isAuthenticated;
//			$scope.login = security.showLogin;
//			$scope.logout = security.logout;
//			$scope.$watch(function() {
//				return security.currentUser;
//			}, function(currentUser) {
//				$scope.currentUser = currentUser;
//			});
//		}
//	};
//	return directive;
//}]);