"use strict";
describe("Seller dialog factory", function() {

  var scope;
  var controller;

  var mockCentrisNotify = {
    success: function(string) {
      return {
        result: {}
      };
    },
    error: function(string) {
      return {
        result: {}
      };
    }
  };

  var mockParam = {
    name : "asda",
    price : "232",
    quantityInStock : "23",
    quantitySold: "241",
    imagePath: "sds"
  };

  beforeEach(module("project3App"));
  beforeEach(inject(function($rootScope, $controller, ProductDlg, centrisNotify) {
    scope = $rootScope.$new();
    controller = $controller("ProductDlgController", {
      $scope: scope,
      modalParam: mockParam,
      centrisNotify: mockCentrisNotify
    });

    spyOn(scope, "onOk");
    spyOn(scope, "onCancel");
    scope.seller = mockParam;
  }));

  describe("on load up", function() {
    it("should initialize properly", function(done) {
      expect(scope.seller).toBeDefined();
      expect(scope.seller).toEqual(mockParam);
      done();
    });
  });

  describe("when submitting", function() {
   beforeEach(function() {
      scope.onOk();
    });

    it("should call onOk function", function() {
      expect(scope.onOk).toHaveBeenCalled();
      expect(scope.seller).toBeDefined();
    });
  });

  describe("when cancelling", function() {
    beforeEach(function() {
      scope.onCancel();
    });

    it("should call function onCancel", function() {
      expect(scope.onCancel).toHaveBeenCalled();
      expect(scope.seller).toBeDefined();
    });
  });
});
