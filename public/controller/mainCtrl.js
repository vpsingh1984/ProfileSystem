
//var myApp = angular.module('profile', ['ngRoute']);
myApp.controller('contactlistCtrl', ['$scope', '$http', function($scope, $http){

	$scope.title= "vijay";

	var refresh = function(){
		$http.get('/contactlist').success(function(response){
			$scope.contactlist = response;
			$scope.contact = "";
		});
		console.log($scope.contactlist);
	};
	refresh();

	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/userSaveContactlist', $scope.contact).success(function(response){
			refresh();
		});
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

}]);