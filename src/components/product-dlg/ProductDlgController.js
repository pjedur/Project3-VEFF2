"use strict";

angular.module("project3App").controller("ProductDlgController",
    function ProductDlgController($scope, modalParam, centrisNotify) {
        $scope.product = modalParam.product;

        $scope.onOk = function onOk() {

            if ($scope.product === undefined ||
                $scope.product.price === undefined ||
                $scope.product.quantityInStock === undefined ||
                $scope.product.imagePath === undefined){
                centrisNotify.error("productdlg.Messages.ErrorInput");
                return;
            }
            else {
                  $scope.$close($scope.product);
            }
        };

        $scope.onCancel = function onCancel() {
            $scope.$dismiss();
        };
    });
