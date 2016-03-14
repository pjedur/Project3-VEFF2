"use strict";
describe("Product dialog factory", function() {

  var scope;
  var compile;
  var element;
  var backend;
  var controller;
  var centrisnotify;

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

  var mockModal = {
    open: function() {
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

  var dismiss = function() { return; };
  var close = function(){ return;};

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
    spyOn(mockCentrisNotify, "error");
    scope.$dismiss = dismiss;
    scope.$close = close;
    spyOn(scope, "$dismiss");
    spyOn(scope, "$close");
    scope.onOk();
    scope.onCancel();

  }));

  describe("when editing", function() {
    it("should initialize properly", function() {
      expect(scope.onOk).toHaveBeenCalled();
      expect();
      //expect(centrisnotify.error).toHaveBeenCalled();
      //expect(scope.onCancel).toHaveBeenCalled();

    });

    it("should", function() {
      expect(scope.onCancel).toHaveBeenCalled();
    });
  });
  // Etc., more describe() blocks, and more it() blocks as well...
});
