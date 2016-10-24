angular.module('myServices', [])
	.factory("motodbservice", function($http) {

			function getMotoBrand() {
				return $http.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/Moto?format=json");
			}

			return {
				getMotoBrand: getMotoBrand,
			}
			function getMotoModel() {
				return $http.get("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/honda/vehicleType/moto?format=json");
			}

			return {
				getMotoBrand: getMotoBrand,
				getMotoModel: getMotoModel
			}
	})
