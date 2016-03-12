"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $location, SellerDlg) {

	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	$scope.user = "";
	$scope.lang = "";


	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
	}).error(function() {
		$scope.errorMessage = "Could not get sellers";
		//centris notify
	});



	$scope.addSeller = function addSeller() {
		SellerDlg.show().then(function(seller) {
			AppResource.addSeller(seller).success(function(data) {
					$scope.newSeller = data;
					console.log("new seller : " + data);
			}).error(function() {
				$scope.errorMessage = "Could not add seller";
				// centris notify
			});
		});
	};


	$scope.editSeller = function editSeller(seller) {
		SellerDlg.show(seller).then(function() {
			AppResource.updateSeller(parseInt(seller.id), seller).success(function(data) {
					console.log("changed seller now -> " + data);
			}).error(function() {
				console.log("could not update seller ");
				//centrisnotify
			});
		});
	};


});
