var testCtrl = angular.module("testCtrl", []);

testCtrl.controller("example1Ctrl", ["$scope", function ($scope) {
	$scope.greeting = {
		text: "Hello"
	};
}]);

testCtrl.controller("example4GreetCtrl", ["$scope", "$rootScope", function ($scope, $rootScope) {
	$scope.name = "rootScope";
	$rootScope.department = "Angular";
}]);

testCtrl.controller("example4ListCtrl", ["$scope", function ($scope) {
	$scope.names = ["Igor", "Misko", "Vojta"];
}]);

testCtrl.controller("example5Ctrl", ["$scope", function ($scope) {
	$scope.count = 0;
	$scope.$on("MyEvent", function () {
		$scope.count++;
	});
}]);

testCtrl.controller("example6Ctrl", ["$scope", function ($scope) {
	$scope.color = "red";
	$scope.setGreen = function () {
		$scope.color = "green";
	};
}]);

testCtrl.controller("example7Ctrl", ["$scope", function ($scope) {
	$scope.text = "This is default text";
	$scope.isGreen = false;
	$scope.isRed = false;
	$scope.setGreen = function () {
		$scope.text = "This is green text";
		$scope.isGreen = true;
		$scope.isRed = false;
	};
	$scope.setRed = function () {
		$scope.text = "This is red text";
		$scope.isGreen = false;
		$scope.isRed = true;
	}
}]);

testCtrl.controller("example8Ctrl", ["$scope", function ($scope) {
	$scope.flag = false;
	$scope.toggleText = function () {
		$scope.flag = !$scope.flag;
	};
}]);