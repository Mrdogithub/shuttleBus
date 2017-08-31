'use strict'
angular.module('schedulerAddDriverControllerModule',[])
.controller('schedulerAddDriverController',function(schedulerHttpService,setDirty,$stateParams,$state,$scope){

	if($stateParams.schedulerUUID  &&$stateParams.secondCompanyId){
		$scope.params = {
			// 'phoneNumber':$stateParams.phoneNumber,
			// 'roleType':$stateParams.roleType,
			// 'name':$stateParams.name,
			// 'accountId':$stateParams.accountId,
			// 'driverUUID':$stateParams.driverUUID,
			'schedulerUUID':$stateParams.schedulerUUID ,
			'secondCompanyId':$stateParams.secondCompanyId
			// 'shuttleCompanyId':$stateParams.shuttleCompanyId,
			// 'licenseID':$stateParams.licenseID,
			// 'licenseExpirationDate':$stateParams.licenseExpirationDate,
			// 'identityCard':$stateParams.identityCard
		};

		$scope.active = true;
		$scope.submitOnProgress = false;
		$scope.breadcrumbParams = {
			'schedulerUUID':$stateParams.schedulerUUID,
			'secondCompanyId':$stateParams.secondCompanyId	
		}
		$scope.breadcrumbText={
			'lv1':'司机管理',
			'lv2':'新增司机'
		}
	}else{
		$state.go('scheduler.addBus',$scope.breadcrumbParams)
	}

	$scope.editDriverProfile = function(flag){
		$scope.active = !flag;
	};

	$scope.submitDriverProfile = function(formValidateIsInvalid){

		if(formValidateIsInvalid) return setDirty($scope.formValidate);

		$.confirm('确认新增名为"'+$scope.params.name+'"的这个司机？',function(){	
			$scope.submitOnProgress = true;
			$scope.submitStatusText = '正在创建中';
			
			var _params = {
				'phoneNumber':$scope.params.phoneNumber,
				'roleType':$scope.params.roleType,
				'name':$scope.params.name,
				'accountId':$scope.params.accountId,
				'driverUUID':$scope.params.driverUUID,
				'schedulerUUID':$scope.params.schedulerUUID,
				'secondCompanyId':$scope.params.secondCompanyId,
				'shuttleCompanyId':$scope.params.shuttleCompanyId,
				'licenseID':$scope.params.licenseID,
				'licenseExpirationDate':$scope.params.licenseExpirationDate,
				'identityCard':$scope.params.identityCard
			}

			schedulerHttpService.addDriver(_params).then(function(result){
				var responseData = result.data;
				if(!responseData.error){
						$.alert('新增成功！',function(){
							$scope.submitStatusText = '完成';
							$scope.active = true;
							$state.go('scheduler.driver',{'schedulerUUID':_params.schedulerUUID,'secondCompanyID':_params.shuttleCompanyId})
						})
				}else{
					$scope.submitStatusText = '完成';
					switch(responseData.error.statusCode){
						case '500':$.alert(responseData.error.message+":"+responseData.error.statusCode)
						break;
						case '400':$.alert(responseData.error.message+":"+responseData.error.statusCode)
						break;
					}
					$scope.submitOnProgress = false;
				}
			
			},function(errorResult){
				$scope.submitStatusText = '完成';
				$scope.active = true;
				$.alert(errorResult.error.message)
			});
		});
	};

})