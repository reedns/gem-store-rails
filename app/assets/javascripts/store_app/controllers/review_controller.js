(function() {
  var app = angular.module('gemStore');
  app.controller('reviewCtrl', ['$scope', function($scope) {
    $scope.review = {};

    $scope.addReview = function(product) {
      product.reviews.push($scope.review);
    };
  }]);
})();

