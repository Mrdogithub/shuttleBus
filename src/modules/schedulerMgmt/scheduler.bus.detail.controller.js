angular.module('schedulerBusDetailControllerModule',[])
.controller('schedulerBusDetailController',function(schedulerHttpService,utilFactory,$stateParams,$state,$scope){

	if($stateParams.schedulerId){
		
		$scope.params = {
			'vehicleId': $stateParams.vehicleId,
			'schedulerId': $stateParams.schedulerId,
			'annualInspectionExpiration': $stateParams.annualInspectionExpiration?utilFactory.getLocalTime($stateParams.annualInspectionExpiration).split(',')[0]: '——',
			'availableSeats': $stateParams.availableSeats,
			'engineNumber': $stateParams.engineNumber  || '——',
			'insuranceExpiration': $stateParams.insuranceExpiration?utilFactory.getLocalTime($stateParams.insuranceExpiration).split(',')[0] : '——',
			'licensePlate': $stateParams.licensePlate,
			'schedulerId': $stateParams.schedulerId,
			'secondCompanyId': $stateParams.secondCompanyId,
			'shuttleCompanyId': $stateParams.shuttleCompanyId,
			'shuttleCompanyName': $stateParams.shuttleCompanyName,
			'vehicleLicense': $stateParams.vehicleLicense || '——',
			'vehicleModel': $stateParams.vehicleModel || '——',
			'vin': $stateParams.vin || '——',
			'busCompany':[{'name':'数据加载中...','id':null}],
			'noDataForOptionList':false
		}


		$scope.active = false;
		$scope.submitOnProgress = false;
		$scope.breadcrumbText={'lv1':'车辆管理','lv2':'车辆详情'};


		// Get bus company list 
		schedulerHttpService.getBusCompany({'schedulerId': $scope.params.schedulerId,'secondCompanyId': $scope.params.secondCompanyId}).then(function(result){
			var	_resultData = result.data;

			if(!_resultData.error){
				$scope.params.busCompany.length = 0;
				_resultData.value.list.length? $scope.params.busCompany = _resultData.value.list :$scope.params.noDataForOptionList = true;
			} else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		});


	}else{
		$state.go('admin.scheduler.bus')
	}

	$scope.editBusProfile = function(flag){
		$scope.params['engineNumber'] = $stateParams.engineNumber  || '';
		$scope.params['vehicleLicense'] = $stateParams.vehicleLicense  || '';
		$scope.params['vehicleModel'] = $stateParams.vehicleModel  || '';
		$scope.params['vin'] = $stateParams.vin  || '';
		$scope.params.busCompanyObj = {'name':$scope.params.shuttleCompanyName,'id':$scope.params.shuttleCompanyId};
	
		$scope.active = !flag;
	};

	$scope.close = function(){
		alertify.confirm('请确认是否离开该页面,未保存的数据将在离开之后丢失。',function(){
			$state.go('admin.scheduler.bus')
		},function(){

		});
	}

	$scope.updateBusProfile = function(formValidateIsInvalid){

		if(formValidateIsInvalid) return utilFactory.setDirty($scope.formValidate);

		alertify.confirm('确认更新牌照信息为"'+$scope.params.licensePlate+'"的车辆?',function(){
			$scope.submitOnProgress = true;
			$scope.submitStatusText = "正在更新中...";

			var _params = {
				"annualInspectionExpiration":utilFactory.getTimestamp($scope.params.annualInspectionExpiration),
				"availableSeats": $scope.params.availableSeats,
				"engineNumber": $scope.params.engineNumber,
				"insuranceExpiration": utilFactory.getTimestamp($scope.params.annualInspectionExpiration),
				//"insuranceExpiration": utilFactory.getTimestamp($scope.params.insuranceExpiration),
				"licensePlate": $scope.params.licensePlate,
				"schedulerId": $scope.params.schedulerId,
				"secondCompanyId": $scope.params.secondCompanyId,
				"shuttleCompanyId": $scope.params.busCompanyObj.id,
				"shuttleCompanyName": $scope.params.busCompanyObj.name,
				"vehicleLicense": $scope.params.vehicleLicense,
				"vehicleModel": $scope.params.vehicleModel,
				"vin": $scope.params.vin,
				'vehicleId':$scope.params.vehicleId
			};


			schedulerHttpService.updateBus(_params).then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					$state.go('admin.scheduler.bus')
					alertify.alert('更新成功！',function(){
						$scope.submitStatusText = '完成';
						$scope.active = true;
						$state.go('admin.scheduler.bus')
					})
				}else{
					$scope.submitStatusText = '完成';
					utilFactory.checkErrorCode(responseData.error.statusCode);
					$scope.submitOnProgress = false;
				}
			
			},function(errorResult){
				$scope.submitStatusText = '完成';
				$scope.active = true;
				alertify.alert(errorResult.error.message)
			})
		},function(){

		}).set({labels:{ok:'确定', cancel: '取消'}, padding: true});;
	};
})