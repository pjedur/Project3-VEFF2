"use strict";

angular.module("project3App").directive("product",
function product() {
  return {
    restrict: "E",
    controller: "SellerController",
    scope: {},
    templateUrl: "components/product/Product-info.html"
  };
});
