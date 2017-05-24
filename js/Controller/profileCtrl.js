app.controller('profileCtrl', function($scope, $location, restSrv, authSrv){
	if (!authSrv.isAutorized()) {
		$location.path('/auth');
		return;
	}

	restSrv.getProfile().then(
		function(response) {
			if (response.data && response.data.success) {
				$scope.user = response.data.data;
			}
		}, 
		function(response) {
			if (!response.data.success && response.data.error == 'Bad session!') {
				alert("В настройках вашего браузера измените политику приема cookies (принимать все) и попробуйте залогиниться снова!");
				$location.path('/auth');
			}
			else 
				alert("Что-то пошло не так, попробуйте еще раз!");
		}
	);

	$scope.editProfile = function() {
		restSrv.editProfile($scope.user).then(
			function(response) {
				if (response.data && response.data.success) {
					alert("Профиль обновлен");
					$scope.$parent.changeView('profile');
				}
			}, 
			function(response) {
				alert("Что-то пошло не так, попробуйте еще раз!");
			}
		);
	}
});