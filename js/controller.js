angular.module("myControllers",['myServices'])
	.controller("createController", function($scope, $rootScope, motodbservice) {
		$rootScope.activetab = 'create';
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
	.controller("homeController", function($scope, $rootScope, motodbservice) {
		$rootScope.activetab = 'home';
	})

	.controller("motoController", function($scope, $rootScope, motodbservice) {
		$rootScope.activetab = 'moto';
	})