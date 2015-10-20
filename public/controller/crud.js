myApp.controller('crudCtrl', ['$scope', '$http', function($scope, $http){

	$scope.blankMsg = false;

	var refresh = function(){

		$http.get('/contactlist').success(function(response){
			$scope.contactlist = response;
			$scope.contact = "";
		});
	};
	refresh();
	
	$scope.addContact = function(){
		console.log($scope.contact);
		if($scope.contact == ""){
			$scope.blankMsg = true;
		}else{
			$http.post('/contactlist', $scope.contact).success(function(response){
				refresh();
				$scope.blankMsg = false;
			});
		}
	};

	$scope.remove = function(id){
		console.log(id);
		$http.delete('/contactlist/' + id).success(function(response){
			refresh();
		});
	};

	$scope.edit = function(id){
		console.log(id);
		$http.get('/contactlist/' + id).success(function(response){
			$scope.contact = response;
		});
	};

	$scope.update = function(){
		console.log($scope.contact._id);
		$http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
			refresh();
		});
	};

	$scope.deselect = function(){
		$scope.contact = "";
		$scope.blankMsg = false;
	}

}]);