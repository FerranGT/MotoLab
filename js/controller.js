ngular.module("myControllers",['myServices'])

	.controller("createController", function($scope, $rootScope, motodbservice) {
		$rootScope.activetab = 'create';
		$scope.findBrands = function() {
			motodbservice.getMotoBrand()
				.then( function(response) {
					console.log(response);
					$rootScope.Brands = response.results;
				})
		}
		$scope.findBrands(); 

	})