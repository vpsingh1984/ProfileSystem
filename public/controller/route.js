myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/',	{
		templateUrl:'partials/contactlist.html',
		//controller:'loginCtrl'
	}).
	when('/login',	{
		templateUrl:'partials/login.html',
		//controller:'loginCtrl'
	}).
	otherwise({
		redirectTo:'/'
	})
}])
