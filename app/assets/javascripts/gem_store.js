//= require_self
//= require_tree ./store_app

(function () {
  var app = angular.module('gemStore', ['store-directives', 'ngRoute', 'ngCookies']);
  app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.common.Accept = 'application/json';
  }]);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'StoreCtrl',
        templateUrl: 'templates/products_view.html'
      })
      .when('/users', {
        controller: 'UsersCtrl',
        templateUrl: 'templates/users_view.html'
      })
      .otherwise({
        redirectTo: '/products'
      });
  }]);

  app.run(['$rootScope', '$cookieStore', '$http', function($rootScope, $cookieStore, $http) {
    $rootScope.isLoggedIn = function() {
      var currentUser = $cookieStore.get('currentUser')
      return (typeof($currentUser) !== 'undefined' && currentUser !== '');
    };

    $rootScope.currentUser = function() {
      return $cookieStore.get('currentUser');
    };

    $rootScope.logOut = function() {
      $http({
        method: 'DELETE',
        url: '/users/sign_out'
      })
        .success(function() {
          $cookieStore.remove('currentUser');
        })
        .error(function() {
          console.log('Could not log out');
        });
    };
  }]);
})()
