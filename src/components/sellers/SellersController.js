"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $location) {

	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	$scope.user = "";

	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
	}).error(function() {
		$scope.errorMessage = "Could not get sellers";
	});


});
