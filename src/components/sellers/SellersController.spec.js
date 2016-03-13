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
	var SellersController, scope, appResource, centrisnotify, sellerDlg;

	beforeEach(inject(function($rootScope, $controller, AppResource, centrisNotify, SellerDlg) {
		scope = $rootScope.$new();
		centrisnotify = centrisNotify;
		appResource = AppResource;
		sellerDlg = SellerDlg;

		SellersController = $controller("SellersController", {
			$scope        : scope,
			centrisNotify : centrisnotify,
			AppResource   : appResource,
			SellerDlg     : sellerDlg
		});

	//	spyOn(centrisnotify, "error");
	//	spyOn(centrisnotify, "success");
		spyOn(sellerDlg, "show")
		spyOn(scope, "addSeller");
		spyOn(scope, "editSeller");
		spyOn(appResource, "addSeller");
	}));

	describe("addseller", function() {
		beforeEach(function() {
			scope.addSeller(successObj);
		});

		it("should get all sellers", function() {
			expect(scope.sellers).toBeDefined();
			expect(scope.sellers.length).toBeGreaterThan(0);
			expect(scope.addSeller).toHaveBeenCalledWith(successObj);
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
