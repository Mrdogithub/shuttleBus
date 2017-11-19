angular.module('utilFactoryModule',[])
.factory('utilFactory',function(localStorageFactory,SMSCODE_ERROR,ERRORCODE_CONSTANT,ROLE_CODE,USER_ACCOUNT,FORGET_ACCOUNT_ERROR,CHECK_ACCOUNT_ERROR,LOGIN_ACCOUNT_ERROR,ACTIVE_ACCOUNT_ERROR,TOKEN_ERROR,$http,$state,$window){
	var fn = {};
	
	fn.getLocalTime = function(timestamp){
		var date = new Date(parseInt(timestamp));
		var y = 1900+date.getYear();
	    var m = "0"+(date.getMonth()+1);
	    var d = "0"+date.getDate();
	    return m.substring(m.length-2,m.length)+"/"+d.substring(d.length-2,d.length)+"/"+y;
		//return .toLocaleString().replace(/:\d{1,2}$/,' ');     
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

 	fn.getSecondCompanyName = function(){
 		return localStorageFactory.getObject('account',null).secondCompanyName;
 	}
 	fn.assignRole = function(RoleListArray){
 		for(var i=0;i<RoleListArray.length;i++){
			switch(RoleListArray[i]){
				case ROLE_CODE.ROLE_CODE_SYSADMIN:USER_ACCOUNT.ROLE_SYSADMIN = true
					break;
				case ROLE_CODE.ROLE_CODE_HR:USER_ACCOUNT.ROLE_HR = true
					break;
				case ROLE_CODE.ROLE_CODE_SCHEDULER:USER_ACCOUNT.ROLE_SCHEDULER = true
					break;
				case ROLE_CODE.ROLE_CODE_PASSENGER:USER_ACCOUNT.ROLE_PASSENGER = true
					break;
				case ROLE_CODE.ROLE_CODE_DRIVER:USER_ACCOUNT.ROLE_DRIVER = true
					break;
				case ROLE_CODE.ROLE_CODE_APPLICATIONADMIN:USER_ACCOUNT.ROLE_APPLICATIONADMIN = true
					break;
				case ROLE_CODE.ROLE_CODE_SECONDADMIN:USER_ACCOUNT.ROLE_SECONDADMIN = true
					break;
			}
		}
 	}
 	//  Check emprty form and provide error messages to user about each input filed 
 	fn.setDirty = function(form){ 
 		return (function(form) {
		   angular.forEach(form, function(value, key) {
		      if(!/^\$/.test(key)) form[key].$setDirty()
		    })
  		})(form)
 	}
 	fn.checkErrorCode = function(errorCode,errorMessage){
 		switch(errorCode){
 			case ERRORCODE_CONSTANT.ERROR_CODE_1000100201.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_1000100201.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_1000100301.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_1000100301.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0900100102.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0900100102.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0900100104.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0900100104.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0900100101.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0900100101.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0800100201.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0800100201.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_1000100401.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_1000100401.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_1000100402.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_1000100402.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_1000100203.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_1000100203.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0800200101.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0800200101.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0800200301.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0800200301.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0800100101.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0800100101.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0800100103.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0800100103.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0800100401.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0800100401.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0800100402.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0800100402.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_1000100302.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_1000100302.message,function(){})
 				break;
 			case TOKEN_ERROR.STATUS_CODE_0200201.code:alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_1000100302.message,function(){$state.go('entry.check')})
 				break;
 			case TOKEN_ERROR.STATUS_CODE_0200102.code: alertify.alert(TOKEN_ERROR.STATUS_CODE_0200102.message,function(){$state.go('entry.check')})
 				break;
 			case TOKEN_ERROR.STATUS_CODE_0200105.code:alertify.alert(TOKEN_ERROR.STATUS_CODE_0200105.message,function(){$state.go('entry.check')})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0600700202.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0600700202.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0600900201.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0600900201.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0600100101.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0600100101.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0600100201.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0600100201.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0600700201.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0600700201.message,function(){})
 				break;


 			case ERRORCODE_CONSTANT.ERROR_CODE_0600800201.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0600800201.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0600800202.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0600800202.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0600800203.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0600800203.message,function(){})
 				break;
			case CHECK_ACCOUNT_ERROR.STATUS_CODE_401.code:alertify.alert(CHECK_ACCOUNT_ERROR.STATUS_CODE_401.message,function(){})
				break;
			case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100103.code:alertify.alert(CHECK_ACCOUNT_ERROR.STATUS_CODE_0100103.message,function(){})
				break;
			case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100101.code:alertify.alert(CHECK_ACCOUNT_ERROR.STATUS_CODE_0100101.message,function(){})
				break;
			case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100108.code:alertify.alert(CHECK_ACCOUNT_ERROR.STATUS_CODE_0100108.message,function(){})
				break;
			case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100102.code:alertify.alert(CHECK_ACCOUNT_ERROR.STATUS_CODE_0100102.message,function(){})
				break;
			case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100110.code:alertify.alert( CHECK_ACCOUNT_ERROR.STATUS_CODE_0100110.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200108.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200108.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200109.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200109.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200110.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200110.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200111.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200111.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200112.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200112.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200101.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200101.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200104.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200104.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200107.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200107.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200106.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200106.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200108.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200108.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200109.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200109.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200110.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200110.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200111.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200111.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200112.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200112.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100113.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100113.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100115.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100115.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100106.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100106.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100109.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100109.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100112.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100112.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200108.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200108.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200109.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200109.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200110.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200110.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200111.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200111.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200112.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200112.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100107.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100107.message,function(){})
				break;
			// case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200104.code:alertify.alert('激活成功',function(){ $state.go('entry.login')})
			// 	break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0100112.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0100112.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0100109.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0100109.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200107.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200107.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200106.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200106.message,function(){})
				break;
			// case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200104.code: $state.go('entry.login')
			// 	break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200108.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200108.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200109.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200109.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200110.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200110.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200111.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200111.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200112.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200112.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0100113.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0100113.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0100115.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0100115.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0100106.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0100106.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200101.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200101.message,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0100108.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0100108.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0100110.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0100110.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0200108.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0200108.message,responseData,function(){})
			break;
			case SMSCODE_ERROR.STATUS_CODE_0200109.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0200109.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0200110.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0200110.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0200111.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0200111.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0200112.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0200112.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0100107.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0100107.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0100102.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0100102.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0100103.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0100103.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0100101.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0100101.message,responseData,function(){})
				break;
 			default:alertify.alert(errorCode + ':'+errorMessage,function(){})
 		}


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

}).filter('tomin',function(){
	return function(inputArray){
		console.log('xxxxxx')
		console.log(1,inputArray)
		if(inputArray.length){
			for(var i=0;i<inputArray.length;i++){
				console.log(inputArray[i].departureTime )
				if(inputArray[i].departureTime){
					inputArray[i]['departureTime'] = inputArray[i].departureTime / 60 / 1000;
				}
            	
        	}
		}
        return inputArray;
	}
});