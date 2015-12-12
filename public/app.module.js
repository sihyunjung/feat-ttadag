/**
 * @description AngularJS의존성 앱 init관련 부분설정
 * 1. 이부분에서 app을 관련된 데이터를 관리할수있는 싱글톤 객체가 필요할거같은데... 일단 고려
 * 2. 1번에서 싱긅톤 객체를 고려하여 로그인 회원관련 설정부분을 통신을 할수있는 객체를 마찬가지로 고려..
 * 3. 로그인 라이브러리 혹은 로직을 별도로 빼내어 최초 진입 할경우에만 라이브러리를 사용하고 그이외에는 checkAuth같은 개념으로 로그인을 항상
 * 체크 할수 있는 뭔가가 필요할듯함... 라이브러리자체는 factory 로 할지 service 로 할지.;;;
 * 4. 위 사항을 고려하여 의존성을 설정....
 */

angular.module('appModule', [])
.controller('appModuleController', ['$scope',function ($scope) {
	/**
	 * @description 이늠아가 전체적인 app 기본 로직을 담당할 녀석인데...
	 * 추후 header 와 footer 를 의존하는 형태로....
	 */
	//controller? factory? service?...
	console.log('app init!!!!');
}]);
//
var app = angular.module('ttadag-service-app',['appModule', 'ngRoute']);
///**
// * @description
// */
//app.service('appService', function() {
//	return function(){
//		console.log('appService');
//	}
//})
//.controller('appController', ['appService', function() {
//
//}]);