angular.module('myServices', ["firebase"])
	.factory("motodbservice", function($http, $firebaseArray) {

			var bikes = $firebaseArray ( new firebase.database().ref().child("bikes") )


			function getMotoBrand() {
				return $http.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/Moto?format=json");
			}

			function getMotoModel(idBrand) {
				return $http.get("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/" + idBrand + "/vehicleType/moto?format=json");
			}

			function pushMoto(idBrand,idModel,price,year,image,description,kilometers) {

				var bike = {
					brand:idBrand,
					model:idModel,
					price:price,
					year:year,
					url_img:image,
					description:description,
					km:kilometers 
				};

				bikes.$add(bike);

			}

			function deleteMoto(motoobject){

				bikes.$remove(motoobject);

			}


			return {
				bikes: bikes,
				getMotoBrand: getMotoBrand,
				getMotoModel: getMotoModel,
				pushMoto: pushMoto,
				deleteMoto: deleteMoto
			}
	})

	.factory("AuthService", function( $http, $firebaseAuth, $rootScope ) {

	    var Auth = $firebaseAuth();

	    Auth.$onAuthStateChanged(function(authData) {
	      if (authData) {
	        $rootScope.$broadcast("authEvent", {
	          name: authData.displayName,
	          avatar: authData.photoURL,
	          email: authData.email
	        });
	        //console.log(authData);
	      }
	      else {
	        $rootScope.$broadcast("authEvent", null)
	      }
	    });

	    function logIn() {
	      if ( Auth.$getAuth() === null ) {
	        Auth.$signInWithPopup("google")
	      }
	    }

	    function logOut() {
	      Auth.$signOut();
	    }

	    return {
	      logIn: logIn,
	      logOut: logOut
	    }

	  })





