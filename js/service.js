angular.module('myServices', [])
	.factory("motodbservice", function($http) {

			var motorbikes = [];
				var lsMotorbikes = localStorage.getItem("motorbikes");
				if ( lsMotorbikes ) {
					motorbikes = JSON.parse(lsMotorbikes)
				}

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

				
				var numBikes = motorbikes.length;
				var lastIdAvailable ;

				if (numBikes) {
					lastIdAvailable = motorbikes[numBikes-1].id + 1;
				}
				else {
					lastIdAvailable	= 1;
				}

				bike.id = lastIdAvailable;
				motorbikes.push(bike);
				var jsonBikes = JSON.stringify(motorbikes);
				localStorage.setItem("motorbikes", jsonBikes);
				console.log(localStorage.getItem("motorbikes"));
			}

			return {
				getMotoBrand: getMotoBrand,
				getMotoModel: getMotoModel,
				pushMoto: pushMoto
			}
	})
