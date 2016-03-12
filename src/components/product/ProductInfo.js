"use strict";

angular.module("project3App").directive("productInfo",
function productInfo(AppResource, $routeParams) {
  return {
    restrict: "E",
    templateUrl: "components/product/Product-info.html",
    link: function ($scope) {
      $scope.userID = $routeParams.sellerID;

      AppResource.getSellerProducts($scope.userID).success(function (data) {
          $scope.sellerProducts = data;
      }).error(function () {
          $scope.errorMessage = "Could not get products for Seller";
      });
    }
  };
});
