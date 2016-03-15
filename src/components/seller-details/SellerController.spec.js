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

		var mockRouteParams = {
			sellerID: 1
		};

		var mockProductDlg = {
			show: function() {
				return {
					then : function(fn) {
						fn(successObj);
					}
				};
			}
		};

		var mockTranslate = {
			use : function() {
				return {};
			}
		};

beforeEach(module("project3App"));

	beforeEach(inject(function($rootScope, $controller, AppResource, centrisNotify, $routeParams, ProductDlg, $location, $translate) {
		scope = $rootScope.$new();

		routeParams = $routeParams;
		productDlg = ProductDlg;
		location = $location;
		centrisnotify = centrisNotify;
		appResource = AppResource;

		SellerController = $controller("SellerController", {
			$scope        : scope,
			centrisNotify : centrisnotify,
			AppResource   : appResource,
			ProductDlg    : mockProductDlg,
			$routeParams  : mockRouteParams,
			$location     : location,
			$translate    : mockTranslate
		});

		spyOn(scope, "addProduct");
		spyOn(scope, "editProduct");
		spyOn(scope, "changeLanguage");
	}));

	describe("on load up", function() {
		it("should get all seller details and seller products", function() {
			expect(scope.sellerProducts).toBeDefined();
		  expect(scope.sellerTop10Products).toBeDefined();
			expect(scope.userID).toEqual(1);
			expect(scope.sellerDetails).toBeDefined();
		});
	});

	describe("when adding a product", function() {
		beforeEach(function() {
			scope.addProduct(successObj);
		});

		it("should add a user", function() {
			expect(scope.addProduct).toHaveBeenCalledWith(successObj);
		});

	});

	describe("when editing a product", function() {
		beforeEach(function() {
			scope.editProduct(successObj);
		});

		it("should edit the seller", function() {
			expect(scope.editProduct).toHaveBeenCalledWith(successObj);
		});
	});


	describe("changes language", function() {
		beforeEach(function() {
			scope.changeLanguage("is");
		});

		it("should change when requested", function() {
				expect(scope.changeLanguage).toHaveBeenCalled();
		});
	});

});
