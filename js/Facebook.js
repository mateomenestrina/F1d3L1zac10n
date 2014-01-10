function Facebook(){

	var self = this;
	
	this.init = function(){

		FB.init({
			  appId: '1435336426698191',
			  nativeInterface: CDV.FB,
			  useCachedDialogs: true
		});

	}

	this.esta_coenctado = function (){

		 FB.getLoginStatus(function(response) {
     	
	          	if (response.status == 'connected') {

	             		if ( device.platform == 'android' || device.platform == 'Android' ){
								_uid = response.authResponse.userId;
								_access_token = response.authResponse.accessToken;
						}else {
							 	_uid = response.authResponse.userID;
							 	_access_token = response.authResponse.accessToken;
						}
						
						FB.api('/me', function(response) {
							_name = response.name;
								alert('conectado ' + _name);
						});
							    	
						alert('conectado ' + _uid);



					} else {	

						alert('no conectado ' + _uid)


					}

				});

	}


	this.conectar = function($callback){
		
     
						
			             FB.login(function(response2) {
					 		 // console.log(response2)
							  if (response2.authResponse) {
							    	
							    	if ( device.platform == 'android' || device.platform == 'Android' ){
											_uid = response2.authResponse.userId;
											_access_token = response2.authResponse.accessToken;
									}else {
										 	_uid = response2.authResponse.userID;
										 	_access_token = response2.authResponse.accessToken;
									}

									FB.api('/me', function(response) {
								        _name = response.name;
								        $callback();
								     });
							    	

							   } else {
 
							     alert('User cancelled login or did not fully authorize.');

							   }
						}, {scope: 'email'});
	         		
		
	}

	this.desconectar = function(){
		
     	 FB.logout(function(response) {
                          alert('logged out');
                          });

	}

	
}