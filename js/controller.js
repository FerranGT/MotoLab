angular.module("myControllers",['myServices'])

	.controller("createController", function($scope, motodbservice) {
		$scope.activetab = 'create';
		$scope.findBrands = function() {
			motodbservice.getMotoBrand()
				.then( function(response) {
					$scope.brands = response.data.Results;
				})
		}
		$scope.findBrands();
		
		$scope.findModels = function() {
			motodbservice.getMotoModel()
				.then( function(response) {
					console.log(response);
					$scope.models = response.data.Results;
				})
		} 
	})

	.controller("homeController'", function($scope, $rootScope, motodbservice) {

	})

	.controller("motoController'", function($scope, $rootScope, motodbservice) {

	})