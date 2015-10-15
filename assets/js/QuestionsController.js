var soApp = angular.module('soApp', []);

soApp.controller('QuestionsController', ['$scope', function ($scope) {
  $scope.questions = [{
    id: 1,
    title: "test1",
    text: "asldk aosid aoisdu oaisjd kasjd lkasj dk lasj dkl ajs kld"
  }, {
    id: 2,
    title: "test2",
    text: "1222 [p asdpok fasdpokf poskf posfdasldk aosid aoisdu oaisjd kasjd lkasj dk lasj dkl ajs kld"
  }];
}]);
