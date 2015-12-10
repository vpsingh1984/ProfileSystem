
myApp.service('CarlistService', ['$http', '$q', function($http, $q) {

    this.getList = function() {
        var deferred = $q.defer();
        $http.get('/carlist').success(deferred.resolve)
            .error(deferred.reject);

        return deferred.promise;
    }

    this.addCarList = function (cars){
        var deferred = $q.defer();
        $http.post('/carlist', cars).success(deferred.resolve)
            .error(deferred.reject);

        return deferred.promise;
    }

}]);



