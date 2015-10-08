var myApp = angular.module('myApp', []);
	myApp.controller('Ctrl', function ($scope){
	$scope.alert = function(){
		alert("I am an Angular Alert")
	}
	});