'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', ['react']);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.safeApply = function(fn) {
      var phase = this.$root.$$phase;
      if(phase == '$apply' || phase == '$digest') {
        if(fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };

    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
    $scope.reactProps = {
      userName: 'Your Name!',
      onNameChange: function (newName) {
        $scope.safeApply(function() {
          $scope.reactProps.userName = newName;
        });
      }
    };
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
