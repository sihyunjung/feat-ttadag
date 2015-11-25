app.controller('signInController',['$scope', '$location', function($scope, $location) {
	$scope.resetPasswd = function() {
		alert('신규 비밀번호를 적용 할 수 있도록 메일을 보냈습니다.');
	};
	$scope.signIn = function(user) {
		console.log(user);
		alert('login try...');
		$location.url('/account/signUp');
	}
	$scope.FBSignIn = function(user) {

		alert('페이스북 로그인~ 일단 회원가입으로 보냄..');
		//user.user_email
		//user.user_password
		$location.url('/account/signUp');
	}
	$scope.accountCheck = function(info) {
		if (!!info) {
			$location.url('/account/signUp');
		}
	}

}])
.controller('signInFormController',['$scope', function($scope) {


}]);