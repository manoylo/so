var soApp = angular.module('soApp', []);

soApp.controller('QuestionsController', ['$scope', '$http', function ($scope, $http) {
  $http({
    method: 'GET',
    url: '/question'
  }).then(function successCallback(response) {
    $scope.questions = response.data;
  });
}]);
