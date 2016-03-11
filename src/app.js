"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices"])
.config(function ($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		controller: "SellersController",
		templateUrl: "components/sellers/index.html"
	}).when("/seller/:sellerID", {
		controller: "SellerController",
		templateUrl: "components/seller-details/index.html"
	});

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
});
