angular.module("loginControllerModule",[])
.controller("loginController",function(loginHttpService,md5Service,LOGIN_ACCOUNT_ERROR,localStorageFactory,$scope,$state,$stateParams){



	if($stateParams.phoneNumber){
		$scope.phoneNumber = $stateParams.phoneNumber;	
	}else{
		$state.go('entry.check')	
	}

	$scope.smsCode = $stateParams.smsCode;
	$scope.loginText="登录";
	$scope.passwordStatus = false;

	$scope.login = function(){

		$scope.disabled = true;
		if($scope.password){
			$scope.loginText = "登录中...";
			loginHttpService.login({'phoneNumber':$stateParams.phoneNumber,'password':$scope.password})
			.then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					loginHttpService.accessToken({'code':responseData.value.authCode}).then(function(result){
						var tokenObjList = result.data.value;
						var token = {
							'accessToken': tokenObjList.accessToken,
							'refreshToken': tokenObjList.refreshToken
						}
						alertify.alert('登录成功！ 管理页面正在建设中...',function(){
							localStorageFactory.remove('token');
							localStorageFactory.setObject('token',token);
							$scope.loginText = "登录";
							$scope.disabled = false;
							$scope.$apply();			
						})
					})

				}else{

					switch(responseData.error.statusCode){
						case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200101.code:errorMessageFn(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200101.message,responseData)
							break;
						case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200104.code:errorMessageFn(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200104.message,responseData)
							break;
						case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200107.code:errorMessageFn(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200107.message,responseData)
							break;
						case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200106.code:errorMessageFn(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200106.message,responseData)
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
						default :alertify.alert(responseData.error.message)
					}

					function errorMessageFn(errorMessageText,responseDataObj){
						alertify.alert(errorMessageText,function(){
							$scope.loginText = "登录";
							$scope.disabled = false;
							$scope.$apply();
						})
					}
				}

			},function(errorResult){
				var errorResponseData = errorResult.data.error;
				alertify.alert(errorResponseData.message+":"+errorResponseData.statusCode,function(){
					$scope.loginText = "登录";
					$scope.disabled = false;
				})
			});
		}else{
			alertify.alert('请输入密码',function(){
				$scope.loginText = "登录";
				$scope.disabled = false;
				$scope.$apply();
			})
		}		
	}

	$scope.forgetPassword = function(){
		if($scope.phoneNumber){
			$state.go('entry.forget',{'phoneNumber':$scope.phoneNumber,'requestType':$stateParams.requestType})
		}else{
			alert('手机号不能为空')
		}
	}
});