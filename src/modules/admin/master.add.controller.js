angular.module('masterAddControllerModule',[])
.controller('masterAddController',function(applicationAdminHttpService,utilFactory,$stateParams,$state,$scope){

	console.log('add master')
	if($stateParams.systemAdminId){
		// $scope.companyUuid = $stateParams.companyUuid;
		$scope.params = {
			'systemAdminId': $stateParams.systemAdminId,
			'systemAdminCompanyId': $stateParams.systemAdminCompanyId,
			'systemCompanyName':$stateParams.systemCompanyName
			// 'name': $stateParams.name,
			// 'phoneNumber': $stateParams.phoneNumber
		};
		$scope.active = true;
		$scope.submitOnProgress = false;
		$scope.submitStatusText = '完成';
		$scope.breadcrumbText={
			'lv1':'公司列表',
			'lv2':'新增公司'
		}
	}else{
		$state.go('admin.master')
	}

	// form information haven't been completed by user and then user trigger ‘取消’
	// we should provide messages for user
	$scope.close = function(){
		alertify.confirm('请确认是否离开该页面,未保存的数据将在离开之后丢失。',function(){
			$state.go('admin.master')
		},function(){

		});
	}

	// form information completed by user and the group params whin _params obj
	// invoke API.Before invoke api we need to check all filed's status by 'setDirty'
	// services.
	$scope.addApplicationAdmin = function(formValidate){
		// if all input filed empty and then user trigger submit button
		// we will provide message for user to complete the requre filed.
		
		if(!formValidate) return utilFactory.setDirty($scope.formValidate)
		// alertify.confirm('确认新增名为'+$scope.params.name+'的这个乘客？',function(){
			
		// },function(){
		// 	console.log('cancel')
		// })

		var _params = {
				'systemAdminCompanyId': $scope.params.systemAdminCompanyId,
				'adminName':$scope.params.adminName,
				'name': $scope.params.name,
				'systemAdminId': $scope.params.systemAdminId,
				'phoneNumber': $scope.params.phoneNumber,
				'systemCompanyName':$scope.params.systemCompanyName
		}

		alertify.confirm('确认新增 "'+$scope.params.name+'"，并添加 "'+$scope.params.adminName+'" 为管理员吗？',function(){
			applicationAdminHttpService.addApplicationAdmin(_params).then(function(result){
				var responseData = result.data;
				if(!responseData.error){
				
					alertify.alert('新增成功！',function(){
						$scope.submitStatusText = '完成';
						$scope.active = true;
						$state.go('admin.master')
					})
				}else{
					utilFactory.checkErrorCode(responseData.error.statusCode,responseData.error.message)
				}
			},function(errorResult){
				alertify.alert(errorResult.error.message)
			})
		},function(){
			
		})
	}
})