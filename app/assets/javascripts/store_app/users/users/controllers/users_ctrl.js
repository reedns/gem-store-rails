(function() {
  var app = angular.module('gemStore');
  app.controller('UsersCtrl', ['$http', '$scope', '$cookieStore', '$location', function($scope, $http, $cookieStore, $location) {
    $scope.create = function(user) {
      $http({
        method: 'POST',
        url: '/users',
        data: { user: user }
      })
        .success(function(data) {
          $cookieStore.put('currentUser', data);
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
          $cookieStore.put('currentUser', data);
          $location.path('/');
        })
        .error(function(data, status) {
          console.log(data);
          console.log(status);
        });
    };
  }]);
})()
