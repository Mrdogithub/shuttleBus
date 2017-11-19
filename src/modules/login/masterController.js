angular.module("masterLoginControllerModule",[])
.controller("masterLoginController",function(loginHttpService,USER_ACCOUNT,utilFactory,localStorageFactory,$scope,$state,$stateParams){

	// if($stateParams.phoneNumber){
	// 	$scope.phoneNumber = $stateParams.phoneNumber;	
	// }else{
	// 	$state.go('entry.check')	
	// }

	$scope.smsCode = $stateParams.smsCode;
	$scope.loginText="登录";
	$scope.passwordStatus = false;

	$scope.login = function(){

		$scope.disabled = true;
		if($scope.password){
			$scope.loginText = "登录中...";
			loginHttpService.masterLogin({'userName':$scope.userName,'password':$scope.password})
			.then(function(result){
				var responseData = result.data;

				if(!responseData.error){
					$state.go('admin.master')
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
});