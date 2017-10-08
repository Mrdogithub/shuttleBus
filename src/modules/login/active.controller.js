angular.module("activeControllerModule",[])
.controller("activeController",function(loginHttpService,REQUESTTYPE,localStorageFactory,USER_ACCOUNT,ACTIVE_ACCOUNT_ERROR,md5Service,$scope,$state,$stateParams){

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
							var _getRoleArray = tokenObjList.roles.split(":");
							for(var i=0;i<_getRoleArray.length;i++){
								if(USER_ACCOUNT.hasOwnProperty(_getRoleArray[i])){
									USER_ACCOUNT[_getRoleArray[i]] = true;
								}
							}

							if(USER_ACCOUNT.ROLE_DRIVER){
								alertify.alert('未分配权限,请联系统管理员',function(){
									$scope.activeText = "激活";
									$scope.disabled = false;
									$scope.$apply();
								});
								return
							}

							if(USER_ACCOUNT.ROLE_PASSENGER){
								alertify.alert('未分配权限,请联系统管理员',function(){
									$scope.activeText = "激活";
									$scope.disabled = false;
									$scope.$apply();
								})
								return
							}
						}


						USER_ACCOUNT.accessToken = tokenObjList.accessToken;
						USER_ACCOUNT.refreshToken = tokenObjList.refreshToken;
						USER_ACCOUNT.accountId = tokenObjList.accountId;

						localStorageFactory.remove('account');
						localStorageFactory.setObject('account',USER_ACCOUNT);



						//get role

						var _roleList = localStorageFactory.getObject('account');


						if(_roleList.ROLE_HR){
							$state.go('passenger.list')
						}

						if(_roleList.ROLE_SCHEDULER){
							$state.go('scheduler.route')
						}else{
							alertify.alertify('权限未开通',function(){})
						}
						// if(_roleList.ROLE_HR && _roleList.ROLE_SCHEDULER){
						// 	//$state.go('admin')
						// }


				}else{
					switch(responseData.error.statusCode){
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
							$scope.activeText = "激活";
							$scope.disabled = false;
						})
					}
				}
			},function(error){
				alertify.confirm(error.data.message,function(){})
			});	
		}else {
			alertify.alert('密码不一致')
		}
	}
});