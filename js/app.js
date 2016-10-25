angular.module("myApp", ['ngRoute', 'myControllers'])
	.config( function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'views/home.html',
					controller: 'homeController'
				})
				.when('/create', {
					templateUrl: 'views/create.html',
					controller: 'findbrandmodelController'
				})
				// .when('/', {
				// 	templateUrl: 'views/motorbykes.html',
				// 	controller: 'motoController'
				// })
				.otherwise({redirectTo: '/'});

	})