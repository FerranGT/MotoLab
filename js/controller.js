angular.module("myControllers",['myServices'])

	.controller("findbrandmodelController", function($scope, motodbservice) {
		$scope.activetab = 'create';
		$scope.findBrands = function() {
			motodbservice.getMotoBrand()
				.then( function(response) {
					$scope.brands = response.data.Results;
				})
		}
		$scope.findBrands();
		
		$scope.findModels = function() {
			console.log('loading models...');
			motodbservice.getMotoModel($scope.idBrand)
				.then( function(response) {
					$scope.models = response.data.Results;
				})
		}


	})

	.controller("createmotoController'", function($scope, $rootScope, motocreateservice) {
		$scope.createMoto = function() {
			motocreateservice.pushMoto()
				.then( function(response) {
					//$scope.brands = response.data.Results;
				})
		}
	})

	.controller("homeController'", function($scope, $rootScope, motodbservice) {
	})

	.controller("motoController'", function($scope, $rootScope, motodbservice) {

	})