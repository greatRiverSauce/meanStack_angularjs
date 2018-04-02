app.controller('LoginController', ['$scope', '$location', 'userService', 'authService',function ($scope, $location, userService, authService) {
    $scope.signin = function() {
        authService.authentication($scope.user)
            .then(function (data) {
                if (data) {
                    alert('success');
                }
            })
    }
    $scope.signup = function () {
        $location.path(['/register']);
    }
}]);