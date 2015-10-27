myApp.config(['$routeProvider', function($routeProvider, $location){
	$routeProvider.
	when('/',	{
		templateUrl:'partials/login.html',
		//controller:'loginCtrl'
	}).
	when('/contactlist',	{
		resolve:{
			"check": function($location, $rootScope){
				if(!$rootScope.loggedIn){
					$location.path('/');
				}
			}
		},
		templateUrl:'partials/contactlist.html'

		
		//controller:'loginCtrl'
	}).
	when('/register', {
		templateUrl: 'partials/register.html',
		// controller:'registerCtrl'
	}).
	when('/userlist', {
		templateUrl: 'partials/userlist.html',
		controller: 'crudCtrl'
	}).
	otherwise({
		redirectTo:'/'
	})
}])
