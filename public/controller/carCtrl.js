
//var myApp = angular.module('profile', ['ngRoute']);
myApp.controller('carlistCtrl', ['$scope', '$http', function($scope, $http){

	$scope.cars= "Car List";

	var refresh = function(){
		console.log("calling car list");
		$http.get('/carlist').success(function(response){
			$scope.carlist = response;
			$scope.cars = "";
			console.log("Car list response : " + response);
		});
		console.log($scope.carlist);
	};
	//refresh();

	var carList = function(){
		console.log("calling car list");
		$http.get('../../services/carlist.json').success(function(response){
			$scope.carItems = response;
			$scope.carItem = "";
			console.log("Car list response : " + response);
		});
		console.log($scope.carItems);
	};
	carList();

	$scope.addcars = function(){
		console.log($scope.cars);
		$http.post('/carlist', $scope.cars).success(function(response){
			refresh();
		});
	};

	$scope.remove = function(id){
		console.log(id);
		$http.delete('/carlist/' + id).success(function(response){
			refresh();
		});
	};

	$scope.edit = function(id){
		console.log(id);
		$http.get('/carlist/' + id).success(function(response){
			console.log(response);
			$scope.cars = response;
		});
	};

	$scope.update = function(){
		console.log($scope.cars._id);
		$http.put('/carlist/' + $scope.cars._id, $scope.cars).success(function(response){
			refresh();
		});
	};

}]);