angular.module("loginControllerModule",[])
.controller("loginController",function(loginHttpService,md5Service,USER_ACCOUNT,LOGIN_ACCOUNT_ERROR,localStorageFactory,$scope,$state,$stateParams){



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

						if(tokenObjList.roles){
							var _getRoleArray = tokenObjList.roles.split("@");
							var _roleList = ['ROLE_SYSADMIN','ROLE_APPLICATION_ADMIN','ROLE_SECOND_COMPANY_ADMIN','ROLE_HR','ROLE_SCHEDULER','ROLE_PASSENGER','ROLE_DRIVER','ROLE_COMPANY'];

							for(var i=0;i<_getRoleArray.length;i++){
								if(USER_ACCOUNT.hasOwnProperty(_roleList[_getRoleArray[i]-1])){
									USER_ACCOUNT[_roleList[_getRoleArray[i]-1]] = true;
								}
							}

							if(USER_ACCOUNT.ROLE_DRIVER){
								alertify.alert('未分配权限,请联系统管理员',function(){
									$scope.loginText = "登录";
									$scope.disabled = false;
									$scope.$apply();
								});
								return
							}

							if(USER_ACCOUNT.ROLE_PASSENGER){
								alertify.alert('未分配权限,请联系统管理员',function(){
									$scope.loginText = "登录";
									$scope.disabled = false;
									$scope.$apply();
								})
								return
							}

							USER_ACCOUNT.accessToken = tokenObjList.accessToken;
							USER_ACCOUNT.refreshToken = tokenObjList.refreshToken;
							USER_ACCOUNT.accountId = tokenObjList.accountId;
							USER_ACCOUNT.secondCompanyId = tokenObjList.secondCompanyId || '1';
							localStorageFactory.remove('account');
							localStorageFactory.setObject('account',USER_ACCOUNT);



							//get role

							var _roleList = localStorageFactory.getObject('account');


							if(_roleList.ROLE_HR){
								$state.go('passenger.list')
							}

							if(_roleList.ROLE_SCHEDULER){
								$state.go('scheduler.route')
							}
						}



						// if(_roleList.ROLE_HR && _roleList.ROLE_SCHEDULER){
						// 	//$state.go('admin')
						// }


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
						case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200108.code:errorMessageFn(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200108.message,responseData)
							break;
						case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200109.code:errorMessageFn(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200109.message,responseData)
							break;
						case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200110.code:errorMessageFn(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200110.message,responseData)
							break;
						case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200111.code:errorMessageFn(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200111.message,responseData)
							break;
						case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200112.code:errorMessageFn(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200112.message,responseData)
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