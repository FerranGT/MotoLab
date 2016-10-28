angular.module("myControllers",['myServices'])

	.controller("createController", function($scope, $rootScope, motodbservice) {
		$rootScope.activetab = 'create';
		$rootScope.motosdb = motodbservice.bikes;

		var authService = firebase.auth();
    	var storageService = firebase.storage();
		
		// realizamos la autenticación anónima (debe estar activada en la consola de Firebase)
		// authService.signInAnonymously()
		// .catch(function(error) {
		// 	console.error('Detectado error de autenticación', error);
		// });
		// asociamos el manejador de eventos sobre el INPUT FILE
		document.getElementById('fileRoute').addEventListener('change', function(evento){
			evento.preventDefault();
			var archivo  = evento.target.files[0];
			$scope.subirArchivo(archivo);
		});
	

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
			motodbservice.pushMoto($scope.idBrand, $scope.idModel, $scope.price, $scope.year, $scope.image, $scope.description, $scope.kilometers)
			window.location = "#/moto"

		}

		

		// función que se encargará de subir el archivo
		$scope.subirArchivo = function(archivo) {
			// creo una referencia al lugar donde guardaremos el archivo
			var refStorage = storageService.ref('bike_images').child(archivo.name);
			// Comienzo la tarea de upload
			var uploadTask = refStorage.put(archivo);

			// defino un evento para saber qué pasa con ese upload iniciado
			uploadTask.on('state_changed', 
				function(snapshot){
					var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
					$scope.updateProgress(percentage);
				},
				function(error){
					console.log('Error al subir el archivo', error);
				},
				function(){
					console.log('Subida completada');
					$scope.image = uploadTask.snapshot.downloadURL;
					$scope.showPreview($scope.image);
				}
			);
	  	}
	  	$scope.updateProgress = function (percentage) {
		    	var pDiv = document.getElementById('progress-container');
		    	var txtHtml = '<progress id="progressBar" value="'+percentage+'" max="100"></progress>';
		    	pDiv.innerHTML = txtHtml;
		}

		$scope.showPreview = function (url) {
		    	var pDiv = document.getElementById('photo-container');
		    	var txtHtml = '<img id="photoPreview" src="'+url+'">';
		    	pDiv.innerHTML = txtHtml;
		    	var pDiv = document.getElementById('progress-container');
		    	pDiv.innerHTML = ""
		}
		
	})



	.controller("homeController", function($scope, $rootScope, motodbservice) {
		$rootScope.activetab = 'home';
		$rootScope.bikes = motodbservice.bikes;

		$scope.showBikes = function(){
			window.location = "#/moto"
		}
	})

	.controller("motoController", function($scope, $rootScope, motodbservice) {
		$rootScope.activetab = 'moto';
		$rootScope.bikes = motodbservice.bikes;

		$scope.removeMoto = function(motoObject) {

			var temp = angular.element( document.querySelector( '#'+motoObject.$id ) );
			temp.modal('hide');
			temp.on('hidden.bs.modal', function (e) {
				motodbservice.deleteMoto(motoObject);
			})				
			//window.location.reload();		
		}

	})

	.controller('NavBarCtrl', function($rootScope, $scope, AuthService) {

		$rootScope.$on('authEvent', function( e, data ) {
			$rootScope.user = data;
			console.log(data.avatar);
		});

		$scope.logIn = AuthService.logIn;
		$scope.logOut = AuthService.logOut;
	})
	







