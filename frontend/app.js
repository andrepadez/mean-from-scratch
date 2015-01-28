require('angular');


var app = angular.module('todoApp', []);

app.controller('MainCtrl', [ '$scope', function($scope){
    console.log('$scope', $scope);
    $scope.hello = 'Hello World';
} ]);




//var user = require('./user');
//user.sayHello();
