var graphApp = angular.module("graphApp", ["ngRoute", "appControllers", "firebase"]);

var appControllers = angular.module("appControllers", []);


graphApp.config(["$routeProvider", function( $routeProvider ){
	$routeProvider
		.when('/graph', {controller: 'graphControllers', templateUrl: 'partials/graph.html'})
		.when('/login', {controller: 'registrationCtrl', templateUrl: 'partials/login.html'})
		.when('/register', {controller: 'registrationCtrl', templateUrl: 'partials/register.html'})
		.otherwise({ redirectTo: '/login' });
}]);