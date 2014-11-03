(function() {
  var app = angular.module('gemStore');
  app.controller('UsersCtrl', ['$http', '$scope', '$cookies', '$location', function($scope, $http, $cookies, $location) {
    $scope.create = function(user) {
      $http({
        method: 'POST',
        url: '/users',
        data: { user: user }
      })
        .success(function(data) {
          $cookies.current_user = data['email'];
          $location.path('/');
          console.log('created user');
        })
        .error(function(data, status) {
          console.log(data);
          console.log(status);
        });
    };
    $scope.signIn = function(user) {
      $http({
        method: 'POST',
        url: '/users/sign_in',
        data: { user: user }
      })
        .success(function(data) {
          $cookies.current_user = data['email'];
          $location.path('/');
        })
        .error(function(data, status) {
          console.log(data);
          console.log(status);
        });
    };
  }]);
})()
