"use strict";

angular.module("project3App").directive("ProductInfo",
function ProductInfo(product) {
  return {
    restrict: "E",
    templateUrl: "../components/product/Product-info.html"
  };
});
