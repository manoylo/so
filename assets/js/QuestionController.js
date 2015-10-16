var soApp = angular.module('soApp', []);

soApp.controller('QuestionController', ['$scope', '$http', function ($scope, $http) {
  $http({
    method: 'GET',
    url: '/question' + req.params['questionId']
  }).then(function successCallback(response) {
    $scope.questions = response.data;
  });
}]);
