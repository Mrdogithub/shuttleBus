'use strict'
angular.module('passengerAddControllerModule',[])
.controller('passengerAddController',function(passengerHttpService,setDirty,$stateParams,$state,$scope){

	if($stateParams.hrUuid){
		$scope.passengerUuid = $stateParams.passengerUuid;
		$scope.params = {
			'status':1,
			'passengerUuid':$stateParams.passengerUuid,
			'roleType':$stateParams.roleType,
			'hrUuid':$stateParams.hrUuid,
			'secondCompanyId':$stateParams.secondCompanyId,
			'accountId':$stateParams.accountId,
			'routeName':$stateParams.routeName,
			'stationName':$stateParams.stationName,
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

	$scope.addPassengerProfile = function(formValidate,formValidateObj){
		if(!formValidate) return setDirty($scope.formValidate)
		$.confirm('确认新增名为"'+$scope.params.passengerName+'"的这个乘客？',function(){
			$scope.submitOnProgress = true;
			$scope.submitStatusText = '正在创建中';
			var _params = {
				'phoneNumber':$scope.params.phoneNumber,
				'roleType':$scope.params.roleType,
				'accountId':$scope.params.accountId,
				'name':$scope.params.passengerName,
				'employeeId':$scope.params.employeeId,
				'hrUuid':$scope.params.hrUuid,
				'passengerUuid':$scope.params.passengerUuid,
				'secondCompanyId':$scope.params.secondCompanyId
			}
			passengerHttpService.addPassenger(_params).then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					$.alert('新增成功！',function(){
						$scope.submitStatusText = '完成';
						$scope.active = true;
						$state.go('passenger.list',{'hrUuid':$scope.params.hrUuid})
					})
				}else{
					$scope.submitStatusText = '完成';
					switch(responseData.error.statusCode){
						case '500':$.alert(responseData.error.message+":"+responseData.error.statusCode)
						break;
						case '400':$.alert(responseData.error.message+":"+responseData.error.statusCode)
						break;
					}
				}
			},function(errorResult){
				$scope.submitStatusText = '完成';
				$scope.active = true;
				$.alert(errorResult.error.message)
			})
		},function(){
			console.log('cancel')
		})
	}
})