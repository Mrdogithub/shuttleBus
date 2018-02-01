angular.module("loginControllerModule",[])
.controller("loginController",function(loginHttpService,USER_ACCOUNT,utilFactory,localStorageFactory,$scope,$state,$stateParams){

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
						console.log('role')
						console.log(1,tokenObjList)
						if(tokenObjList.roles){
							var _getRoleArray = tokenObjList.roles.split("$");
							USER_ACCOUNT.ROLE_HR = false;
							USER_ACCOUNT.ROLE_SCHEDULER = false;
							USER_ACCOUNT.ROLE_SECONDADMIN = false;
							USER_ACCOUNT.ROLE_APPLICATIONADMIN = false;
							USER_ACCOUNT.phoneNumber = $scope.phoneNumber;
							USER_ACCOUNT.accessToken = tokenObjList.accessToken;
							USER_ACCOUNT.refreshToken = tokenObjList.refreshToken;
							USER_ACCOUNT.accountId = tokenObjList.accountId;
							USER_ACCOUNT.secondCompanyId = tokenObjList.secondCompanyId;
							USER_ACCOUNT.secondCompanyName = tokenObjList.secondCompanyName;
							localStorageFactory.remove('account');
							utilFactory.assignRole(_getRoleArray);
							localStorageFactory.setObject('account',USER_ACCOUNT);
							if(USER_ACCOUNT.ROLE_HR || USER_ACCOUNT.ROLE_SCHEDULER ){
								return $state.go('admin.cloudData');
							}


							
							if(USER_ACCOUNT.ROLE_SECONDADMIN){
								return $state.go('admin.companyAdminHR');
							}

							if(USER_ACCOUNT.ROLE_APPLICATIONADMIN){
								return $state.go('admin.companyList')
							}

							if(USER_ACCOUNT.ROLE_DRIVER){
								return alertify.alert('未分配权限,请联系统管理员',function(){
									$scope.loginText = "登录";
									$scope.disabled = false;
									$scope.$apply();
								});
								
							}

							if(USER_ACCOUNT.ROLE_PASSENGER){
								return alertify.alert('未分配权限,请联系统管理员',function(){
									$scope.loginText = "登录";
									$scope.disabled = false;
									$scope.$apply();
								})
							}
							
						}
					})

				}else{
					utilFactory.checkErrorCode(responseData.error.statusCode,responseData.error.message)
					$scope.loginText = "登录";
					$scope.disabled = false;
				}

			},function(errorResult){
				var errorResponseData = errorResult.data.error;
				utilFactory.checkErrorCode(errorResponseData.statusCode,errorResponseData.message)
				$scope.loginText = "登录";
				$scope.disabled = false;
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