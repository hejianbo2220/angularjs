var testApp = angular.module("testApp", ["ngRoute", "testCtrl", "testDirective"]);

testApp.config(["$routeProvider", function ($routeProvider) {
	$routeProvider

	.when("/example1", {
		templateUrl: "tpls/example1.html",
		controller: "example1Ctrl"
	})

	.when("/example2", {
		templateUrl: "tpls/example2.html"
	})

	.when("/example3", {
		templateUrl: "tpls/example3.html"
	})

	.when("/example4", {
		templateUrl: "tpls/example4.html"
	})

	.when("/example5", {
		templateUrl: "tpls/example5.html"
	})

	.when("/example6", {
		templateUrl: "tpls/example6.html",
		controller: "example6Ctrl"
	})

	.when("/example7", {
		templateUrl: "tpls/example7.html",
		controller: "example7Ctrl"
	})

	.when("/example8", {
		templateUrl: "tpls/example8.html",
		controller: "example8Ctrl"
	})

	.otherwise({
		template: "Default Template"
		// redirectTo: "/example1"
	})
}]);