var app = angular.module('formExample', []);

app.controller('setRequired', ['$scope', function($scope) {
    $scope.required = true;
}]);

app.directive('wjValidationError', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctl) {

            scope.$watchGroup(['wjValidationError', 'passwordStrength'], function(errorMsg, value, scope) {
                elm[0].setCustomValidity(errorMsg);
                ctl.$setValidity('wjValidationError', errorMsg ? false : true);
            });
        }
    };
});
