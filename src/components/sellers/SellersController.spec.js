"use strict";

describe("SellersController should be unit tested here", function() {
	// TODO: add beforeEach/describe/it/etc. functions as appropriate!

	beforeEach(module("project3App"));
	var SellersController, scope;

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.new();
		SellersController = $controller("SellersController", {
			$scope : scope
		});
	}));

	xit("should get all sellers", function() {

	});

	xit("should set centrisnotify if error getting sellers", function() {

	});

	xit("should add a new valid seller object", function() {

	});

	xit("should notify when adding an invalid seller object", function() {

	});

	xit("should change language when requested", function() {

	});

	xit("should show modal window when adding/editing a user", function() {

	});

});
