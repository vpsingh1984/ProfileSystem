myApp.controller('loginCtrl', ['$scope', '$location', '$rootScope',  function($scope, $location, $rootScope){
alert('success');
	$scope.login = function(){
		console.log($scope.contact);
		var uname = $scope.username;
		var password = $scope.password;
		if($scope.username == 'admin' && $scope.password == 'admin'){
			$rootScope.loggedIn = true;
			$scope.blankMsg = true;
			alert('success');
			$location.path('/register');
		}else{
			alert('failed');
				$scope.blankMsg = false;
			});
		}


	}

}]);