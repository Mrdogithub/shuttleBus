angular.module("activeControllerModule",[])
.controller("activeController",function(loginHttpService,ACTIVE_ACCOUNT_ERROR,REQUESTTYPE,utilFactory,localStorageFactory,USER_ACCOUNT,$scope,$state,$stateParams){

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
			$scope.activeText = "激活中...";
			$scope.disabled = true;
			loginHttpService.smsCode({'phoneNumber':$scope.phoneNumber,'requestType':REQUESTTYPE.activeAccount,'smsCode':$scope.smsCode,'password':$scope.password})
			.then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					var tokenObjList = result.data.value;
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
						utilFactory.assignRole(_getRoleArray);
						localStorageFactory.remove('account');
						localStorageFactory.setObject('account',USER_ACCOUNT);

						if(USER_ACCOUNT.ROLE_HR || USER_ACCOUNT.ROLE_SCHEDULER){
							return $state.go('admin.passenger.list');
						}
						
						if(USER_ACCOUNT.ROLE_SECONDADMIN){
							return $state.go('companyAdmin.HR');
						}

						if(USER_ACCOUNT.ROLE_APPLICATIONADMIN){
							return $state.go('company.list')
						}

						if(USER_ACCOUNT.ROLE_DRIVER){
							return alertify.alert('未分配权限,请联系统管理员',function(){
								$scope.activeText = "激活";
								$scope.disabled = false;
								$scope.$apply();
							});
						}

						if(USER_ACCOUNT.ROLE_PASSENGER){
							return alertify.alert('未分配权限,请联系统管理员',function(){
								$scope.activeText = "激活";
								$scope.disabled = false;
								$scope.$apply();
							})
						}
					}
				}else{
					if (responseData.error.statusCode == ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200104.code) {
						alertify.alert('激活成功',function(){ $state.go('entry.login')})
					}else{
						utilFactory.checkErrorCode(responseData.error.statusCode,responseData.error.message)
					}
					
					$scope.activeText = "激活";
					$scope.disabled = false;
				}
			},function(error){
				alertify.confirm(error.data.message,function(){})
				$scope.activeText = "激活";
			});	
		}else {
			alertify.alert('密码不一致');
			$scope.activeText = "激活";
		}
	}
});