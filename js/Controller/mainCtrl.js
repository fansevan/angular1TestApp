app.controller('mainCtrl', function($scope, $location, $cookies, restSrv, authSrv){
	$scope.currentView = "profile";
	$scope.activeLink = "profile";

	$scope.logOut = function() {
		restSrv.logOut().then(
			function(response) {
				if (response.data && response.data.success) {
					$location.path('/auth');
					authSrv.logIn(false);
					$cookies.remove("data");
				}
			}, 
			function(response) {
				alert("Что-то пошло не так, попробуйте еще раз!");
			}
		);
	};

	$scope.changeView = function(view) {
		$scope.currentView = view;
		$scope.activeLink = view == "profile-edit" ? 'profile' : view;
	};
});