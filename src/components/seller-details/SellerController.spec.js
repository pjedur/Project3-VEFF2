"use strict";

describe("SellerController should be unit tested here", function() {

	beforeEach(module("project3App"));
	var SellerController, scope;

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.new();
		SellerController = $controller("SellerController", {
			$scope : scope
		});
	}));

	xit("should get seller details", function() {

	});

	xit("should set centrisnotify if error getting sellers", function() {

	});

	xit("should add a new valid product object", function() {

	});

	xit("should notify when adding an invalid product object", function() {

	});

	xit("should change language when requested", function() {

	});

	xit("should show modal window when adding/editing a product", function() {

	});

});
