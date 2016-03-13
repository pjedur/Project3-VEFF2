"use strict";

angular.module("project3App").directive("product",
function product() {
  return {
    restrict: "E",
    controller: "SellerController",
    scope: {
      product: "="
    },
    templateUrl: "components/product/Product-info.html"
  };
});
