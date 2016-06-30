var testDirective = angular.module("testDirective", []);
testDirective.directive("hello", function () {
	return {
		restrict: "E",
		template: "<p>Hello, Directive</p>",
		replace: true
	}
});