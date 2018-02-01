angular.module("masterLoginControllerModule",[])
.controller("masterLoginController",function(loginHttpService,ROLE_CODE,USER_ACCOUNT,utilFactory,localStorageFactory,$scope,$state,$stateParams){

	// if($stateParams.phoneNumber){
	// 	$scope.phoneNumber = $stateParams.phoneNumber;	
	// }else{
	// 	$state.go('entry.check')	
	// }
	$scope.loginText="登录";
	$scope.passwordStatus = false;
	$scope.disabled=false;
	$scope.displayPasswordStatus = function(passwordPosition,passwordStatus){
		console.log(passwordPosition)
		console.log(passwordStatus)
		if(passwordStatus){
			passwordPosition == 'passwordSecond'?$scope.passwordSecond = false:$scope.passwordFirst=false;
			document.getElementById(passwordPosition).setAttribute('type',"password");
		}else{
			passwordPosition == 'passwordSecond'?$scope.passwordSecond = true:$scope.passwordFirst=true;
			document.getElementById(passwordPosition).setAttribute('type',"text");
		}
	}
	$scope.login = function(){

		$scope.disabled = true;
		if($scope.password){
			$scope.loginText = "登录中...";
			loginHttpService.masterLogin({'userName':$scope.userName,'password':$scope.password})
			.then(function(result){
				var responseData = ''
				if(result.data){
					responseData = result.data;
				}else{
					return
				} 

				if(!responseData.error){

					var lastUpdateTime = utilFactory.getTimestamp(responseData.value.lastUpdatePasswordTime);
					var now = Date.parse(new Date());
					var daysDifference = (now - lastUpdateTime) / 1000 / 60 / 60 / 24;

					if(daysDifference < 90) {

						utilFactory.assignRole(ROLE_CODE.ROLE_CODE_SYSADMIN);
						USER_ACCOUNT.phoneNumber = $scope.userName;
						USER_ACCOUNT.accessToken = responseData.value.accessToken;
						USER_ACCOUNT.refreshToken = responseData.value.refreshToken;
						USER_ACCOUNT.accountId = responseData.value.accountId;
						USER_ACCOUNT.secondCompanyName = responseData.value.secondCompanyName;
						USER_ACCOUNT.secondCompanyId = responseData.value.secondCompanyId;
						localStorageFactory.remove('account');
						localStorageFactory.setObject('account',USER_ACCOUNT);

						$state.go('admin.master');
					} else {
						alertify.alert('您的密码已过期，请重置密码！',function(){
							$scope.disabled = false;
							$state.go('entry.reset',{'userName':$scope.userName,'password':$scope.password});
						}).set('label', '重置密码');
					}
					// 'label', 'Alright!'
					// {label:'重置密码'}
					
				}else{
					$scope.loginText = "登录";
					$scope.disabled = false;
					utilFactory.checkErrorCode(responseData.error.statusCode,responseData.error.message)

				}

			},function(errorResult){
				$scope.loginText = "登录";
				$scope.disabled = false;
				utilFactory.checkErrorCode(errorResponseData.statusCode,errorResponseData.message)

			});
		}else{
			alertify.alert('请输入密码',function(){
				$scope.loginText = "登录";
				$scope.disabled = false;
				$scope.$apply();
			})
		}		
	}

	
});