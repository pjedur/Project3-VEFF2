"use strict";

describe("SellersController", function() {

		var SellerController,
		appResource,
		centrisnotify,
		productDlg,
		routeParams,
		location,
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

	beforeEach(inject(function($rootScope, $controller, AppResource, centrisNotify, $routeParams, ProductDlg, $location) {
		scope = $rootScope.$new();

		routeParams = $routeParams;
		productDlg = ProductDlg;
		location = $location;

		//centrisnotify = mockCentrisNotify;
		centrisnotify = centrisNotify;
		appResource = AppResource;

		SellerController = $controller("SellerController", {
			$scope        : scope,
			centrisNotify : centrisnotify,
			AppResource   : appResource,
			ProductDlg    : productDlg,
			$routeParams  : routeParams,
			$location     : location
		});

		spyOn(scope, "addProduct");
		spyOn(scope, "editProduct");
		spyOn(scope, "changeLanguage");
		//spyOn(appResource, "getSellerDetails")
		spyOn(centrisNotify, "success");
		spyOn(centrisNotify, "error");
		//spyOn(centrisnotify, "success");
		//spyOn(sellerDlg, "show");
	}));

	describe("on load up", function() {
		it("should get all seller details and seller products", function() {

			//expect(scope.userID).toEqual(1);
			expect(scope.sellerProducts).toBeDefined();
		  expect(scope.sellerTop10Products).toBeDefined();

			//expect(scope.sellerDetails).toBeDefined();
			//expect(scope.sellers.length).toEqual(5);
		});
	});

	describe("when adding a product", function() {
		beforeEach(function() {
			scope.addProduct(successObj);
		});

		it("should add a user", function() {
			expect(scope.addProduct).toHaveBeenCalledWith(successObj);
			//expect(mockCentrisNotify.success).toHaveBeenCalled();

		});

	});

	describe("when editing a product", function() {
		beforeEach(function() {
			scope.editProduct(successObj);
		});

		it("should edit the seller", function() {
			expect(scope.editProduct).toHaveBeenCalledWith(successObj);
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
