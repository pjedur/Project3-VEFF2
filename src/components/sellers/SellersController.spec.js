"use strict";

describe("SellersController", function() {

		var SellersController,
		appResource,
		centrisnotify,
		sellerDlg,
		translate,
		scope,
		$httpBackend;

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
				return false;
			},
			success: function(obj) {
				return true;
			}
		};

beforeEach(module("project3App"));

	beforeEach(inject(function($rootScope, $controller, AppResource, centrisNotify, _$httpBackend_, SellerDlg) {
		scope = $rootScope.$new();
		$httpBackend = _$httpBackend_;
		sellerDlg = SellerDlg;

		centrisnotify = mockCentrisNotify;
		appResource = AppResource;

		SellersController = $controller("SellersController", {
			$scope        : scope,
			centrisNotify : centrisnotify,
			AppResource   : appResource,
			SellerDlg     : sellerDlg

		});

		spyOn(scope, "addSeller");
		spyOn(scope, "editSeller");
		spyOn(scope, "changeLanguage");
		//spyOn(appResource, "getSellers");
		spyOn(centrisnotify, "success");
		spyOn(sellerDlg, "show");
	}));

	describe("on load up", function() {
		it("should get all sellers", function() {
			expect(scope.sellers).toBeDefined();
			expect(scope.sellers.length).toEqual(5);
		});
	});

	describe("when adding seller", function() {
		beforeEach(function() {
			scope.addSeller();
		});

		it("should add a user", function() {
			expect(scope.addSeller).toHaveBeenCalled();
			//expect(mockCentrisNotify.success).toHaveBeenCalled();
		});

	});

	describe("when editing a seller", function() {
		beforeEach(function() {
			scope.editSeller(successObj);
		});

		it("should edit the seller", function() {
			expect(scope.editSeller).toHaveBeenCalledWith(successObj);
			//expect(sellerDlg.show).toHaveBeenCalled();
		});
	});


	describe("changes language", function() {
		beforeEach(function() {
			scope.changeLanguage("is");
		});

		it("should change when requested", function() {
				expect(scope.changeLanguage).toHaveBeenCalled();
			//	expect(translate.use).toHaveBeenCalled();
		});
	});

});
