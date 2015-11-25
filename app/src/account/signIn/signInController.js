app.controller('signInController',['$scope', function($scope) {
	$scope.resetPasswd = function() {
		alert('신규 비밀번호를 적용 할 수 있도록 메일을 보냈습니다.');
	};
	$scope.signIn = function() {
		alert('로그인 되었어요~~');
	}
	$scope.FBSignIn = function() {
		alert('페이스북 로그인~');
	}

}])
.controller('yoobinController',['$scope', function($scope) {
	$scope.email = {
		text : ''
	};
	$scope.password= {
		text : ''
	};

}]);