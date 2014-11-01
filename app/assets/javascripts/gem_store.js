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

  app.run(['$rootScope', '$cookies', '$http', function($rootScope, $cookies, $http) {
    $rootScope.isLoggedIn = function() {
      var currentUser = $cookies.current_user
      return (typeof($currentUser) !== 'undefined' && currentUser !== '');
    };

    $rootScope.currentUser = function() {
      return $cookies.current_user;
    };

    $rootScope.logOut = function() {
      $http({
        method: 'DELETE',
        url: '/users/sign_out'
      })
        .success(function() {
          $cookies.current_user = '';
        })
        .error(function() {
          console.log('Could not log out');
        });
    };
  }]);
})()

// +  app.run(['$rootScope','$cookies','$http', function($rootScope, $cookies,$http){
// +    $rootScope.isLoggedIn = function(){
// +      var currentUser = $cookies.c_user;
// +      return typeof(currentUser) !== 'undefined' && currentUser !== '';
// +    };
// +    $rootScope.currentUser = function(){
// +      console.log($cookies.c_user);
// +      return $cookies.c_user;
// +    };
// +    $rootScope.logOut = function(){
// +      $http({
// +        method:'DELETE',
// +        url: '/users/sign_out'
// +      })
// +      .success(function(){
// +        $cookies.c_user = '';
// +      })
// +      .error(function(){
// +        console.log('could not log out');
// +      });
// +    };
// +
// +  }]);
