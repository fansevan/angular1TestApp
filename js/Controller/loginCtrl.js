app.controller('loginCtrl', function($scope, $location, $cookies, restSrv, authSrv){
	$scope.autorize = function() {
		restSrv.autorize($scope.loginUser).then(
			function(response) {
				if (response.data && response.data.success) {
					$location.path('/main');
					authSrv.logIn(true);
					if ($scope.loginUser.remember)
						$cookies.put("data", $scope.loginUser.email + ":" + $scope.loginUser.password);
				}
			}, 
			function(response) {
				if (response.data && !response.data.success) {
					alert("Такого пользователя в системе нет!");
				}
			}
		);
	};
});