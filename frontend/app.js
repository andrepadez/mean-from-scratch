require('angular');
var router = require('ui-router/angular-ui-router');
console.log(router);

var app = angular.module('todoApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'   
        });
});

app.controller('MainCtrl', function($scope, $http){
    $http.get('/people').then(function(res){
        $scope.people = res.data;

        setTimeout(function(){
            $scope.people.push({name: 'john'});
        }, 2000);

    });
});



