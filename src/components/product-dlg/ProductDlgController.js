"use strict";

angular.module("project3App").controller("ProductDlgController",
    function ProductDlgController($scope) {
        $scope.product = {
          name: "",
          price: "",
          quantitySold: "",
          quantityInStock: "",
          imagePath: ""
        };

        $scope.onOk = function onOk() {

            if ($scope.product.name.length === 0) {

                return;
            }
            $scope.$close($scope.product);
        };

        $scope.onCancel = function onCancel() {
            $scope.$dismiss();
        };
    });
