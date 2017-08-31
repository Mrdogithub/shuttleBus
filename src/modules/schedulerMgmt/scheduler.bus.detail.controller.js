'use strict'
angular.module('schedulerBusDetailControllerModule',[])
.controller('schedulerBusDetailController',function(schedulerHttpService,$stateParams,$state,$scope){

	if($stateParams.vehicleID){
		$scope.params = {
		  "annualInspectionExpiration":$stateParams.annualInspectionExpiration,
		  "availableSeats": $stateParams.availableSeats,
		  "engineNumber": $stateParams.engineNumber,
		  "insuranceExpiration": $stateParams.insuranceExpiration,
		  "licensePlate": $stateParams.licensePlate,
		  "schedulerUUID": $stateParams.schedulerUUID,
		  "secondCompanyId": $stateParams.secondCompanyId,
		  "shuttleCompanyId": $stateParams.shuttleCompanyId,
		  "vehicleLicense": $stateParams.vehicleLicense,
		  "vehicleModel": $stateParams.vehicleModel,
		  "vin": $stateParams.vin
		}

		$scope.active = false;
		$scope.submitOnProgress = false;
		$scope.breadcrumbParams = {
			'schedulerUUID':$stateParams.schedulerUUID,
			'secondCompanyId':$stateParams.secondCompanyId	
		}
		$scope.breadcrumbText={
			'lv1':'车辆管理',
			'lv2':'新增车辆'
		}
	}else{
		$state.go('scheduler.driver',$scope.breadcrumbParams)
	}

	$scope.editDriverProfile = function(flag){
		$scope.active = !flag;
	};

	$scope.submitDriverProfile = function(formValidateIsInvalid){

		if(formValidateIsInvalid) return setDirty($scope.formValidate);

		$.confirm('确认新增牌照信息为"'+$scope.params.licensePlate+'"的车辆?',function(){
			$scope.submitOnProgress = true;
			$scope.submitStatusText = "正在创建中..."
			var _params = {
			  "annualInspectionExpiration":$scope.params.annualInspectionExpiration,
			  "availableSeats": $scope.params.availableSeats,
			  "engineNumber": $scope.params.engineNumber,
			  "insuranceExpiration": $scope.params.insuranceExpiration,
			  "licensePlate": $scope.params.licensePlate,
			  "schedulerUUID": $scope.params.schedulerUUID,
			  "secondCompanyId": $scope.params.secondCompanyId,
			  "shuttleCompanyId": $scope.params.shuttleCompanyId,
			  "vehicleLicense": $scope.params.vehicleLicense,
			  "vehicleModel": $scope.params.vehicleModel,
			  "vin": $scope.params.vin
			}


			schedulerHttpService.addBus(_params).then(function(result){
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
			})
		},function(){});
		
	};

	$scope.deleteBus = function(){
		$.confirm('该车辆仍有排班任务,如果继续删除,排班安排也会将被清空！请查看排版，并替换车辆。',function(){
			var _params = {
			"schedulerUUID":$scope.params.schedulerUUID,
			"vehicleID":$scope.params.vehicleID
			};

			schedulerHttpService.deleteBusByID(_params).then(function(result){
			},function(result){
				$.alert('服务器错误：'+result)
			})

		},function(){
			$.alert('正在建设中....')
		}).set('labels', {cancel:'查看排班',ok:'坚持删除'});
		
	};

})