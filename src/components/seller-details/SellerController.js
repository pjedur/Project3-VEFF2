"use strict";

angular.module("project3App").controller("SellerController",
function SellerController($scope, AppResource, $routeParams, $location, ProductDlg) {

  $scope.userID = $routeParams.sellerID;


  AppResource.getSellerDetails($scope.userID).success(function(data) {
    $scope.sellerDetails = data;
  }).error(function() {
    $scope.errorMessage = "Could not get details for seller";
  });

  AppResource.getSellerProducts($scope.userID).success(function(data) {
    $scope.sellerProducts = data;
  }).error(function() {
    $scope.errorMessage = "Could not get products for seller";
  });


  $scope.addProduct = function addProduct() {
      ProductDlg.show().then(function(product) {
        AppResource.addSellerProduct(parseInt($scope.userID), product).success(function(data) {
        $scope.sellerProducts.push(data);
        }).error(function() {
          $scope.errorMessage = "Could not add product";
        });
      });
  }

  $scope.editProduct = function editProduct(product) {
    ProductDlg.show(product).then(function(product) {
      AppResource.updateProduct(parseInt($scope.userID), product).success(function(data) {
        console.log("updated product!");
      }).error(function() {
        console.log("error updating product");
      })
    });
  }

});
