var app = angular.module('testApp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider, $httpProvider) { //, $locationProvider
  $httpProvider.defaults.withCredentials = true;
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });

	$routeProvider
	  .when('/auth', {
    	templateUrl: '/views/login.html'
  	})
  	.when('/main', {
    	templateUrl: '/views/main.html'
  	})
  	.otherwise('/auth');
});

app.run(function ($rootScope, $location, $cookies, restSrv, authSrv) {
  var userData = $cookies.get("data");
  if (userData) {
    var arr = userData.split(":");

    restSrv.autorize({ email: arr[0], password: arr[1] })
           .success(function(data) {
              if (data && data.success) {
                authSrv.logIn(true);
                $location.path('/main');
              }
    });
  }
});