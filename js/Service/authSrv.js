app.factory('authSrv', function(){
	this.isLoggedIn;

	return {
	    logIn:function(val){
	        this.isLoggedIn = val;
	    },

	    isAutorized:function(){
	        return this.isLoggedIn;
	    }
	  };
});