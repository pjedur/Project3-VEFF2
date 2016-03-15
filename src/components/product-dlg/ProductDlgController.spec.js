"use strict";
describe("Product dialog factory", function() {

  var scope;
  var controller;
  var centris;

  var mockParam = {
    product : {
      name : "asda",
      price : "232",
      quantityInStock : "23",
      quantitySold: "241",
      imagePath: "sds"

    }
  };


  beforeEach(module("project3App"));
  beforeEach(inject(function($rootScope, $controller, ProductDlg, centrisNotify) {
    scope = $rootScope.$new();
    centris = centrisNotify;
    controller = $controller("ProductDlgController", {
      $scope: scope,
      modalParam: mockParam,
      centrisNotify: centris
    });

    spyOn(scope, "onOk");
    spyOn(scope, "onCancel");
    scope.product = mockParam.product;

  }));

  describe("when submitting", function() {
    beforeEach(function(done) {
      scope.onOk();
      done();
    });

    it("should call onOk function", function() {
      expect(scope.onOk).toHaveBeenCalled();
      expect(scope.product).toBeDefined();
      expect(scope.product).toEqual(mockParam.product);
    });
  });

  describe("when cancelling", function() {
    beforeEach(function(done) {
      scope.onCancel();
      done();
    });

    it("should call onOk function", function() {
      expect(scope.onCancel).toHaveBeenCalled();
      expect(scope.product).toEqual(mockParam.product);
    });

  });
});
