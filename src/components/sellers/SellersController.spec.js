"use strict";

describe("SellersController", function() {

	var successObj = {
		name: "bla",
		category: "lol",
		imagePath: "lala"
	};

	var errorObj = {
		name: "",
		category: "",
		imagePath: ""
	};

	beforeEach(module("project3App"));
	var SellersController, scope, appResource, centrisnotify, sellerDlg, translate;

	beforeEach(inject(function($rootScope, $controller, AppResource, centrisNotify, SellerDlg, $translate) {
		scope = $rootScope.$new();
		centrisnotify = centrisNotify;
		appResource = AppResource;
		sellerDlg = SellerDlg;
		translate = $translate;

		SellersController = $controller("SellersController", {
			$scope        : scope,
			centrisNotify : centrisnotify,
			AppResource   : appResource,
			SellerDlg     : sellerDlg,
			$translate    : translate
		});

	//	spyOn(centrisnotify, "error");
		spyOn(centrisnotify, "success");
		spyOn(sellerDlg, "show");
		spyOn(scope, "addSeller");
		spyOn(scope, "editSeller");
		spyOn(scope, "changeLanguage");
		spyOn(appResource, "addSeller");
		spyOn(translate, "use");
	}));

	describe("addseller", function() {
		beforeEach(function() {
			scope.addSeller(successObj);
		});

		it("should get all sellers", function() {
			expect(scope.sellers).toBeDefined();
			expect(scope.sellers.length).toBeGreaterThan(0);
			expect(scope.addSeller).toHaveBeenCalledWith(successObj);
			//expect(centrisnotify.success).toHaveBeenCalled();
			//expect(sellerDlg.show).toHaveBeenCalled();
		//	expect(centrisnotify.success).toHaveBeenCalled();
		});


	});

	describe("editSeller", function() {
		beforeEach(function() {
			scope.editSeller(successObj);
		});

		it("should blanla", function() {
			expect(scope.editSeller).toHaveBeenCalledWith(successObj);
		});
	});

	describe("language", function() {
		beforeEach(function() {
			scope.changeLanguage("is");
		});

		it("should change when requested", function() {
				expect(scope.changeLanguage).toHaveBeenCalled();
			//	expect(translate.use).toHaveBeenCalled();
		});
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
