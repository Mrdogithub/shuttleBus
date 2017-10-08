angular.module("checkControllerModule",[]).controller("checkController",function(localStorageFactory,loginHttpService,CHECK_ACCOUNT_STATUS,ACTIVE_ACCOUNT_ERROR,CHECK_ACCOUNT_ERROR,$scope,$state){
	$scope.btnMessage = "下一步";
	$scope.checkNumber = function(e){
		//var myreg = "^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$";
		var myreg=/^[0-9][0,1,2,3,4,5,6,7,8,9][0-9]{9}$/; 
		var phoneNumber = $scope.phoneNumber;

		if(!phoneNumber){
			alertify.alert('请输入手机号',function(){});
			return 
		}
        if(phoneNumber && !phoneNumber.match(myreg)) {
        		alertify.alert('请输入正确的手机号码');
        } else{
        	$scope.btnMessage = "获取权限中...";
        	$scope.disabled= true;

        	loginHttpService.account({'phoneNumber':$scope.phoneNumber,'requestType':0}).then(function(result){
				var responseData = result.data;
				var accountActiveObj = responseData.value;
	            


				if(!responseData.error){
					switch(accountActiveObj.status){
						case CHECK_ACCOUNT_STATUS.accountActive:$state.go('entry.active',{'phoneNumber':$scope.phoneNumber,'requestType':'0','smsCode':accountActiveObj.smsCode})
						break;
						case CHECK_ACCOUNT_STATUS.accountLogin:$state.go('entry.login',{'phoneNumber':$scope.phoneNumber,'requestType':'0'})
						break;
					}
				}else{
					switch(responseData.error.statusCode){
						case CHECK_ACCOUNT_ERROR.STATUS_CODE_401.code:errorMessageFn(CHECK_ACCOUNT_ERROR.STATUS_CODE_401.message,responseData)
							break;
						case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100103.code:errorMessageFn(CHECK_ACCOUNT_ERROR.STATUS_CODE_0100103.message,responseData)
							break;
						case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100101.code:errorMessageFn(CHECK_ACCOUNT_ERROR.STATUS_CODE_0100101.message,responseData)
							break;
						case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100108.code:errorMessageFn(CHECK_ACCOUNT_ERROR.STATUS_CODE_0100108.message,responseData)
							break;
						case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100102.code:errorMessageFn(CHECK_ACCOUNT_ERROR.STATUS_CODE_0100102.message,responseData)
							break;
						case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100110.code:errorMessageFn( CHECK_ACCOUNT_ERROR.STATUS_CODE_0100110.message,responseData)
							break;
						case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200108.code:errorMessageFn(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200108.message,responseData)
							break;
						case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200109.code:errorMessageFn(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200109.message,responseData)
							break;
						case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200110.code:errorMessageFn(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200110.message,responseData)
							break;
						case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200111.code:errorMessageFn(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200111.message,responseData)
							break;
						case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200112.code:errorMessageFn(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200112.message,responseData)
							break;
						default:errorMessageFn(responseData.error.message)
					}

					function errorMessageFn(errorMessageText,responseDataObj){
						alertify.alert(errorMessageText,function(){
							$scope.btnMessage = "下一步";
							$scope.disabled=false;
							$scope.$apply();
						})
					}
				}
			},function(error){
				alertify.alert('可能遇到问题，请稍候再试',function(){})
			});
        }	
	}
});