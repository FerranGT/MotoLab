angular.module("myApp", ['ngRoute', 'myControllers'])
	.config( function($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'homeController'
			})
			.when('/create', {
				templateUrl: 'views/create.html',
				controller: 'createController'
			})
			.when('/moto', {
				templateUrl: 'views/motorbykes.html',
				controller: 'motoController'
			})
			.otherwise({redirectTo: '/'});

	})
	.run( function($rootScope) {
		$rootScope.$on("$routeChangeSuccess", function () {
		    window.scrollTo(0, 0);
		});
	})