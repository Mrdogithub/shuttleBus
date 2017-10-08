<<<<<<< HEAD
angular.module('utilFactoryModule',[]).factory('utilFactory',function(localStorageFactory,TOKEN_ERROR,$http,$window){
	var fn = {};
	
	fn.getLocalTime = function(timestamp){
		return new Date(parseInt(timestamp) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
	}
 	
 	fn.getTimestamp = function(localTime){
 		return new Date(localTime).getTime();
 	}

 	fn.getAccountId = function(){
 		return localStorageFactory.getObject('account',null).accountId;
 	}

 	fn.getSecondCompanyId = function(){
 		return localStorageFactory.getObject('account',null).secondCompanyId;
 	}

 	//  Check emprty form and provide error messages to user about each input filed 
 	fn.setDirty = function(form){ 
 		return (function(form) {
		   angular.forEach(form, function(value, key) {
		      if(!/^\$/.test(key)) form[key].$setDirty()
		    })
  		})(form)
 	}


 	fn.updateExpireToken = function(){

 		var _responseStatus = {
 			'expire':true
 		}
		getRefreshTokenFacotry.getRefreshToken().then(function(result){
			var _tokenRes = result.data;
			if(!_tokenRes.error){
				var _rewriteToken = localStorageFactory.getObject('account',null);
				_rewriteToken.accessToken = _tokenRes.accessToken;
				_rewriteToken.refreshToken = _tokenRes.refreshToken;
				localStorageFactory.setObject('account',_rewriteToken);
				_responseStatus.expire = false
				return _responseStatus;
			}else if(_tokenRes.error.statusCode == TOKEN_ERROR.STATUS_CODE_0200105.code){
				localStorageFactory.remove('account');
				_responseStatus.expire = true
				return _responseStatus;
			}else if(_tokenRes.error.statusCode == '0200104'){
				alertify.alert(_tokenRes.error.message)
			}

		},function(){
			console.log('xxxxx')
		});

		return _responseStatus;
 	}

	return fn;

=======
angular.module('utilFactoryModule',[]).factory('utilFactory',function(localStorageFactory,TOKEN_ERROR,$http,$window){
	var fn = {};
	
	fn.getLocalTime = function(timestamp){
		return new Date(parseInt(timestamp) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
	}
 	
 	fn.getTimestamp = function(localTime){
 		return new Date(localTime).getTime();
 	}

 	fn.getAccountId = function(){
 		return localStorageFactory.getObject('account',null).accountId;
 	}

 	fn.getSecondCompanyId = function(){
 		return localStorageFactory.getObject('account',null).secondCompanyId;
 	}

 	//  Check emprty form and provide error messages to user about each input filed 
 	fn.setDirty = function(form){ 
 		return (function(form) {
		   angular.forEach(form, function(value, key) {
		      if(!/^\$/.test(key)) form[key].$setDirty()
		    })
  		})(form)
 	}


 	fn.updateExpireToken = function(){

 		var _responseStatus = {
 			'expire':true
 		}
		getRefreshTokenFacotry.getRefreshToken().then(function(result){
			var _tokenRes = result.data;
			if(!_tokenRes.error){
				var _rewriteToken = localStorageFactory.getObject('account',null);
				_rewriteToken.accessToken = _tokenRes.accessToken;
				_rewriteToken.refreshToken = _tokenRes.refreshToken;
				localStorageFactory.setObject('account',_rewriteToken);
				_responseStatus.expire = false
				return _responseStatus;
			}else if(_tokenRes.error.statusCode == TOKEN_ERROR.STATUS_CODE_0200105.code){
				localStorageFactory.remove('account');
				_responseStatus.expire = true
				return _responseStatus;
			}else if(_tokenRes.error.statusCode == '0200104'){
				alertify.alert(_tokenRes.error.message)
			}

		},function(){
			console.log('xxxxx')
		});

		return _responseStatus;
 	}

	return fn;

>>>>>>> 7d3cf1803017ce6215a2432ad96e570109fcee20
});