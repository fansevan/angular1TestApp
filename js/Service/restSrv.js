app.factory('restSrv', function($http){
	var url = 'http://test.kluatr.ru/api/';
	return {
		autorize:function(user){
            return $http.post(url + 'user/login', 'email=' + user.email + '&' + 'password=' + user.password);
        },

        logOut:function(){
            return $http.get(url + 'user/logout');
        },

        getProfile:function(){
            return $http.get(url + 'user/profile');
        },

        editProfile:function(user){
            return $http.post(url + 'user/profile/edit', 'name=' + user.name);
        },

        getOrders:function(){
            return $http.get(url + 'orders');
        }
	};
});