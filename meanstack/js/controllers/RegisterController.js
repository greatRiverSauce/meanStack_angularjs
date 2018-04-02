app.controller('RegisterController', ['$scope', '$location', '$http', 'userService', function ($scope, $location, $http, userService) {
    $scope.login = function () {
        $location.path(['/login']);
    }
    $scope.register = function () {
        userService.createUser($scope.user)
            .then(function (data) {
                if (!data.success) {
                    alert(data.message);
                } else {
                    alert('You have successfully registered!');
                    $location.path('/login');
                }
            });
    }
}]);