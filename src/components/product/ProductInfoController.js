"use strict";

angular.module("project3App").controller("ProductInfoController", function ProductInfoController($scope, $routeParams, AppResource) {

    $scope.userID = $routeParams.sellerID;

    AppResource.getSellerProducts($scope.userID).success(function (data) {
        $scope.sellerProducts = data;
    }).error(function () {
        $scope.errorMessage = "Could not get products for Seller";
    });
});
