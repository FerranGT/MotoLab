



angular.module('myServices', ["firebase"])
	.factory("motodbservice", function($http, $firebaseArray) {

			// var motorbikes = [];
			// 	var lsMotorbikes = localStorage.getItem("motorbikes");
			// 	if ( lsMotorbikes ) {
			// 		motorbikes = JSON.parse(lsMotorbikes)
			// 	}

			// var databaseService = firebase.database();
			// var referencia = databaseService.ref('bikes');

			var username = "mapmotos";
			var bikes = firebase.database().ref().child("bikes");
			console.log(fbBikes);

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

				//MainCtrl.$inject = ['$firebaseArray'];
				//this.messages.$add(bike);

				$scope.bikes = $firebaseArray(fbBikes);
				$scope.bikes.$add(bike);

				// referencia.set({
				//   campoTest: bike,
				//   ahora: new Date().getTime()
			 //    })
				// .then(function() {
		  //           console.log('dato almacenado correctamente');
		  //       })
		  //       .catch(function(error) {
		  //           console.log('detectado un error', error);
		  //       })






				
				// var numBikes = motorbikes.length;
				// var lastIdAvailable ;

				// if (numBikes) {
				// 	lastIdAvailable = motorbikes[numBikes-1].id + 1;
				// }
				// else {
				// 	lastIdAvailable	= 1;
				// }

				// bike.id = lastIdAvailable;
				// motorbikes.push(bike);
				// var jsonBikes = JSON.stringify(motorbikes);
				// localStorage.setItem("motorbikes", jsonBikes);
				// console.log(localStorage.getItem("motorbikes"));
			}

			return {
				bikes: bikes,
				getMotoBrand: getMotoBrand,
				getMotoModel: getMotoModel,
				pushMoto: pushMoto
			}
	})
