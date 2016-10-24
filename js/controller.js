angular.module("myControllers",['myServices'])

	.controller("createController", function($scope, $rootScope, motodbservice) {
		$rootScope.activetab = 'create';
		$scope.findBrands = function() {
			motodbservice.getMotoBrand()
				.then( function(response) {
					console.log(response);
					$rootScope.brands = response.results;
				})
		}
		$scope.findBrands();
		
		$scope.findModels = function() {
			motodbservice.getMotoModel()
				.then( function(response) {
					console.log(response);
					$rootScope.models = response.results;
				})
		} 
		$scope.findModels();
	})

	.controller("homeController'", function($scope, $rootScope, motodbservice) {

	})

	.controller("motoController'", function($scope, $rootScope, motodbservice) {

	})