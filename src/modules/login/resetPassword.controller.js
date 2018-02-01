angular.module("resetPasswordControllerModule",[])
.controller("resetPasswordController",function($scope,$state,$stateParams,RESET_ACCOUNT_ERROR,utilFactory,loginHttpService){
                                              

	$scope.passwordStatus = false; //default status for password false:hidden,true:show
	$scope.restText="重置";

	
	$scope.disabled=false;
	$scope.displayPasswordStatus = function(passwordPosition,passwordStatus){
		var _input = document.getElementsByTagName('Input');
		console.log(_input);
		for(var i=0;i<_input.length;i++) {		 
			if(passwordStatus){
				if(passwordPosition == 'passwordOld') {
					$scope.passwordOld = false;
				}else if(passwordPosition == 'passwordFirst') {
					$scope.passwordFirst = false;
				} else {
					$scope.passwordSecond = false;
				}
				document.getElementById(passwordPosition).setAttribute('type',"password");
			}else{
				if(passwordPosition == 'passwordOld') {
					$scope.passwordOld = true;
				} else if(passwordPosition == 'passwordFirst') {
					$scope.passwordFirst = true;
				} else {
					$scope.passwordSecond = true;
				}
				document.getElementById(passwordPosition).setAttribute('type',"text");
			}		 
		}	
	}

	$scope.restPassword = function(){

		//var regex = new RegExp( /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,32}$/);
		var regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/);		
		
		if($stateParams.userName){
			console.log($stateParams.userName);
		}
		if(!$scope.previousPassword){
			alertify.alert('请输入旧密码').set('label', '确定');
			return;
		}
		if(!$scope.password){
			alertify.alert('请输入新密码').set('label', '确定');
			return;
		}
		if(!regex.test($scope.password)){
			alertify.alert('请输入8-32位密码,必须由数字,字母以及至少包含一个大写字母组成。').set('label', '确定');
			return;
		}
		if(!$scope.twicePassword){
			alertify.alert('请输入确认密码').set('label', '确定');
			return;
		}

		
		if($scope.previousPassword == $scope.password) {
			alertify.alert('旧密码与新密码不能相同').set('label', '确定');
			return;			
		}

		if($scope.twicePassword == $scope.password){
			$scope.restText="正在重置...";
			$scope.disabled=true;

			loginHttpService.passwordReset({'phoneNumber':$stateParams.userName,'password':$scope.password,'previousPassword':$scope.previousPassword})
			.then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					alertify.alert('密码重置成功,请重新登录',function(){
						$state.go('entry.master')
					}).set('label', '确定');
				}else{
					if(responseData.error.statusCode == RESET_ACCOUNT_ERROR.STATUS_CODE_0200101.code){
						alertify.alert('旧密码不正确',function(){}).set('label', '确定');						
					} else if(responseData.error.statusCode == RESET_ACCOUNT_ERROR.STATUS_CODE_0200110.code) {
						alertify.alert('无效的用户',function(){}).set('label', '确定');
					} else if(responseData.error.statusCode == RESET_ACCOUNT_ERROR.STATUS_CODE_0100113.code) {
						alertify.alert('重置密码可能遇到问题，请稍候再试',function(){}).set('label', '确定');
					} else {
						utilFactory.checkErrorCode(responseData.error.statusCode,responseData.error.message);
					}
					$scope.restText="重置密码";
					$scope.disabled = false;
				}
			},function(error){
					alertify.alert(error.data.message,function(){}).set('label', '确定');
					$scope.restText="重置密码";
					$scope.disabled=false;
			});	
		}else {
			alertify.alert('密码不一致').set('label', '确定');
		}
	}

});


