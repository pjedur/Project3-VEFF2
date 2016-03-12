"use strict";

angular.module("project3App").controller("ProductDlgController",
    function ProductDlgController($scope, modalParam) {
        $scope.product = modalParam.product;

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
