var graphApp = angular.module("graphApp", ["ngRoute", "appControllers"]);

var appControllers = angular.module("appControllers", []);


graphApp.config(["$routeProvider", function( $routeProvider ){
	$routeProvider
		.when('/graph', {controller: 'graphControllers', templateUrl: 'partials/graph.html'})
		.when('/login', {templateUrl: 'partials/login.html'})
		.when('/register', {templateUrl: 'partials/register.html'})
		.otherwise({ redirectTo: '/login' });
}]);