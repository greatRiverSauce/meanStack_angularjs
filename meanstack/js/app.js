var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider.when('/', {
        template:'Hello every one, welcome to my site'
    }).when('/login', {
        controller:'LoginController',
        templateUrl: 'views/login.html'
    }).when('/register', {
        controller:'RegisterController',
        templateUrl: 'views/register.html'
    }).otherwise({
        redirectTo: '/'
    })

});

