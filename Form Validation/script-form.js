var app = angular.module('formExample', []);

app.directive('wjValidationError', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctl) {

      scope.$watchGroup(['ValidationError', 'passwordStrength'], function(errorMsg, value, scope) {
        elm[0].setCustomValidity(errorMsg);
        ctl.$setValidity('wjValidationError', errorMsg ? false : true);
        console.log(value);
        if (angular.isDefined(value)) {
          if (value.length > 8) {
            scope.strength = 'strong';
          } else if (value.length > 3) {
            scope.strength = 'okay';
          } else {
            scope.strength = 'weak';
          }
        }
    });
    }
  };
  });
