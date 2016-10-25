angular.module('myServices', [])
	.factory("motodbservice", function($http) {

			function getMotoBrand() {
				return $http.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/Moto?format=json");
			}

			function getMotoModel(idBrand) {
				return $http.get("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/" + idBrand + "/vehicleType/moto?format=json");
			}

			function pushMoto() {
				return $http.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/Moto?format=json");
			}

			return {
				getMotoBrand: getMotoBrand,
				getMotoModel: getMotoModel
			}
	})
