'use strict';

//Setting up route
angular.module('categories').config(['$stateProvider',
    function ($stateProvider) {
        // Categories state routing
        $stateProvider
            .state('categories', {
                url: '/categories',
                templateUrl: 'modules/categories/views/categories.client.view.html',
                controller: 'CategoriesController'
            })
            .state('createCategory', {
                url: '/categories/create',
                templateUrl: 'modules/categories/views/create-category.client.view.html',
                controller: 'CategoriesController'
            })
            .state('viewCategory', {
                url: '/categories/:categoryId',
                templateUrl: 'modules/categories/views/view-category.client.view.html',
                controller: 'CategoriesController'
            })
            .state('editCategory', {
                url: '/categories/:categoryId/edit',
                templateUrl: 'modules/categories/views/edit-category.client.view.html',
                controller: 'CategoriesController'
            });
    }
]);