"use strict";

angular.module("project3App").controller("SellerDlgController",
    function SellerDlgController($scope) {
        $scope.seller = {};
        /*
        $scope.seller.name = "";
        $scope.seller.category = "";
        $scope.imagePath = ""; */

        $scope.onOk = function onOk() {

            if ($scope.seller.name.length === 0) {

                return;
            }
            $scope.$close($scope.seller);
        };

        $scope.onCancel = function onCancel() {
            $scope.$dismiss();
        };
    });
