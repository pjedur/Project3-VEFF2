"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", "pascalprecht.translate"])
.config(function ($routeProvider, $locationProvider, $translateProvider) {
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


	$translateProvider.useStaticFilesLoader({
		prefix: "lang_",
		suffix: ".json"
	});

	$translateProvider.use("is");


});
