angular.module("myControllers",['myServices'])

	.controller("createController", function($scope, $rootScope, motodbservice) {

		$rootScope.activetab = 'create';
		$rootScope.motosdb = motodbservice.bikes;

		$scope.findBrands = function() {
			motodbservice.getMotoBrand()
				.then( function(response) {
					$scope.brands = response.data.Results;
				})
		}
		$scope.findBrands();
		
		$scope.findModels = function() {
			motodbservice.getMotoModel($scope.idBrand)
				.then( function(response) {
					$scope.models = response.data.Results;
				})
		}

		$scope.createMoto = function(e) {
			e.preventDefault();
			motodbservice.pushMoto($scope.idBrand, $scope.idModel, $scope.price, $scope.year, $scope.image, $scope.description)
		}

		$scope.removeMoto = function() {
			//e.preventDefault();
			motodbservice.deleteMoto($scope.motoobject)
		}

		$scope.removeMoto();

	})



	.controller("homeController", function($scope, $rootScope, motodbservice) {
		$rootScope.activetab = 'home';
	})

	.controller("motoController", function($scope, $rootScope, motodbservice) {
		$rootScope.activetab = 'moto';
		$scope.bikes =  motodbservice.bikes;
	})