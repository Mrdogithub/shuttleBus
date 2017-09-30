
'use strict'
angular.module('passengerAddControllerModule',[])
.controller('passengerAddController',function(passengerHttpService,utilFactory,setDirty,$stateParams,$state,$scope){

	if($stateParams.secondCompanyId){
		// $scope.passengerUuid = $stateParams.passengerUuid;
		$scope.params = {
			'secondCompanyId': $stateParams.secondCompanyId,
			'schedulerId': $stateParams.schedulerId,
			'employeeId': $stateParams.employeeId
			// 'name': $stateParams.name,
			// 'phoneNumber': $stateParams.phoneNumber
		};
		$scope.active = true;
		$scope.submitOnProgress = false;
		$scope.submitStatusText = '完成';
		$scope.breadcrumbText={
			'lv1':'乘客列表',
			'lv2':'新增乘客'
		}
	}else{
		$state.go('passenger.list')
	}

	$scope.editPassengerProfile = function(flag){
		$scope.active = !flag;
	};


	// form information haven't been completed by user and then user trigger ‘取消’
	// we should provide messages for user
	$scope.close = function(){
		alertify.confirm('请确认是否离开该页面,未保存的数据将在离开之后丢失。',function(){
			$state.go('passenger.list')
		},function(){

		});
	}

	// form information completed by user and the group params whin _params obj
	// invoke API.Before invoke api we need to check all filed's status by 'setDirty'
	// services.
	$scope.addPassengerProfile = function(formValidate){
		// if all input filed empty and then user trigger submit button
		// we will provide message for user to complete the requre filed.
		
		if(!formValidate) return setDirty($scope.formValidate)
		// alertify.confirm('确认新增名为'+$scope.params.name+'的这个乘客？',function(){
			
		// },function(){
		// 	console.log('cancel')
		// })

		var _params = {
				'secondCompanyId': $scope.params.secondCompanyId,
				'employeeId': $scope.params.employeeId,
				'name': $scope.params.name,
				'phoneNumber': $scope.params.phoneNumber,
				'schedulerId': $scope.params.schedulerId
			}
			console.log('passenger list')
			console.log(1,_params)
			passengerHttpService.addPassenger(_params).then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					$state.go('passenger.list',{'hrUuid':$scope.params.hrUuid})
					alertify.alert('新增成功！',function(){
						$scope.submitStatusText = '完成';
						$scope.active = true;
						$state.go('passenger.list')
					})
				}else{
					switch(responseData.error.statusCode){
						case '500':alertify.alert(responseData.error.message+':'+responseData.error.statusCode)
						break;
						case '400':alertify.alert(responseData.error.message+':'+responseData.error.statusCode)
						break;
						default:alertify.alert(responseData.error.message+':'+responseData.error.statusCode)
					}
				}
			},function(errorResult){
				alertify.alert(errorResult.error.message)
		})
	}
})