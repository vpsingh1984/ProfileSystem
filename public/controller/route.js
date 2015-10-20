myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/',	{
		templateUrl:'partials/login.html',
		controller:'loginCtrl'
	}).
	when('/contactlist',	{
		templateUrl:'partials/contactlist.html',
		//controller:'loginCtrl'
	}).
	when('/register', {
		templateUrl: 'partials/register.html',
		// controller:'registerCtrl'
	}).
	otherwise({
		redirectTo:'/'
	})
}])
