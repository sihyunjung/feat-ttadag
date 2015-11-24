app.controller('signInController',['$scope', function($scope) {
	$scope.resetPasswd = function() {
		alert('신규 비밀번호를 적용 할 수 있도록 메일을 보냈습니다.');
	};

}])
.controller('yoobinController',['$scope', function($scope) {
	$scope.email = {
		text : ''
	};

}]);