"use strict";

angular.module("project3App").controller("SellerController",
    function SellerController($scope, AppResource, $routeParams, $translate, $location, ProductDlg, centrisNotify) {

    $scope.userID = $routeParams.sellerID;

    AppResource.getSellerDetails($scope.userID).success(function(data) {
      $scope.sellerDetails = data;
    }).error(function() {
      centrisNotify.error("sellerdetails.Messages.LoadDetailsFailed");
    });

    AppResource.getSellerProducts($scope.userID).success(function(data) {
      $scope.sellerProducts = data;
      var temp = data.sort(function(a,b) { return b.quantitySold - a.quantitySold; });
      $scope.sellerTop10Products = temp.slice(0, 10);
    }).error(function() {
      centrisNotify.error("sellerdetails.Messages.LoadFailed");
    });

    $scope.addProduct = function addProduct() {
        ProductDlg.show().then(function(product) {
          AppResource.addSellerProduct(parseInt($scope.userID), product).success(function(data) {
          $scope.sellerProducts.push(data);
          centrisNotify.success("sellerdetails.Messages.SaveSucceeded");
          }).error(function() {
            centrisNotify.error("sellerdetails.Messages.SaveFailed");
          });
        });
    };

    $scope.editProduct = function editProduct(product) {
      ProductDlg.show(product).then(function(product) {
        AppResource.updateProduct(parseInt($scope.userID), product).success(function(data) {
          centrisNotify.success("sellerdetails.Messages.EditSucceeded");
        }).error(function() {
          centrisNotify.error("sellerdetails.Messages.EditFailed");
        });
        });
    };

    $scope.changeLanguage = function (langKey) {
     $translate.use(langKey);
   };

});
