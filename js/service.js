angular.module('myServices', ["firebase"])
	.factory("motodbservice", function($http, $firebaseArray) {

			var bikes = $firebaseArray ( new firebase.database().ref().child("bikes") )


			function getMotoBrand() {
				return $http.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/Moto?format=json");
			}

			function getMotoModel(idBrand) {
				return $http.get("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/" + idBrand + "/vehicleType/moto?format=json");
			}

			function pushMoto(idBrand,idModel,price,year,image,description) {

				var bike = {
					brand:idBrand,
					model:idModel,
					price:price,
					year:year,
					url_img:image,
					description:description,
				};

				bikes.$add(bike);

			}

			return {
				bikes: bikes,
				getMotoBrand: getMotoBrand,
				getMotoModel: getMotoModel,
				pushMoto: pushMoto
			}
	})