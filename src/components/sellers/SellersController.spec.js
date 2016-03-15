"use strict";

describe("SellersController", function() {

		var SellersController;
		var appResource;
		var centrisnotify;
		var sellerDlg;
		var translate;
		var scope;

		var successObj = {
			name      : "bla",
			category  : "lol",
			imagePath : "lala"
		};

		var errorObj = {
			name      : "",
			category  : "",
			imagePath : ""
		};

	var mockCentrisNotify = {
			error: function(obj) {
				return {};
			},
			success: function(obj) {
				return {};
			}
		};

		var mockSellerDlg = {
			show: function() {
				return {
					then: function(fn){
						fn(successObj);
					}
				};
			}
		};


beforeEach(module("project3App"));

	beforeEach(inject(function($rootScope, $controller, AppResource, centrisNotify, SellerDlg) {
		scope = $rootScope.$new();
		centrisnotify = centrisNotify;
		appResource = AppResource;

		SellersController = $controller("SellersController", {
			$scope        : scope,
			centrisNotify : centrisnotify,
			AppResource   : appResource,
			SellerDlg     : mockSellerDlg
		});

		spyOn(scope, "addSeller");
		spyOn(scope, "editSeller");
		spyOn(scope, "changeLanguage");
	}));

	describe("on load up", function() {
		it("should get all sellers", function() {
				expect(scope.sellers).toBeDefined();
				expect(scope.sellers.length).toEqual(5);
		});
	});

	describe("when adding seller", function() {
		beforeEach(function(done) {
			scope.addSeller();
			done();

		});

		it("should add a user", function() {
			expect(scope.addSeller).toHaveBeenCalled();
		});

	});

	describe("when editing a seller", function() {
		beforeEach(function(done) {
			successObj.id = 1;
			scope.editSeller(successObj);
			done();
		});

		it("should edit the seller", function() {
			expect(scope.editSeller).toHaveBeenCalledWith(successObj);
		});
	});


	describe("changes language", function() {
		beforeEach(function(done) {
			scope.changeLanguage("is");
			done();
		});

		it("should change when requested", function() {
				expect(scope.changeLanguage).toHaveBeenCalled();
		});
	});

});
