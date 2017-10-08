'use strict'
angular.module('schedulerBusDetailControllerModule',[])
.controller('schedulerBusDetailController',function(schedulerHttpService,setDirty,$stateParams,$state,$scope){

	if($stateParams.schedulerId){
		
		$scope.params = {
			'vehicleId': $stateParams.vehicleId,
			'schedulerId': $stateParams.schedulerId,
			'annualInspectionExpiration': $stateParams.annualInspectionExpiration,
			'availableSeats': $stateParams.availableSeats,
			'engineNumber': $stateParams.engineNumber,
			'insuranceExpiration': $stateParams.insuranceExpiration,
			'licensePlate': $stateParams.licensePlate,
			'schedulerId': $stateParams.schedulerId,
			'secondCompanyId': $stateParams.secondCompanyId,
			'shuttleCompanyId': $stateParams.shuttleCompanyId,
			'shuttleCompanyName': $stateParams.shuttleCompanyName,
			'vehicleLicense': $stateParams.vehicleLicense,
			'vehicleModel': $stateParams.vehicleModel,
			'vin': $stateParams.vin,
			'busCompany':[{'name':'数据加载中...','id':null}],
		}


		$scope.active = false;
		$scope.submitOnProgress = false;
		$scope.breadcrumbText={'lv1':'车辆管理','lv2':'编辑车辆'};


		// Get bus company list 
		schedulerHttpService.getBusCompany({'schedulerId': $scope.params.schedulerId,'secondCompanyId': $scope.params.secondCompanyId}).then(function(result){
			var	_resultData = result.data;

			if(!_resultData.error){
				$scope.params.busCompany.length = 0;
				_resultData.value.list.length? $scope.params.busCompany = _resultData.value.list :$scope.params.busCompany.push({'name':'暂无数据','id':null});
			} else{
				alertify.aleret(_resultData.error.message)
			}
		});


	}else{
		$state.go('scheduler.bus')
	}

	$scope.editDriverProfile = function(flag){
		$scope.active = !flag;
	};

	$scope.submitDriverProfile = function(formValidateIsInvalid){

		if(formValidateIsInvalid) return setDirty($scope.formValidate);

		alertify.confirm('确认更新牌照信息为"'+$scope.params.licensePlate+'"的车辆?',function(){
			$scope.submitOnProgress = true;
			$scope.submitStatusText = "正在更新中...";

			var _params = {
				"annualInspectionExpiration":$scope.params.annualInspectionExpiration,
				"availableSeats": $scope.params.availableSeats,
				"engineNumber": $scope.params.engineNumber,
				"insuranceExpiration": $scope.params.insuranceExpiration,
				"licensePlate": $scope.params.licensePlate,
				"schedulerId": $scope.params.schedulerId,
				"secondCompanyId": $scope.params.secondCompanyId,
				"shuttleCompanyId": $scope.params.busCompanyObj.partyId,
				"shuttleCompanyName": $scope.params.shuttleCompanyName,
				"vehicleLicense": $scope.params.vehicleLicense,
				"vehicleModel": $scope.params.vehicleModel,
				"vin": $scope.params.vin,
				'vehicleId':$scope.params.vehicleId
			};


			schedulerHttpService.updateBus(_params).then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					$state.go('scheduler.bus')
					// alertify.alert('新增成功！',function(){
					// 	$scope.submitStatusText = '完成';
					// 	$scope.active = true;
					// 	$state.go('scheduler.driver',{'schedulerUUID':_params.schedulerUUID,'secondCompanyID':_params.shuttleCompanyId})
					// })
				}else{
					$scope.submitStatusText = '完成';
					switch(responseData.error.statusCode){
						case '500':alertify.alert(responseData.error.message+":"+responseData.error.statusCode)
						break;
						case '400':alertify.alert(responseData.error.message+":"+responseData.error.statusCode)
						break;
					}
					$scope.submitOnProgress = false;
				}
			
			},function(errorResult){
				$scope.submitStatusText = '完成';
				$scope.active = true;
				alertify.alert(errorResult.error.message)
			})
		},function(){});
		
	};

	$scope.deleteBus = function(){
		alertify.confirm('该车辆仍有排班任务,如果继续删除,排班安排也会将被清空！请查看排版，并替换车辆。',function(){
			var _params = {
			"schedulerUUID":$scope.params.schedulerUUID,
			"vehicleID":$scope.params.vehicleID
			};

			schedulerHttpService.deleteBusByID(_params).then(function(result){
			},function(result){
				alertify.alert('服务器错误：'+result)
			})

		},function(){
			alertify.alert('正在建设中....')
		}).set('labels', {cancel:'查看排班',ok:'坚持删除'});
		
	};

})