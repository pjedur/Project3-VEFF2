"use strict"

angular.module("project3App").controller("SellerController",
function SellerController($scope, AppResource, $routeParams) {

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


});
