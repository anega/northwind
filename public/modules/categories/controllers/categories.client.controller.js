'use strict';

angular.module('categories').controller('CategoriesController', ['$scope', '$location', '$stateParams', 'Categories',
    function ($scope, $location, $stateParams, Categories) {
        $scope.create = function () {
            var category = new Categories({
                name: this.name,
                description: this.description
            });

            category.$save(function (response) {
                $location.path('categories/' + response._id);
                $scope.name = '';
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.remove = function (category) {
            if (category) {
                category.$remove();
                for (var i in $scope.categories) {
                    if ($scope.categories[i] === category) {
                        $scope.categories.splice(i, 1);
                    }
                }
            } else {
                $scope.category.$remove(function () {
                    $location.path('categories');
                });
            }
        };

        $scope.update = function () {
            var category = $scope.category;

            category.$update(function () {
                $location.path('categories/' + category._id);
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function () {
            $scope.categories = Categories.query();
        };

        $scope.findOne = function () {
            $scope.category = Categories.get({
                categoryId: $stateParams.categoryId
            });
        };
    }
]);