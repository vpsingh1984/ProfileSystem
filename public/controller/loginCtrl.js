
myApp.controller('loginCtrl', function($scope, $http, $location, Authentication){
		
		$scope.authentication = Authentication;

		if ($scope.authentication.user) {
			$location.path('/');
		};

		$scope.signin = function(){
			$http.post('/authentication', $scope.credentials).success(function(response){
				$scope.authentication.user = response;

				$location.path('/');
			}).error(function(response){
				$scope.error = response.message;
			});
		};
	}
	
});
