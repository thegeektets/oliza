angular.module('starter.controllers',[])

.controller('MainCtrl', function($scope, $ionicDeploy, $location, Restangular,$rootScope,$http, $ionicUser, $ionicPush) {
  

        $scope.save = function () {
       
        Restangular.all('missout').post($scope.query).then(function (query) {
          $scope.message = 'word submitted successfully';
          $scope.query ='';

            $location.path('/submit');
        });
   };


    

})





