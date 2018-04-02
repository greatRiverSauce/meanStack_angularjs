app.factory('authService', ['$http', '$q', function($http, $q) {
    const service = {};
    service.authentication = authentication;
    return service;
    function authentication(user) {
        let deferred = $q.defer();
        $http.post('http://localhost:4001/authenticate', user)
            .then(function (data) {
                deferred.resolve(data.data);
            });
        return deferred.promise;
    }
}]);