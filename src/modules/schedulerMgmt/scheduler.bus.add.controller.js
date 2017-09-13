'use strict'
angular.module('schedulerAddBusControllerModule',[])
.controller('schedulerAddBusController',function(schedulerHttpService,setDirty,$stateParams,$state,$scope){

	if($stateParams.secondCompanyId && $stateParams.schedulerUUID){ 
		$scope.params = {
		  // "annualInspectionExpiration":$stateParams.annualInspectionExpiration,
		  // "availableSeats": $stateParams.availableSeats,
		  // "engineNumber": $stateParams.engineNumber,
		  // "insuranceExpiration": $stateParams.insuranceExpiration,
		  // "licensePlate": $stateParams.licensePlate,
		  "schedulerUUID": $stateParams.schedulerUUID,
		  "secondCompanyId": $stateParams.secondCompanyId,
		  // "shuttleCompanyId": $stateParams.shuttleCompanyId,
		  // "vehicleLicense": $stateParams.vehicleLicense,
		  // "vehicleModel": $stateParams.vehicleModel,
		  // "vin": $stateParams.vin
		}
		$scope.breadcrumbParams = {
			'schedulerUUID':$stateParams.schedulerUUID,
			'secondCompanyId':$stateParams.secondCompanyId	
		}
		$scope.active = true;
		$scope.submitOnProgress = false;
		$scope.breadcrumbText={
			'lv1':'车辆管理',
			'lv2':'新增车辆'
		}
	}else{
		$state.go('scheduler.bus')
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
		alertify.confirm('请确认是否离开该inde页面,未保存的数据将在离开之后丢失。',function(){
			$state.go('scheduler.bus')
		},function(){

		});
		
	}

	$scope.submitDriverProfile = function(formValidateIsInvalid){

		if(formValidateIsInvalid) return setDirty($scope.formValidate);

		alertify.confirm('确认新增 "'+$scope.params.licensePlate+'"?',function(){
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
				"shuttleCompanyName":$scope.params.shuttleCompanyName,
				"vehicleLicense": $scope.params.vehicleLicense,
				"vehicleModel": $scope.params.vehicleModel,
				"vin": $scope.params.vin
			}

			console.log(1,_params)
			schedulerHttpService.addBus(_params).then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					$state.go('scheduler.driver',{'schedulerUUID':_params.schedulerUUID,'secondCompanyID':_params.shuttleCompanyId})
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
		alertify.confirm('该车辆仍有排版任务,如果继续删除,排班也将被情况！清查看排班,并替换车辆。',function(){
			var _params = {
				'vehicleId':$scope.params.vehicleId,
				'schedulerUUID':$scope.params.schedulerUUID,
			};

			schedulerHttpService.deleteBusByID(_params).then(function(result){
				console.log(1,result)
			},function(){
				$.aleret('正在建设中...')
			})
		},function(){}).set('labels', {cancel:'查看排班',ok:'坚持删除'});;

	};

})