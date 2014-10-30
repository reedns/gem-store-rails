//= require_self
(function() {
   var app = angular.module('GemStore', ['store-directives']);

  app.controller('StoreCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.errors = [];
    $scope.products = [];

    // $http.get('/products/store-products.json').success(function(data){
    //   $scope.products = data;
    // });

    $scope.index = function() {
      $http.get('/v1/products')
        .success(function(data) {
          $scope.products = data
        })
        .errors(function(data) {
          $scope.errors.push(data)
          console.log(data);
          console.log(status);
        })
    }
    $scope.create = function(product) {
        $http.post('/v1/products', {product: product})
        .success(function(data) {
          $scope.products.push(data)
        })
        .error(function(data) {
          $scope.errors.push(data);
          console.log(data);
          console.log(status);
        });
    };

    // $scope.update = function(product) {
    //   $http({
    //     method: 'PATCH',
    //     url: '/v1/products/' + product.id,
    //     data: product
    //   })
    //     .success(function() {
    //       product.editing = false
    //     })
    //     .error(function() {
    //      $scope.errors.push(data)
    //       console.log(data);
    //       console.log(status);
    //     });
    // };

    // $scope.destroy = function(product) {
    //   $http({
    //     method: 'DELETE'
    //     url: '/v1/products/' + product.id,
    //   })
    //     .success(function() {
    //       note.deleteConfirm = false;
    //       $scope.products.splice($scope.products.indexOf(product), 1);
    //     })
    //     .error(function() {
    //       $scope.errors.push(data)
    //       console.log(data);
    //       console.log(status);
    //     });
    // };
  }]);
})()
