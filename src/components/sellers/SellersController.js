"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, $translate, $location, SellerDlg, centrisNotify) {
	$scope.user = "";
	$scope.lang = "sadas";


	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
	}).error(function() {
		centrisNotify.error("sellers.Messages.LoadFailed");
	});



	$scope.addSeller = function addSeller() {
		SellerDlg.show().then(function(seller) {
			AppResource.addSeller(seller).success(function(data) {
					$scope.newSeller = data;
					centrisNotify.success("sellers.Messages.SaveSucceeded");
			}).error(function() {
				centrisNotify.error("sellers.Messages.SaveFailed");
			});
		});
	};


	$scope.editSeller = function editSeller(seller) {
		SellerDlg.show(seller).then(function() {
			if(seller.name === undefined){
				centrisNotify.error("sellers.Message.EditFailed");
			}
			AppResource.updateSeller(parseInt(seller.id), seller).success(function(data) {
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
