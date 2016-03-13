"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $translate, $location, SellerDlg, centrisNotify) {
	$scope.user = "";
	$scope.lang = "";


	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
	}).error(function() {
		centrisNotify.success("sellers.Messages.LoadFailed");
	});



	$scope.addSeller = function addSeller() {
		SellerDlg.show().then(function(seller) {
			AppResource.addSeller(seller).success(function(data) {
					$scope.newSeller = data;
					console.log("new seller : " + data);
					centrisNotify.success("sellers.Messages.SaveSucceeded");
			}).error(function() {
				centrisNotify.success("sellers.Messages.SaveFailed");
			});
		});
	};


	$scope.editSeller = function editSeller(seller) {
		SellerDlg.show(seller).then(function() {
			AppResource.updateSeller(parseInt(seller.id), seller).success(function(data) {
					console.log("changed seller now -> " + data);
					centrisNotify.success("sellers.Messages.EditSucceeded");
			}).error(function() {
				centrisNotify.error("sellers.Messages.EditFailed");
			});
		});
	};

	$scope.changeLanguage = function (langKey) {
	 $translate.use(langKey);
 };


});
