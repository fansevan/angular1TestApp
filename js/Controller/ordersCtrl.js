app.controller('ordersCtrl', function($scope, $location, restSrv, authSrv){
	if (!authSrv.isAutorized()){
		$location.path('/auth');
		return;
	}

	restSrv.getOrders().then(
		function(response) {
			if (response.data && response.data.success) {
				$scope.orders = response.data.data;
			}
		}, 
		function(response) {
			if (response.data && !response.data.success) {
				if (response.data.error == "There are no orders!")
					$scope.orders = [];
				else
					alert("Что-то пошло не так, попробуйте еще раз!");
			}
		}
	);

	$scope.pageSize = 10;
	$scope.currentPage = 1;
	$scope.numberOfPages = function(){
        return new Array(Math.ceil($scope.orders.length/$scope.pageSize));
    };

    $scope.setPage = function(page) {
    	$scope.currentPage = page;
    };
});