function Facebook(){

	var self = this;
	
	this.init = function(){

		FB.init({
			  appId: '1435336426698191',
			  nativeInterface: CDV.FB,
			  useCachedDialogs: false
		});

	}


	this.conectar = function($callback){
		
     	 FB.getLoginStatus(function(response) {
     	
	          	if (response.status == 'connected') {

	             		if ( device.platform == 'android' || device.platform == 'Android' ){
								_uid = response.authResponse.userId;
								_access_token = response.authResponse.accessToken;
						}else {
							 	_uid = response.authResponse.userID;
							 	_access_token = response.authResponse.accessToken;
						}
						$callback();

					} else {
						
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
							    	$callback();

							   } else {
 
							     alert('User cancelled login or did not fully authorize.');

							   }
						}, {scope: 'email'});
	         		}
         });

		
	}

	this.desconectar = function(){
		
     	 FB.logout();

	}

	
}