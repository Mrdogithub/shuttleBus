angular.module('schedulerAddBusControllerModule',[])
.controller('schedulerAddBusController',function(schedulerHttpService,utilFactory,$stateParams,$state,$scope){
	if($stateParams.secondCompanyId && $stateParams.schedulerId){ 
		$scope.params = {
		  // "annualInspectionExpiration":$stateParams.annualInspectionExpiration,
		  // "availableSeats": $stateParams.availableSeats,
		  // "engineNumber": $stateParams.engineNumber,
		  // "insuranceExpiration": $stateParams.insuranceExpiration,
		  // "licensePlate": $stateParams.licensePlate,
		  "schedulerId": $stateParams.schedulerId,
		  "secondCompanyId": $stateParams.secondCompanyId,
		  'busCompany':[{'name':'数据加载中...','id':null}],
		  'noDataForOptionList':false
		  // "shuttleCompanyId": $stateParams.shuttleCompanyId,
		  // "vehicleLicense": $stateParams.vehicleLicense,
		  // "vehicleModel": $stateParams.vehicleModel,
		  // "vin": $stateParams.vin
		}
		$scope.breadcrumbParams = {
			'schedulerId':$stateParams.schedulerId,
			'secondCompanyId':$stateParams.secondCompanyId	
		}
		$scope.active = true;
		$scope.submitOnProgress = false;
		$scope.breadcrumbText={
			'lv1':'车辆管理',
			'lv2':'新增车辆'
		}

		// Get bus company list
		schedulerHttpService.getBusCompany({'schedulerId': $stateParams.schedulerId,'secondCompanyId': $stateParams.secondCompanyId}).then(function(result){
			var	_resultData = result.data;

			if(!_resultData.error){
				$scope.params.busCompany.length = 0;
				_resultData.value.list.length? $scope.params.busCompany = _resultData.value.list :$scope.params.noDataForOptionList = true
			} else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		});
	}else{
		$state.go('admin.scheduler.bus')
	}

	$.fn.datepicker.dates['zh-CN'] = {
			days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
			daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
			daysMin:  ["日", "一", "二", "三", "四", "五", "六"],
			months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
			today: "今日",
			clear: "清除",
			format: "yyyy/mm/dd",
			titleFormat: "yyyy/mm",
			weekStart: 1
	};
	

	$('.datepicker').datepicker({ language: "zh-CN"});


	$scope.editDriverProfile = function(flag){
		$scope.active = !flag;
	};


	$scope.close = function(){
		alertify.confirm('请确认是否离开该页面,未保存的数据将在离开之后丢失。',function(){
			$state.go('admin.scheduler.bus')
		},function(){});	
	}

	$scope.submitDriverProfile = function(formValidateIsInvalid){

		if(formValidateIsInvalid) return utilFactory.setDirty($scope.formValidate);

		alertify.confirm('确认新增 "'+$scope.params.licensePlate+'"?',function(){
			$scope.submitOnProgress = true;
			$scope.submitStatusText = "正在创建中...";

			var _params = {
				"annualInspectionExpiration":utilFactory.getTimestamp($scope.params.annualInspectionExpiration),
				"availableSeats": $scope.params.availableSeats,
				"engineNumber": $scope.params.engineNumber,
				"insuranceExpiration": utilFactory.getTimestamp($scope.params.annualInspectionExpiration),
				//"insuranceExpiration": utilFactory.getTimestamp($scope.params.insuranceExpiration),
				"licensePlate": $scope.params.licensePlate,
				"schedulerId": utilFactory.getAccountId(),
				"secondCompanyId": utilFactory.getSecondCompanyId(),
				"shuttleCompanyId":$scope.params.busCompanyObj.partyId,
				'shuttleCompanyName': $scope.params.busCompanyObj.name,
				"vehicleLicense": $scope.params.vehicleLicense,
				"vehicleModel": $scope.params.vehicleModel,
				"vin": $scope.params.vin
			}
			
			schedulerHttpService.addBus(_params).then(function(result){
				var responseData = result.data;
				if(!responseData.error){
		
					alertify.alert('新增成功！',function(){
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
		},function(){}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
	};
})