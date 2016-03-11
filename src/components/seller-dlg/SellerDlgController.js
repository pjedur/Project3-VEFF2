"use strict";

angular.module("project3App").controller("SellerDlgController",
    function SellerDlgController($scope, seller) {
        $scope.seller = seller;

        $scope.onOk = function onOk(seller) {

            if ($scope.seller.name.length === 0) {

                return;
            }
            $scope.$close($scope.seller);
        };

        $scope.onCancel = function onCancel() {
            $scope.$dismiss();
        };
    });
