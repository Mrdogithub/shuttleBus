angular.module("forgetControllerModule",[])
.controller("forgetController",function(loginHttpService,REQUESTTYPE,FORGET_ACCOUNT_ERROR,md5Service,$scope,$state,$stateParams){

	if(!$stateParams.phoneNumber){
		$state.go('entry.check')
	}

	$scope.passwordStatus = false; //default status for password false:hidden,true:show
	$scope.phoneNumber=$stateParams.phoneNumber;
	$scope.requestType=REQUESTTYPE.forgetAccount;
	$scope.restText="重置密码";
	$scope.disabled=false;
	$scope.pathParamsForGoBack={
		phoneNumber:$scope.phoneNumber,
		requestType:$scope.requestType
	}

	$scope.displayPasswordStatus = function(passwordPosition,passwordStatus){
		if(passwordStatus){
			passwordPosition == 'passwordSecond'?$scope.passwordSecond = false:$scope.passwordFirst=false;
			document.getElementById(passwordPosition).setAttribute('type',"password");
		}else{
			passwordPosition == 'passwordSecond'?$scope.passwordSecond = true:$scope.passwordFirst=true;
			document.getElementById(passwordPosition).setAttribute('type',"text");
		}
	}

	$scope.restPassword = function(){

		//var regex = new RegExp( /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,32}$/);
		var regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/);

		if(!$scope.smsCode){
			alertify.alert('请输入验证码');
			return;
		}

		if(!$scope.password){
			alertify.alert('请输入密码');
			return;
		}
		if(!regex.test($scope.password)){
			alertify.alert('请输入8-32位密码,必须由数字,字母以及至少包含一个大写字母组成。');
			return;
		}

		if(!$scope.twicePassword){
			alertify.alert('请输入确认密码')
			return;
		}
		
		if($scope.twicePassword == $scope.password){
			$scope.restText="正在重置...";
			$scope.disabled=true;

			loginHttpService.smsCode({'phoneNumber':$scope.phoneNumber,'requestType':REQUESTTYPE.forgetAccount,'smsCode':$scope.smsCode,'password':$scope.password})
			.then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					alertify.alert('密码重置成功,请重新登录',function(){
						$state.go('entry.login',{"phoneNumber":$scope.phoneNumber})
					})
				}else{
					switch(responseData.statusCode){
						case FORGET_ACCOUNT_ERROR.STATUS_CODE_0100112.code:errorMessageFn(FORGET_ACCOUNT_ERROR.STATUS_CODE_0100112.message,responseData)
							break;
						case FORGET_ACCOUNT_ERROR.STATUS_CODE_0100109.code:errorMessageFn(FORGET_ACCOUNT_ERROR.STATUS_CODE_0100109.message,responseData)
							break;
						case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200107.code:errorMessageFn(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200107.message,responseData)
							break;
						case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200106.code:errorMessageFn(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200106.message,responseData)
							break;
						case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200104.code:errorMessageFn(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200104.message,responseData)
							break;
						case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200108.code:errorMessageFn(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200108.message,responseData)
							break;
						case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200109.code:errorMessageFn(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200109.message,responseData)
							break;
						case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200110.code:errorMessageFn(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200110.message,responseData)
							break;
						case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200111.code:errorMessageFn(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200111.message,responseData)
							break;
						case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200112.code:errorMessageFn(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200112.message,responseData)
							break;
						default:errorMessageFn(responseData.error.message)
					}

					function errorMessageFn(errorMessageText,responseDataObj){
						alertify.alert(errorMessageText,function(){
							$scope.restText="重置密码";
							$scope.disabled = false;
						})
					}

				}
			},function(error){
					alertify.alert(error.data.message,function(){});
					$scope.restText="重置密码";
					$scope.disabled=false;
			});	
		}else {
			alertify.alert('密码不一致');
		}
	}

});