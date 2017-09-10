'use strict'
angular.module('passengerAddControllerModule',[])
.controller('passengerAddController',function(passengerHttpService,setDirty,$stateParams,$state,$scope){

	if($stateParams.hrUuid){
		$scope.passengerUuid = $stateParams.passengerUuid;
		$scope.params = {
			'status':1,
			'passengerUuid':'',
			'roleType':'ROLE_PASSENGER',
			'hrUuid':$stateParams.hrUuid,
			'secondCompanyId':$stateParams.secondCompanyId,
			'accountId':'',
			'routeName':'',
			'stationName':'',
			'phoneNumber':$stateParams.phoneNumber,
			'employeeId':$stateParams.employeeId,
			'passengerName':$stateParams.passengerName

		};
		$scope.active = true;
		$scope.submitOnProgress = false;
		$scope.submitStatusText = '完成';
		$scope.breadcrumbParams = {
			'hrUuid':$stateParams.hrUuid,
			'secondCompanyId':$stateParams.secondCompanyId	
		}
		$scope.breadcrumbText={
			"lv1":"乘客列表",
			"lv2":"新增乘客"
		}
	}else{
		$state.go('passenger.list',{'hrUUID':'666','secondCompanyID':'666'})
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
	$scope.addPassengerProfile = function(formValidate,formValidateObj){

		// if all input filed empty and then user trigger submit button
		// we will provide message for user to complete the requre filed.
		if(!formValidate) return setDirty($scope.formValidate)
		alertify.confirm('确认新增名为"'+$scope.params.passengerName+'"的这个乘客？',function(){
			var _params = {
				'phoneNumber':$scope.params.phoneNumber,
				'roleType':$scope.params.roleType,
				'accountId':'',
				'name':$scope.params.passengerName,
				'employeeId':$scope.params.employeeId,
				'hrUuid':$scope.params.hrUuid,
				'passengerUuid':'',
				'secondCompanyId':$scope.params.secondCompanyId
			}
			passengerHttpService.addPassenger(_params).then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					$state.go('passenger.list',{'hrUuid':$scope.params.hrUuid})
					// alertify.alert('新增成功！',function(){
					// 	$scope.submitStatusText = '完成';
					// 	$scope.active = true;
					// 	$state.go('passenger.list',{'hrUuid':$scope.params.hrUuid})
					// })
				}else{
					switch(responseData.error.statusCode){
						case '500':alertify.alert(responseData.error.message+":"+responseData.error.statusCode)
						break;
						case '400':alertify.alert(responseData.error.message+":"+responseData.error.statusCode)
						break;
						default:alertify.alert(responseData.error.message+":"+responseData.error.statusCode)
					}
				}
			},function(errorResult){
				alertify.alert(errorResult.error.message)
			})
		},function(){
			console.log('cancel')
		})
	}
})