var testForm = angular.module("testForm", []);

testForm.controller("formCtrl", ["$scope", function ($scope) {
	$scope.userInfo = {
		email: "hejianbo2220@hotmail.com",
		password: "123456",
		autoLogin: true
	};
	$scope.getFormData = function () {
		console.log($scope.userInfo);
		alert("邮箱: " + $scope.userInfo.email + "\n密码: " + $scope.userInfo.password + "\n自动登录: " + $scope.userInfo.autoLogin);
	};
	$scope.setFormData = function () {
		$scope.userInfo = {
			email: "112526920@qq.com",
			password: "654321",
			autoLogin: false
		};
	};
	$scope.resetFormData = function () {
		$scope.userInfo = {
			email: "",
			password: "",
			autoLogin: false
		};
	};
}]);