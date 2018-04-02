app.factory('userService', ['$http', '$q', function ($http, $q) {
    const service = {};
    service.createUser = createUser;
    service.getUserById = getUserById;
    service.getUserByEmail = getUserByEmail;
    return service;
    function createUser(user) {
        let deferred = $q.defer();
        getUserByEmail(user.email)
            .then(function (duplicateUser) {
                //console.log(duplicateUser);
                if (duplicateUser.length > 0) {
                    deferred.resolve({success: false, message: 'email "' + user.email + '" is already taken'});
                } else {
                    $http.post('http://localhost:4001/user/create', user)
                        .then(function (data) {
                            data.data.success = true;
                            deferred.resolve(data.data);
                        });
                }
            });
        return deferred.promise;
    }
    function getUserById(id) {
        let deferred = $q.defer();
        $http.get('http://localhost:4001/user/' + id)
            .then(function (data) {
                deferred.resolve(data.data);
            });
        return deferred.promise;
    }
    function getUserByEmail(email) {
        let deferred = $q.defer();
        $http.get('http://localhost:4001/user/email/' + email)
            .then(function (data) {
                deferred.resolve(data.data);
            });
        return deferred.promise;
    }
}]);