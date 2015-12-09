
var myApp = angular.module('profile', ['ngRoute']);

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/contactlist.html',
                controller: 'contactlistCtrl'
            }).
            when('/carlist', {
                templateUrl: 'views/carlist.html',
                controller: 'carlistCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);