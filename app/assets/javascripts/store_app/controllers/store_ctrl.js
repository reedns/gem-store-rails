(function() {
   var app = angular.module('gemStore');

  app.controller('StoreCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.errors = [];
    $scope.products = [];

    $scope.index = function() {
      $http.get('/v1/products')
        .success(function(data) {
          $scope.products = data;
        })
        .error(function(data, status) {
          $scope.errors.push(data)
          console.log(data);
          console.log(status);
        });
    };

    $scope.create = function(product) {
        $http.post('/v1/products', {product: product})
        .success(function(data) {
          $scope.products.push(data.product);
        })
        .error(function(data) {
          $scope.errors.push(data);
          console.log(data);
          console.log(status);
        });
    };

    $scope.update = function(product) {
      $http({
        method: 'PATCH',
        url: '/v1/products/' + product.id,
        data: product
      })
        .success(function() {
          tab.isSet(1);
        })
        .error(function() {
         $scope.errors.push(data)
          console.log(data);
          console.log(status);
        });
    };

    $scope.destroy = function(product) {
      $http({
        method: 'DELETE',
        url: '/v1/products/' + product.id
      })
        .success(function() {
          product.deleteConfirm = false;
          $scope.products.splice($scope.products.indexOf(product), 1);
        })
        .error(function() {
          $scope.errors.push(data);
          console.log(data);
          console.log(status);
        });
    };

  }]);
})();
