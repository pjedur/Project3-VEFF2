"use strict";

angular.module("project3App").controller("SellerDlgController",
    function SellerDlgController($scope, modalParam, centrisNotify) {

        $scope.seller = modalParam.seller;

        $scope.onOk = function onOk() {
            if ($scope.seller === undefined ||
                $scope.seller.name === undefined ||
                $scope.seller.category === undefined ||
                $scope.seller.imagePath === undefined ||
                $scope.seller === "" ||
                    $scope.seller.name === "" ||
                    $scope.seller.category === "" ||
                    $scope.seller.imagePath === "") {
                  centrisNotify.error("sellerdlg.Messages.ErrorInput");
                return;
            }
            $scope.$close($scope.seller);
        };

        $scope.onCancel = function onCancel() {
            $scope.$dismiss();
        };
    });
