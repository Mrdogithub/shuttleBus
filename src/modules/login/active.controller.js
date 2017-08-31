angular.module("activeControllerModule",[])
.controller("activeController",function(loginHttpService,REQUESTTYPE,ACTIVE_ACCOUNT_ERROR,md5Service,$scope,$state,$stateParams){

	if(!$stateParams.phoneNumber){
		$state.go('entry.check');
	}else{
		$scope.phoneNumber = $stateParams.phoneNumber;
		$scope.smsCode = $stateParams.smsCode;
		$scope.codeStatus = "验证码已发送至"+$scope.phoneNumber;
	}
	
	$scope.activeText = "激活";
	$scope.disabled = false;
	$scope.passwordStatus = false;

	$scope.displayPasswordStatus = function(passwordPosition,passwordStatus){
		if(passwordStatus){
			passwordPosition == 'passwordSecond'?$scope.passwordSecond = false:$scope.passwordFirst=false;
			document.getElementById(passwordPosition).setAttribute('type',"password");
		}else{
			passwordPosition == 'passwordSecond'?$scope.passwordSecond = true:$scope.passwordFirst=true;
			document.getElementById(passwordPosition).setAttribute('type',"text");
		}		
	}	

	$scope.login = function(){
		
		var regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/);

		if(!$scope.smsCode){
			$.alert('请输入验证码');
			return;
		}

		if(!$scope.password){
			$.alert('请输入密码');
			return;
		}
		if(!regex.test($scope.password)){
			$.alert('请输入8-32位密码,必须由数字,字母以及至少包含一个大写字母组成。');
			return;
		}

		if(!$scope.twicePassword){
			$.alert('请输入确认密码')
			return;
		}
				
		if($scope.twicePassword == $scope.password){
			$scope.activeText = "正在激活...";
			$scope.disabled = true;
			loginHttpService.smsCode({'phoneNumber':$scope.phoneNumber,'requestType':REQUESTTYPE.activeAccount,'smsCode':$scope.smsCode,'password':$scope.password})
			.then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					$.alert('激活成功')
				}else{
					switch(responseData.statusCode){
						case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100113.code:errorMessageFn(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100113.message,responseData)
							break;
						case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100115.code:errorMessageFn(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100115.message,responseData)
							break;
						case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100106.code:errorMessageFn(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100106.message,responseData)
							break;
						case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100109.code:errorMessageFn(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100109.message,responseData)
							break;
						case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100112.code:errorMessageFn(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100112.message,responseData)
							break;
					}

					function errorMessageFn(errorMessageText,responseDataObj){
						$.alert(errorMessageText,function(){
							$scope.activeText = "激活";
							$scope.disabled = false;
						})
					}
				}
			},function(error){
				$.confirm(error.data.message,function(){})
			});	
		}else {
			alertify.alert('密码不一致')
		}
	}
});